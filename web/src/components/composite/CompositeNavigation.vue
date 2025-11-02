<script setup lang="ts">
defineProps<{
  mode: 'light' | 'dark'
}>()
</script>

<template>
  <nav class="composite-navigation" :class="mode">
    <RouterLink to="/">Home</RouterLink>
    <span>✦</span>
    <RouterLink to="/rules">Rules</RouterLink>
    <span>✦</span>
    <RouterLink to="/climb">Climb</RouterLink>
  </nav>
</template>

<style scoped>
.composite-navigation {
  margin-bottom: 32px;
}

nav {
  display: flex;
  gap: 16px;
}

.light > * {
  color: var(--c-black);
}

.dark > * {
  color: var(--c-white);
}

nav > span {
  font-size: 12px;
  margin-top: 4px;
}

nav > a:last-child {
  border: none;
}

nav > a {
  font-family: 'Gloock';
  text-align: center;
  font-size: 16px;
}
</style>
