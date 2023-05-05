<script setup>
import LettersList from '../components/LettersList.vue'
</script>

<template>
  <section class="width--narrow message--primary px-1 py-2 text--center">
    <h1>Bienvenue sur Administrans !</h1>
    <p>Le site qui vous aide à mettre à jour votre état civil auprès des entreprises et administrations.</p>
  </section>
  <section class="width--xnarrow my-4">
    <h2>Comment ça marche ?</h2>
    <ol>
      <li>Choisissez la demande que vous souhaitez effectuer</li>
      <li>Saisissez vos informations</li>
      <li>Obtenez un document PDF prêt à envoyer, préparé pour vous</li>
    </ol>
  </section>
  <section class="width--xnarrow">
    <h2>Demandes disponibles</h2>
    <LettersList />
  </section>
</template>
