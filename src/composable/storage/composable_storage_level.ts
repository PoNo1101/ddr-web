import { getLevelContentBagRule } from '@/service/ddr/ddr_rules'
import { useLocalStorage } from '@vueuse/core'
import data from '@/assets/data.json'
import { $_draft_generate } from './composable_storage_draft'

type StorageLevel = {
  level: number
  content: Content | null
  complete: number | null
}

const $_level_history = useLocalStorage<StorageLevel[]>('game_level_history', [])
const $_level = useLocalStorage<StorageLevel>('game_level', {
  level: 1,
  content: null,
  complete: null,
})

export const $_level_get = () => $_level.value
export const $_level_set_content = (content: Content) => ($_level.value.content = content)
export const $_level_history_get = () => $_level_history.value
export const $_level_get_content = () => $_level.value.content
export const $_level_isboss = () => [5, 10, 15].includes($_level.value.level)
export const $_level_reset = () => {
  $_level_history.value = []
  $_level.value = {
    level: 1,
    content: null,
    complete: null,
  }
}

export const $_level_rule = () =>
  $_level.value ? getLevelContentBagRule($_level.value.level) : null

export const $_level_bag = () => {
  const rule = $_level_rule()
  if (rule === null) return null
  return rule(data)
}

export const $_level_complete = () => {
  if ($_level.value.content === null) {
    throw "Can't complete non existent level."
  }

  $_level.value.complete = Date.now()
  $_level_history.value.push({ ...$_level.value })

  $_level.value.level++
  $_level.value.content = null
  $_level.value.complete = null

  $_draft_generate()
}

export const $_level_history_sorted = () => $_level_history.value.sort((a, b) => b.level - a.level)
