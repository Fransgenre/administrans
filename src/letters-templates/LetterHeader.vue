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
  <div class="grid--row">
    <div class="grid--column">
      <div class="adress--sender" v-if="renderValue('adresse')">
        {{ renderValue('prénom') }} {{ renderValue('nom') }}<br>{{ renderValue('adresse') }}
        <template v-if="data['téléphone']"><br>Téléphone : {{ renderValue('téléphone') }}</template>
        <template v-if="data['email']"><br>Email : {{ renderValue('email') }}</template>
      </div>
    </div>
    <div class="grid--column date" v-if="data.villeCourrier && data.dateCourrier">
      {{ renderValue('villeCourrier') }},
      le {{ (new Date(data.dateCourrier)).toLocaleDateString('fr-FR') }}
    </div>
  </div>
  <div class="adress--recipient" v-if="renderValue('adresseDestinataire')">
    À l'attention du service client<template v-if="data['société']"> de {{ renderValue('société', false) }}</template>
  </div>
</template>
