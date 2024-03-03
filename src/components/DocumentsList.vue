<script setup>
import templates from '@/documents'
import { RouterLink } from 'vue-router'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Document</th>
        <th>Objectif</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="template in templates" :key="template.id">
        <td>
          <RouterLink :to="{ name: 'documents', params: { id: template.id } }">
            {{ template.name }}
          </RouterLink>
        </td>
        <td>
          {{ template.description }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
