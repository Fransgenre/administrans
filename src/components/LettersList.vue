<script setup>
import templates from '@/letters'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div v-for="template in templates" :key="template.id">
    <h2>
      <RouterLink :to="{ name: 'letters', params: { id: template.id } }">
        {{ template.name }}
      </RouterLink>
    </h2>
    <p>{{ template.description }}</p>
  </div>
</template>
