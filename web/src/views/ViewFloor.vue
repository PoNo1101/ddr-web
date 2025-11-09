<script setup lang="ts">
import CommonButton from '@/components/common/CommonButton.vue'
import CompositeNavigation from '@/components/composite/CompositeNavigation.vue'
import LayoutPageContainer from '@/components/layout/LayoutPageContainer.vue'
import Circle from '@/assets/images/circle2.png'
import { useTemporaryGameStore } from '@/stores/temporary_game_store'
import BossIcon from '@/assets/images/boss.png'
import router from '@/router'

const store = useTemporaryGameStore()

function onMouseUp() {
  router.push('/roll')
}
</script>

<template>
  <div class="view-climb">
    <CompositeNavigation mode="light" />
    <LayoutPageContainer>
      <img class="view-floor-boss-icon" :src="BossIcon" v-if="store.isBoss" />
      <div class="view-climb-roll-button">
        <img :src="Circle" alt="" />
        <CommonButton :class="{ boss: store.isBoss }" @click="onMouseUp">
          FLOOR {{ store.level }}
        </CommonButton>
        <div class="view-climb-roll-button-dots">
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

.view-climb {
  background-color: var(--c-white);
  color: var(--c-black);
  padding: 32px;
  height: calc(100vh - 20px);
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

.view-climb-roll-button > button.boss:hover {
  background-color: var(--c-danger);
  color: var(--c-white);
  box-shadow: var(--c-danger) 0 0 30px 0;
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
