<script setup lang="ts">
const emits = defineEmits(['click', 'mousedown', 'mouseup'])
</script>

<template>
  <button @click="emits('click')" @mousedown="emits('mousedown')" @mouseup="emits('mouseup')">
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 16px 32px;
  background-color: #303030;
  color: var(--c-primary);
  font-size: 16px;
  letter-spacing: 1.2px;
  font-family: 'Gloock';
  cursor: pointer;
  outline: none;
  border: 1px solid var(--c-primary);
}
</style>
