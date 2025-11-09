export type LevelContentBagRule = (data: Content[]) => Content[]

/*
Content ids
0: normal trial
1: extreme trial
2: normal raid
3: savage raid
4: ultimate raids
5: other?
*/

const BOSS_1 = 5
const BOSS_2 = 10
const BOSS_3 = 15

export function getLevelContentBagRule(level: number): LevelContentBagRule {
  if (level === BOSS_1) return RULE_BOSS_1
  if (level === BOSS_2) return RULE_BOSS_2
  if (level === BOSS_3) return RULE_BOSS_3
  if (level < BOSS_1) return RULE_10
  if (level < BOSS_2) return RULE_20
  if (level < BOSS_3) return RULE_30
  return RULE_INF
}

function RULE_BOSS_1(data: Content[]): Content[] {
  return data.filter((e) => e.type === 1)
}

function RULE_BOSS_2(data: Content[]): Content[] {
  return data.filter((e) => e.type === 3)
}

function RULE_BOSS_3(data: Content[]): Content[] {
  return data.filter((e) => e.type === 4)
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
