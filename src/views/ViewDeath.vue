<script setup lang="ts">
import CommonButton from '@/components/common/CommonButton.vue'
import CompositeNavigation from '@/components/composite/CompositeNavigation.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="view-death">
    <CompositeNavigation mode="dark" />
    <div class="view-death-message">
      <p>YOU DIED</p>
      <RouterLink to="/floor">
        <CommonButton>RETRY</CommonButton>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@keyframes youdied {
  0% {
    opacity: 0;
    transform: scale(50%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(100%);
  }
}

@keyframes youdied_button {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.view-death {
  padding: 32px;
}

.view-death-message {
  display: flex;
  margin-top: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
}

.view-death-message > p {
  font-size: 86px;
  animation: youdied 4s ease-out;
  animation-fill-mode: forwards;
}

.view-death-message > a {
  opacity: 0;
  animation: youdied_button 3000ms 4s;
  animation-fill-mode: forwards;
}

p {
  color: var(--c-danger);
}
</style>
