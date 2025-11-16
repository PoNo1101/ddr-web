import { defineStore } from 'pinia'
import router from '@/router'
import { $_start_remaining } from '@/composable/storage/composable_storage_start'
import { $_level_complete, $_level_reset } from '@/composable/storage/composable_storage_level'

export type HistoryContent = Content & { complete: number }
type DeepDungeonState = {}

/**
 * Alpha version store, very client based.
 * Later versions will be more optimized
 */
export const useGameStore = defineStore('game_store', {
  state: (): DeepDungeonState => ({}),
  actions: {
    reset() {
      $_level_reset()
    },
    next() {
      const time_remaining = $_start_remaining()
      if (time_remaining < 0) {
        this.wipe()
        return
      }

      $_level_complete()
      router.push('/floor')
    },
    wipe() {
      $_level_reset()
      router.push('/death')
    },
  },
})
