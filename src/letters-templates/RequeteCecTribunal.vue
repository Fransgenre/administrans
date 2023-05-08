<script setup>
import useLetterTemplate from '@/templates'
import LetterHeader from './LetterHeader.vue'
import LetterFooter from './LetterFooter.vue'

const p = defineProps({ data: { type: Object } })
const { renderValue } = useLetterTemplate(p)
</script>

<template>Courrier encore en cours de conception</template>
