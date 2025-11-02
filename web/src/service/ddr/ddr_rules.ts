export type LevelContentBagRule = (data: Content[]) => Content[]

export function getLevelContentBagRule(level: number): LevelContentBagRule {
  if (level < 10) return RULE_10
  if (level < 20) return RULE_20
  if (level < 30) return RULE_30
  return RULE_INF
}

function RULE_10(data: Content[]): Content[] {
  return data.filter((e) => e.type === 0)
}

function RULE_20(data: Content[]): Content[] {
  return data.filter((e) => e.type === 0 || e.type === 1 || e.type === 2)
}

function RULE_30(data: Content[]): Content[] {
  return data.filter((e) => e.type === 0 || e.type === 1 || e.type === 2 || e.type === 3)
}

function RULE_INF(data: Content[]): Content[] {
  return data
}
