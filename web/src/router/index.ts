import ViewClimb from '@/views/ViewClimb.vue'
import ViewDeath from '@/views/ViewDeath.vue'
import ViewFloor from '@/views/ViewFloor.vue'
import ViewHome from '@/views/ViewHome.vue'
import ViewRoll from '@/views/ViewRoll.vue'
import ViewRules from '@/views/ViewRules.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: ViewHome,
      meta: { transition: 'slide-left' },
    },
    {
      name: 'rules',
      path: '/rules',
      component: ViewRules,
      meta: { transition: 'slide-left' },
    },
    {
      name: 'climb',
      path: '/climb',
      component: ViewClimb,
      meta: { transition: 'slide-left' },
    },
    {
      name: 'floor',
      path: '/floor',
      component: ViewFloor,
      meta: { transition: 'slide' },
    },
    {
      name: 'roll',
      path: '/roll',
      component: ViewRoll,
      meta: { transition: 'slide' },
    },
    {
      name: 'death',
      path: '/death',
      component: ViewDeath,
      meta: { transition: 'slide' },
    },
  ],
})

export default router
