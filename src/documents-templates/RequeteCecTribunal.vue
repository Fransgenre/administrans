<script setup>
import useDocumentTemplate from '@/templates'
import LetterHeader from './LetterHeader.vue'
import LetterFooter from './LetterFooter.vue'

const p = defineProps({ data: { type: Object }, structure: { type: Array } })
const { renderValue } = useDocumentTemplate(p)
</script>

<template>Courrier encore en cours de conception</template>
