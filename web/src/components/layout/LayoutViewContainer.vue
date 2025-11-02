<template>
  <div class="layout-view-container">
    <slot />
  </div>
</template>

<style scoped>
.layout-view-container {
  position: relative;
  min-width: 1320px;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 32px;
  overflow: hidden;
}
</style>
