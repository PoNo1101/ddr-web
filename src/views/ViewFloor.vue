<script setup lang="ts">
import CommonButton from '@/components/common/CommonButton.vue'
import CompositeNavigation from '@/components/composite/CompositeNavigation.vue'
import LayoutPageContainer from '@/components/layout/LayoutPageContainer.vue'
import Circle from '@/assets/images/circle2.png'
import { useGameStore } from '@/stores/temporary_game_store'
import BossIcon from '@/assets/images/boss.png'
import router from '@/router'

const store = useGameStore()
const onClick = () => router.push('/roll')
</script>

<template>
  <div class="view-floor">
    <CompositeNavigation mode="light" />
    <LayoutPageContainer class="view-floor-container">
      <img class="view-floor-boss-icon" :src="BossIcon" v-if="store.isBoss" />
      <div class="view-floor-roll-button">
        <img :src="Circle" alt="" />
        <CommonButton :class="{ boss: store.isBoss }" @click="onClick">
          FLOOR {{ store.level }}
        </CommonButton>
        <div class="view-floor-roll-button-dots">
          <div
            v-for="i in 6"
            :style="{
              opacity: 0.2,
              left: `${i % 2 == 0 ? 220 + i * 10 : -160 + i * 10}px`,
              top: 'calc(50% + 1px)',
              transform: 'translate(0, -50%)',
            }"
          >
            ✦
          </div>
        </div>
      </div>
    </LayoutPageContainer>
  </div>
</template>

<style scoped>
.view-floor-boss-icon {
  position: absolute;
  width: 100px;
  top: 35vh;
}

.view-floor {
  background-color: var(--c-white);
  color: var(--c-black);
  padding: 32px;
  box-sizing: border-box;
  height: 100vh;
}

.view-floor-container {
  height: calc(100% - 20px);
}

.view-floor-roll-button-dots > div {
  position: absolute;
}

.view-floor-roll-button {
  position: relative;
}

.view-floor-roll-button > button {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
}

.view-floor-roll-button > button.boss:hover {
  background-color: var(--c-danger);
  color: var(--c-white);
  box-shadow: var(--c-danger) 0 0 30px 0;
}

.view-floor-roll-button > button:hover {
  position: relative;
  box-shadow: var(--c-primary) 0 0 30px 0;
}

.view-floor-roll-button > button:hover {
  background-color: var(--c-white);
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  transform: scale(110%);
  color: var(--c-strong);
  content: 'bla';
}

.view-floor-roll-button > img {
  transform: translate(-50%, -50%);
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 50%;
  filter: brightness(0) saturate(100%);
  opacity: 0.1;
  width: 420px;
}
</style>
