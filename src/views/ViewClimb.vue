<script setup lang="ts">
import CompositeNavigation from '@/components/composite/CompositeNavigation.vue'
import CompositeDungeonTree from '@/components/composite/CompositeDungeonTree.vue'
import CommonFog from '@/components/common/CommonFog.vue'
import { onMounted } from 'vue'
import router from '@/router'
import CompositeTimer from '@/components/composite/CompositeTimer.vue'
import { $_level_get_content } from '@/composable/storage/composable_storage_level'

onMounted(() => {
  if ($_level_get_content() === null) {
    router.push('/floor')
  }
})
</script>

<template>
  <div class="view-climb">
    <CommonFog />
    <CompositeNavigation mode="dark" />
    <CompositeTimer />
    <CompositeDungeonTree class="view-climb-tree" />
  </div>
</template>

<style scoped>
.view-climb-tree {
  position: absolute;
  left: 50%;
  top: calc(50% - 60px);
}

.fog > img {
  width: 100%;
}

.view-climb {
  padding: 32px;
}

.view-climb-content-background > img {
  opacity: 0.1;
  transform: scale(110%);
  filter: blur(3px);
  height: 100%;
  width: 100vw;
}
</style>
