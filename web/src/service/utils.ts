export const getImageUrl = (id: number) => {
  const url = new URL(`../assets/images/content/${id}.png`, import.meta.url)
  return url.href
}
