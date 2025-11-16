<script setup lang="ts">
import { ref } from 'vue'
import {
  $_start_remaining,
  $_start_remaining_serialized,
} from '@/composable/storage/composable_storage_start'
import { $_level_reset } from '@/composable/storage/composable_storage_level'
import router from '@/router'

const start_remaining_serialized = ref<string>($_start_remaining_serialized())
const timer = setInterval(() => {
  const time_remaining = $_start_remaining()
  start_remaining_serialized.value = $_start_remaining_serialized()
  if (time_remaining < 0) {
    clearInterval(timer)
    return
  }
}, 1000)

function reset() {
  if (confirm('Reset your run to the first floor?')) {
    $_level_reset()
    router.push('/floor')
  }
}
</script>

<template>
  <div class="composite-timer" v-if="$_start_remaining()">
    <p>Time remaining :</p>
    <p v-if="$_start_remaining() > 0">{{ start_remaining_serialized }}</p>
    <p v-else class="composite-timer-timeout">Timeout.</p>
    <a @click="reset">Reset progress</a>
  </div>
</template>

<style scoped>
.composite-timer-timeout {
  color: var(--c-danger);
}

p {
  color: var(--c-white);
}

a {
  text-decoration: underline;
  color: var(--c-danger);
}
</style>
