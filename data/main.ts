import fs from "fs";

const BASE_URL = "https://v2.xivapi.com/api/";

type Content = {
  name: string;
  type: number;
  level: number;
  image: number;
};

const output: Content[] = [];
const image_ids: number[] = [];

console.log("Requesting data...");
request(undefined, 10).finally(() => {
  fs.writeFileSync("data.json", JSON.stringify(output));
  console.log("Cleaning up images..");
  for (const file of fs.readdirSync("img/")) {
    const filename = file.replace(".png", "");
    const id = parseInt(filename);
    if (!image_ids.includes(id)) {
      fs.unlink(`img/${file}`, (e) => console.error(e));
    }
  }

  console.log("Done!");
});

function getType(result: any): number {
  const name = result.fields.Content.fields.ContentFinderCondition.fields.Name;
  const type = result.fields.ContentType.fields.Name;
  if (type === "Trials") {
    if (name.includes("(Extreme)") || name.includes("Minstrel")) {
      return 1;
    }
    return 0;
  }

  if (type === "Raids") {
    if (name.includes("(Savage)")) {
      return 3;
    }
    return 2;
  }

  if (type === "Ultimate Raids") {
    return 4;
  }

  return 5;
}

async function fetchImage(id: number, path: string): Promise<number> {
  const outpath = `img/${id}.png`;
  if (fs.existsSync(outpath)) {
    return id;
  }

  const url = new URL(`${BASE_URL}/asset`);
  url.searchParams.append("path", path);
  url.searchParams.append("format", "png");
  const response = await fetch(url.toString());
  if (response.body === null) {
    throw "Unable to retreive body";
  }

  const abf = await response.arrayBuffer();
  const buffer = Buffer.from(abf);

  fs.writeFile(outpath, buffer, (e) => console.error(e));
  console.log(`Downloaded ${outpath}`);
  return id;
}

async function request(next?: string, max_next = 100, current = 1) {
  const url = new URL(`${BASE_URL}/search`);

  url.searchParams.append("sheets", "ContentFinderCondition");
  url.searchParams.append(
    "fields",
    "Content.ContentFinderCondition.Name,Content.ContentFinderCondition.Image.path,ContentType.Name,ClassJobLevelRequired"
  );

  url.searchParams.append(
    "query",
    '+(ContentType.Name="Raids" ContentType.Name="Trials" ContentType.Name="Ultimate Raids") +ContentMemberType.Unknown2=8'
  );

  if (next) {
    url.searchParams.append("cursor", next);
  }

  const response = await fetch(url.toString());
  const content = await response.json();
  for (const result of content.results) {
    if (!result.fields.Content.fields) {
      continue;
    }

    const image = await fetchImage(
      result.fields.Content.fields.ContentFinderCondition.fields.Image.id,
      result.fields.Content.fields.ContentFinderCondition.fields.Image.path
    );

    image_ids.push(image);
    output.push({
      name: result.fields.Content.fields.ContentFinderCondition.fields.Name,
      type: getType(result),
      image: image,
      level: result.fields.ClassJobLevelRequired,
    });
  }

  if (content.next && current < max_next) {
    await request(content.next, max_next, current + 1);
  }
}
