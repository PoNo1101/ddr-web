import { useLocalStorage } from '@vueuse/core'

const CONST_SECTION_DURATION = 1000 * 60 * 60 // 1Hour

const e = (num: number) => String(num).padStart(2, '0')

const start = useLocalStorage<number | null>('game_start', null)

export const $_start_get = () => start.value
export const $_start_set = (value: number | null) => (start.value = value)
export const $_start_elapsed = () => (start.value ? Date.now() - start.value : 0)
export const $_start_remaining = () => CONST_SECTION_DURATION - $_start_elapsed()
export const $_start_init = () => (start.value = Date.now())
export const $_start_remaining_serialized = () => {
  const r = $_start_remaining()
  const h = e(Math.floor(r / 3600 / 1000))
  const m = e(Math.floor(r / 60 / 1000))
  const s = e(Math.floor((r / 1000) % 60))
  return `${h}:${m}:${s}`
}
