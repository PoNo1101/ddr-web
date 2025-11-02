<script setup lang="ts">
import CommonButton from '@/components/common/CommonButton.vue'
import CompositeNavigation from '@/components/composite/CompositeNavigation.vue'
import LayoutPageContainer from '@/components/layout/LayoutPageContainer.vue'
</script>

<template>
  <div class="view-rules">
    <CompositeNavigation mode="light" />
    <LayoutPageContainer>
      <h2>RULES</h2>
      <p>✦</p>
      <p>This is a proof of concept, made in a few days. Bugs and spaghetti code are present!!</p>
      <p>
        Welcome in Deep Dungeon Reloaded - A custom gameplay concept that mixes Deep Dungeon &
        Raiding in Final Fantasy XIV! You and your group will be challenged to climb 30 floors by
        fighting 8 man Raiding contents.
      </p>
      <p>
        At each floor, you will have to pick a path between <strong>3 possibilities</strong>. Make
        sure to pick wisely and work as a team to overcome the challenge! After a certain floor
        affixes will be added to your encounters to spice things up!
      </p>
      <p>
        If your group <strong>wipe</strong> you will have to start over from the latest
        <strong>checkpoint</strong>. The checkpoints are floor 10 & 20. Play safe, and have fun!
      </p>
      <RouterLink to="/climb">
        <CommonButton>ENTER THE DUNGEON</CommonButton>
      </RouterLink>
      <p>✦</p>
      <h3>FAQ</h3>
      <p>- How hard it is? -</p>
      <p>
        Encounters will range from very simple <strong>(Basic Trial)</strong> to very difficult
        <strong>(Ultimates)</strong>. Later updates might include difficulty variants to also be
        beginner friendly.
      </p>
      <p>- What is the structure of the dungeon? -</p>
      <p>
        The complete layout can be found here:
        <a href="https://bla.com"> Dungeon Structure </a>
      </p>
      <p>- How to ensure people don't cheat? -</p>
      <p>
        Right now, there is no anti-cheat to ensure people are legit in their runs because the the
        current version doesn't include any leaderboards or competitive elements. It is planned in
        the future to use log applications to ensure legit submissions.
      </p>
    </LayoutPageContainer>
  </div>
</template>

<style scoped>
strong {
  color: var(--c-strong);
}

a {
  color: var(--c-strong);
  text-decoration: underline;
}

.view-rules {
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--c-white);
  color: var(--c-black);
  padding: 32px;
}

h2 {
  color: var(--c-black);
  font-size: 32px;
  font-family: 'Gloock';
  margin-bottom: 16px;
}

h3,
h4 {
  color: var(--c-black);
  margin-bottom: 16px;
}

p {
  color: var(--c-black);
  max-width: 520px;
  text-align: center;
  margin-bottom: 16px;
}
</style>
