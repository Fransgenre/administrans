<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  renderValue: {}
})
</script>

<template>
  <div class="adress--sender" v-if="renderValue('adresse')">
    {{ renderValue('prénom') }} {{ renderValue('nom') }}<br>
    {{ renderValue('adresse') }}
  </div>
  <div class="adress--recipient" v-if="renderValue('adresseDestinataire')">
    {{ renderValue('societé', false) }}<br>
    À l'attention du service client
  </div>
</template>
