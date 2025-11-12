<script setup lang="ts">
import background from '@/assets/images/home.png'
import Circle from '@/assets/images/circle.png'
import LayoutViewContainer from '@/components/layout/LayoutViewContainer.vue'
import CompositeNavigation from '@/components/composite/CompositeNavigation.vue'
</script>

<template>
  <LayoutViewContainer class="view-home">
    <CompositeNavigation mode="dark" />
    <img class="view-home-background" :src="background" alt="" />
    <div class="view-home-title">
      <img class="view-home-title-circle" :src="Circle" alt="" />
      <h1>DEEP DUNGEON <span>RELOADED</span></h1>
      <h2>The Final Fantasy XIV Raiding Ascension</h2>
      <RouterLink to="/rules" class="view-home-button">✦ START THE CLIMB! ✦</RouterLink>
    </div>
  </LayoutViewContainer>
</template>

<style scoped>
.view-home-title {
  position: absolute;
  width: 66vh;
  right: 30vh;
  top: 60vh;
}

.view-home-title-circle {
  position: absolute;
  width: 110vh;
  rotate: 20deg;
  right: -50vh;
  opacity: 0.1;
  top: -40vh;
  pointer-events: none;
  animation: 3000ms cubic-bezier(0.19, 1, 0.22, 1) 0s 1 rotate;
}

.view-home-button {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  background: linear-gradient(to left, #706742 10%, var(--c-black) 90%);
  color: var(--c-primary);
  padding: 16px 32px;
  border: 1px solid var(--c-primary);
  display: block;
  width: fit-content;
  margin-left: auto;
}

.view-home-button:hover {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  color: var(--c-white);
  border: 1px solid var(--c-white);
}

.view-home-background {
  position: absolute;
  left: 0;
  z-index: -1;
  top: 0;
  z-index: -100;
  mask-image: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  width: auto;
  height: 100%;
  animation: 3000ms cubic-bezier(0.19, 1, 0.22, 1) 0s 1 scale;
}

@keyframes left {
  0% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes right {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(110%);
  }
  100% {
    opacity: 1;
    transform: scale(100%);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}

h1 {
  color: var(--c-white);
  text-shadow: 0px 0px 20px rgb(32, 32, 32);
  font-size: 6vh;
  margin-bottom: 2vh;
  z-index: auto;
  animation: 3000ms cubic-bezier(0.19, 1, 0.22, 1) 0s 1 left;
}

h2 {
  color: var(--c-white);
  text-align: right;
  margin-bottom: 4vh;
  font-size: 2vh;
}

h1 span {
  text-shadow: none;
  font-family: inherit;
  position: absolute;
  right: 0;
  top: -6vh;
  display: block;
  font-size: 10vh;
  z-index: -1;
  background-image: linear-gradient(to right, rgba(250, 240, 200, 0.4), rgb(250, 240, 200, 0.8));
  color: transparent;
  background-clip: text;
  animation: 3000ms cubic-bezier(0.19, 1, 0.22, 1) 0s 1 left;
}
</style>
