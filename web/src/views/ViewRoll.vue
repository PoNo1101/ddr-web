<script setup lang="ts">
import CommonTrialCard from '@/components/common/CommonTrialCard.vue'
import { useTemporaryGameStore } from '@/stores/temporary_game_store'
import { onMounted } from 'vue'

const store = useTemporaryGameStore()
onMounted(() => {
  store.roll()
})
</script>

<template>
  <div class="view-roll">
    <div class="view-climb-cards" v-if="store.getDraft">
      <CommonTrialCard :content="store.getDraft[0]!" />
      <CommonTrialCard :content="store.getDraft[1]!" />
      <CommonTrialCard :content="store.getDraft[2]!" />
    </div>
  </div>
</template>

<style scoped>
.view-roll {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.view-climb-cards {
  opacity: 0;
  animation: up 1000ms cubic-bezier(0.19, 1, 0.22, 1) 600ms;
  animation-fill-mode: forwards;
}

@keyframes up {
  0% {
    opacity: 0;
    transform: scale(150%);
  }
  100% {
    opacity: 1;
    transform: scale(100%);
  }
}

.view-climb-cards {
  display: flex;
  gap: 16px;
}

p {
  color: var(--c-white);
}
</style>
