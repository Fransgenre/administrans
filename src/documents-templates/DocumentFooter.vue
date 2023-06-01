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
  <p class="signature">{{ renderValue('prénom') }} {{ renderValue('nom') }}</p>
  <template v-if="data.listerPJ">
    <p>Pièces jointes :</p>
    <ul class="attachments">
      <li>
        Copie des pièces d'identité de {{ renderValue('prénom') }} {{ renderValue('nom') }} et
        décision de changement de prénom de {{ renderValue('prénom') }} {{ renderValue('nom') }}
      </li>
    </ul>
  </template>
</template>
