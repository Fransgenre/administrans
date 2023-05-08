<script setup>
import LetterForm from '../components/LetterForm.vue'
import templates from '@/letters'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const templatesById = {}
templates.forEach((element) => {
  templatesById[element.id] = element
})
const template = templatesById[props.id]
</script>
<template>
  <LetterForm :template="template" :prefillData="$route.query"/>
</template>
