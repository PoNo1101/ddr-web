<template>
  <div class="layout-page-container">
    <slot />
  </div>
</template>

<style scoped>
.layout-page-container {
  max-width: 1320px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
