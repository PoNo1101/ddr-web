<script setup lang="ts">
import router from '@/router'
import { getImageUrl } from '@/service/utils'
import { useTemporaryGameStore } from '@/stores/temporary_game_store'
import { onMounted, ref, watch } from 'vue'

const store = useTemporaryGameStore()
const rolling = ref<boolean>(true)
const rolling_element = ref()

defineProps<{
  content: Content
}>()

const contents = getSlice(10)
function getSlice(n: number) {
  const bag = store.getBag
  const scrambled = bag.sort(() => Math.random() - 0.5)
  return scrambled.slice(0, Math.min(bag.length, n))
}

onMounted(() => {
  setTimeout(
    () => {
      rolling.value = false
    },
    2000 + Math.random() * 3000,
  )
})

function pick(content: Content) {
  store.current = content
  router.push('/climb')
}
</script>

<template>
  <div class="common-rollcard">
    <div class="gradient" v-if="!rolling"></div>
    <div class="common-trial-card">
      <div class="card-gradient"></div>
      <div ref="rolling_element" v-if="rolling" class="common-trial-card-rolling">
        <img v-for="content in contents" :src="getImageUrl(content.image)" :key="content.image" />
        <img v-for="content in contents" :src="getImageUrl(content.image)" :key="content.image" />
      </div>
      <div v-else class="common-content-card-picked">
        <img class="dummy" v-for="content in getSlice(5)" :src="getImageUrl(content.image)" />
        <div class="common-trial-card-image">
          <img @click="pick(content)" :src="getImageUrl(content.image)" />
          <p>{{ content.name }}</p>
        </div>
        <img
          class="dummy"
          v-for="content in getSlice(5)"
          :src="getImageUrl(content.image)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.common-rollcard {
  position: relative;
}

.common-trial-card {
  position: relative;
  background-color: black;
  width: 300px;
  height: 480px;
  overflow: hidden;
  display: flex;
  align-items: center;
  /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.418); */
}

.common-content-card-picked {
  display: flex;
  flex-direction: column;
  justify-content: start;
  animation: stop 1000ms cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes gradient {
  from {
    opacity: 1;
    transform: scale(100%);
  }
  to {
    opacity: 0;
    transform: scale(100%, 300%);
  }
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    ellipse at center,
    rgba(255, 225, 255, 1) 0%,
    rgba(255, 225, 255, 0) 100%
  );
  z-index: -10;
  animation: gradient 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  animation-fill-mode: forwards;
}

.card-gradient {
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 10;
}

.common-content-card-picked img {
  width: 100%;
  height: auto;
}

@keyframes stop {
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes stop_dummy {
  from {
    filter: blur(0) saturate(2);
  }
  to {
    filter: blur(2px) saturate(0);
  }
}

.common-content-card-picked > .dummy {
  opacity: 0.5;
  animation: stop_dummy 4000ms cubic-bezier(0.19, 1, 0.22, 1);
  animation-fill-mode: forwards;
}

.common-trial-card-rolling {
  height: 95px;
  position: relative;
  margin-top: 150%;
  height: fit-content;
  animation: 400ms rolling linear;
  animation-iteration-count: infinite;
}

.common-trial-card-rolling > img {
  width: 100%;
  filter: blur(6px);
}

@keyframes rolling {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-50%);
  }
}

.common-trial-card-image {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  cursor: pointer;
}

.common-trial-card-image > p {
  opacity: 0;
  position: absolute;
  top: 50%;
  text-align: center;
  text-shadow: rgb(0, 0, 0) 1px 0 10px;
  color: white;
  filter: blur(2px);
  transform: translateY(-50%);
  font-size: 18px;
  text-transform: uppercase;
  text-wrap: wrap;
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  pointer-events: none;
}

.common-trial-card-image:hover > p {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  filter: blur(0);
  opacity: 1;
}

.common-trial-card-image:hover > img {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  cursor: pointer;
  filter: saturate(2);
  box-shadow: 0px 0px 30px 0px white;
}

.common-trial-card-image:hover {
  transition: 600ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  cursor: pointer;
  box-shadow: 0px 0px 30px 0px white;
}

.common-trial-card-name {
  font-family: 'Gloock';
  color: var(--c-primary);
  text-align: center;
}

@keyframes moveleft {
  from {
    opacity: 0;
    transform: translateX(300px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveright {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes movemiddle {
  from {
    opacity: 0;
    transform: translateY(-80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes movemiddler {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
