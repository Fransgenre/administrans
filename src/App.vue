<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';
const plausible = inject('plausible');
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Administrans</RouterLink>
      <RouterLink to="/a-propos">A propos</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
