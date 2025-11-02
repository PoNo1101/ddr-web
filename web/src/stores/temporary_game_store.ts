import { getLevelContentBagRule } from '@/service/ddr/ddr_rules'
import { defineStore } from 'pinia'
import data from '@/assets/data.json'
import router from '@/router'

export const CONST_SECTION_DURATION = 1000 * 60 * 60 // 1Hour

export type HistoryContent = Content & { complete: number }
type DeepDungeonState = {
  level: number
  current: Content | null
  draft: Content[] | null
  history: HistoryContent[]
  start_time: number
}

/**
 * Alpha version store, very client based.
 * Later versions will be more optimized
 */
export const useTemporaryGameStore = defineStore('tmp_game_store', {
  state: (): DeepDungeonState => ({
    level: 1,
    current: null,
    draft: null,
    history: [],
    start_time: 0,
  }),
  actions: {
    roll() {
      if (this.level === 1) {
        this.start_time = Date.now()
      }

      const bag = this.getBag
      const scrambled = bag.sort(() => Math.random() - 0.5)
      this.draft = scrambled.slice(0, 3)
    },
    next() {
      const now = Date.now()
      const elapsed = now - this.start_time
      const remaining = CONST_SECTION_DURATION - elapsed
      if (remaining < 0) {
        this.wipe()
        return
      }

      this.level++
      if (this.current) {
        this.history.push({ ...this.current, complete: now })
      }

      this.current = null
      router.push('/floor')
    },
    wipe() {
      this.level = 0
      this.current = null
      router.push('/death')
    },
  },
  getters: {
    getBag: (state): Content[] => {
      const applyRule = getLevelContentBagRule(state.level)
      return applyRule(data)
    },
    getDraft: (state): Content[] | null => state.draft,
    getCurrent: (state): Content | null => state.current,
    getLevel: (state): number => state.level,
    getHistory: (state): HistoryContent[] => state.history,
  },
})
