import { useLocalStorage } from '@vueuse/core'
import { $_level_bag } from './composable_storage_level'

const $_draft = useLocalStorage<Content[]>('game_draft', [], {
  serializer: {
    read: (v: any) => {
      return v ? JSON.parse(v) : null
    },
    write: (v: any) => {
      return JSON.stringify(v)
    },
  },
})

export const $_draft_get = () => $_draft.value
export const $_draft_generate = () => {
  const bag = $_level_bag()
  if (bag === null) throw 'Unable to generate draft with empty bag.'
  const scramble = bag.sort(() => Math.random() - 0.5)
  $_draft.value = scramble.slice(0, 3)
}

export function hasDraft(): boolean {
  return $_draft.value ? ($_draft.value.length > 0 ? true : false) : false
}
