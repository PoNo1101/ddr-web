<script setup lang="ts">
import { CONST_SECTION_DURATION, useTemporaryGameStore } from '@/stores/temporary_game_store'
import { ref } from 'vue'

const remaining = ref<number>()
const store = useTemporaryGameStore()
const timer = setInterval(() => {
  const now = Date.now()
  const elapsed = now - store.start_time
  remaining.value = CONST_SECTION_DURATION - elapsed

  if (remaining.value < 0) {
    clearInterval(timer)
    return
  }
}, 1000)

const e = (num: number) => String(num).padStart(2, '0')
</script>

<template>
  <div class="composite-timer" v-if="remaining">
    <p>Time remaining :</p>
    <p v-if="remaining > 0">
      {{ e(Math.floor(remaining / 3600 / 1000)) }} : {{ e(Math.floor(remaining / 60 / 1000)) }} :
      {{ e(Math.floor((remaining / 1000) % 60)) }}
    </p>
    <p v-else class="composite-timer-timeout">Timeout.</p>
  </div>
</template>

<style scoped>
.composite-timer-timeout {
  color: var(--c-danger);
}

p {
  color: var(--c-white);
}
</style>
