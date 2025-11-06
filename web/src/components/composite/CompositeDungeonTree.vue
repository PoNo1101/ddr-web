<script setup lang="ts">
import { getImageUrl } from '@/service/utils'
import { useTemporaryGameStore, type HistoryContent } from '@/stores/temporary_game_store'
import CommonButton from '../common/CommonButton.vue'
import { onMounted, ref } from 'vue'

const store = useTemporaryGameStore()
const step = 300
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const points = ref<{ x: number; y: number }[]>([])
const history = store.getHistory.reverse()
onMounted(() => {
  for (let i = 0; i < store.getHistory.length; i++) {
    const x = Math.round(rand(-300, 300))
    const y = step + i * step
    points.value.push({ x, y })
  }
})

function getCompletionTime(item: HistoryContent) {
  const elapsed = item.complete - store.start_time
  const e = (num: number) => String(num).padStart(2, '0')
  const s = Math.floor((elapsed / 1000) % 60)
  const m = Math.floor(elapsed / 60 / 1000)
  const h = Math.floor(elapsed / 3600 / 1000)
  if (h > 1) {
    return `${e(h)}:${e(m)}:${e(s)}`
  }
  return `${e(m)}:${e(s)}`
}
</script>

<template>
  <div class="composite-dungeon-tree">
    <div class="node" v-if="store.getCurrent">
      <div class="node-info" :style="{ left: '136px' }">
        <p>
          Floor <strong>{{ store.getLevel }}</strong>
        </p>
        <p>{{ store.getCurrent.name }}</p>
        <div class="node-options">
          <CommonButton @click="store.next()">VALIDATE</CommonButton>
          <CommonButton @click="store.wipe()">CALL WIPE</CommonButton>
        </div>
      </div>
      <div class="node-image">
        <img :src="getImageUrl(store.getCurrent.image)" />
      </div>
    </div>
    <div
      class="node history"
      v-for="(item, i) in history"
      :style="points[i] ? { top: `${points[i].y}px`, left: `${points[i].x}px` } : {}"
    >
      <div class="node-info">
        <p>
          Floor <strong>{{ store.getLevel - i - 1 }}</strong>
        </p>
        <p>{{ item.name }}</p>
        <p>
          Completed at <strong>{{ getCompletionTime(item) }}</strong>
        </p>
      </div>
      <div v-if="points[i]" class="line" :style="{ left: `${-300 - points[i].x}px` }">
        <svg height="300" width="680" xmlns="http://www.w3.org/2000/svg">
          <line
            v-if="points[i - 1]"
            :x1="340 + points[i - 1]!.x"
            y1="0"
            :x2="340 + points[i].x"
            y2="300"
            style="stroke: white; stroke-width: 2"
          />
          <line
            v-else
            x1="300"
            y1="0"
            :x2="340 + points[i].x"
            y2="300"
            style="stroke: white; stroke-width: 2"
          />
        </svg>
      </div>
      <div class="node-image">
        <img :src="getImageUrl(item.image)" />
      </div>
    </div>
    <div
      class="node start"
      :style="{
        top: `${step + store.getHistory.length * step}px`,
      }"
    >
      <p>ENTRANCE</p>
    </div>
  </div>
</template>

<style scoped>
.node-info {
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  top: 0;
  left: 96px;
  z-index: 10;
}

.node-options {
  display: flex;
  width: 600px;
  gap: 16px;
  margin-top: 16px;
}

strong {
  color: var(--c-strong);
}

.node-info > p {
  color: var(--c-white);
}

.node .line {
  position: absolute;
  bottom: 40px;
  height: 300px;
  z-index: -1;
  opacity: 0.6;
}

.composite-dungeon-tree {
  position: relative;
  display: flex;
  justify-content: center;
}

.start p {
  color: var(--c-white);
  width: 10px;
  height: 10px;
  margin-bottom: 500px;
}

.node-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  overflow: hidden;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 30px 30px black;
}

.node-image > img {
  height: 110%;
}

.node {
  position: absolute;
}

.node.history .node-image {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  filter: saturate(0) blur(2px) brightness(0.8);
  width: 80px;
  height: 80px;
}

.node.history .node-image:hover {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;
  transform: scale(120%);
  filter: saturate(2);
}
</style>
