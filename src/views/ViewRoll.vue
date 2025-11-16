<script setup lang="ts">
import CommonTrialCard from '@/components/common/CommonTrialCard.vue'
import { $_draft_get } from '@/composable/storage/composable_storage_draft'
import { $_level_set_content } from '@/composable/storage/composable_storage_level'
import router from '@/router'

function pick(content: Content) {
  $_level_set_content(content)
  router.push('/climb')
}
</script>

<template>
  <div class="view-roll">
    <div class="view-roll-cards" v-if="$_draft_get()">
      <CommonTrialCard v-for="item in $_draft_get()" :content="item" @click="pick(item)" />
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

.view-roll-cards {
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

.view-roll-cards {
  display: flex;
  gap: 16px;
}

p {
  color: var(--c-white);
}
</style>
