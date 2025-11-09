<script setup lang="ts">
const version = import.meta.env.VITE_APP_VERSION ?? 'local-build'
</script>

<template>
  <div class="composite-footer">
    <p>version {{ version }}</p>
  </div>
</template>

<style scoped>
.composite-footer {
  position: fixed;
  padding: 32px;
  width: fit-content;
  z-index: 100;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
}
</style>
