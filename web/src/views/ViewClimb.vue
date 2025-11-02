<script setup lang="ts">
import CompositeNavigation from '@/components/composite/CompositeNavigation.vue'
import CompositeDungeonTree from '@/components/composite/CompositeDungeonTree.vue'
import CommonFog from '@/components/common/CommonFog.vue'
import { useTemporaryGameStore } from '@/stores/temporary_game_store'
import { onMounted } from 'vue'
import router from '@/router'
import CompositeTimer from '@/components/composite/CompositeTimer.vue'

const store = useTemporaryGameStore()
onMounted(() => {
  if (store.current === null) {
    router.push('/floor')
  }
})
</script>

<template>
  <div class="view-tree">
    <CommonFog />
    <CompositeNavigation mode="dark" />
    <CompositeTimer />
    <CompositeDungeonTree class="tree" />
  </div>
</template>

<style scoped>
.tree {
  position: absolute;
  left: 50%;
  top: calc(50% - 60px);
}

.fog > img {
  width: 100%;
}

.view-tree {
  padding: 32px;
}

.view-climb-content-background > img {
  opacity: 0.1;
  transform: scale(110%);
  filter: blur(3px);
  height: 100%;
  width: 100vw;
}

.view-climb {
  background-color: var(--c-white);
  color: var(--c-black);
  padding: 32px;
  height: 100vh;
  box-sizing: border-box;
}

.view-climb-roll-button-dots > div {
  position: absolute;
}

.view-climb-roll-button {
  position: relative;
}

.view-climb-roll-button > button {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
}

.view-climb-roll-button > button:hover {
  position: relative;
  box-shadow: var(--c-primary) 0 0 30px 0;
}

.view-climb-roll-button > button:hover {
  background-color: var(--c-white);
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  transform: scale(110%);
  color: var(--c-strong);
  content: 'bla';
}

.view-climb-roll-button > img {
  transform: translate(-50%, -50%);
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 50%;
  filter: brightness(0) saturate(100%);
  opacity: 0.1;
  width: 420px;
}

p {
  color: var(--c-black);
}
</style>
