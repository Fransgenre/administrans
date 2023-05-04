<script setup>
import { reactive } from 'vue'

const props = defineProps({
  template: {
    type: Object,
    required: true
  }
})
const formFields = {}
props.template.fields.forEach(f => {
  formFields[f] = 'toto'
})

const data = reactive(formFields)
</script>

<template>
  <div>
    <h1>{{ template.name}}</h1>
    <p>{{ template.description }}</p>
    <div class="row">
      <div class="column">
        <h2>Vos informations</h2>
      </div>
      <div class="column">
        <h2>Rendu du courrier</h2>
        {{ template.template }}
        <component :is="template.template" :data="data" /> 
      </div>
    </div>
  </div>
</template>
