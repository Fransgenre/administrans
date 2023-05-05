<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Administrans</RouterLink>
      <RouterLink to="/about">A propos</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
