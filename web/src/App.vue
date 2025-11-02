<script setup lang="ts">
import CompositeFooter from './components/composite/CompositeFooter.vue'
</script>

<template>
  <div>
    <RouterView v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <CompositeFooter />
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 600ms,
    transform 600ms cubic-bezier(0.19, 1, 0.22, 1);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
