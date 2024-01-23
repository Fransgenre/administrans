<script setup>
import templates from '@/documents'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div v-for="template in templates" :key="template.id">
    <h2>
      <RouterLink :to="{ name: 'documents', params: { id: template.id } }">
        {{ template.name }}
      </RouterLink>
    </h2>
    <p>{{ template.description }}</p>
    <hr class="hidden">
    <hr class="hidden">
    <hr class="hidden">
  </div>
</template>
