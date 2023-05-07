<script setup>
import { RouterLink } from 'vue-router'
import LettersList from '../components/LettersList.vue'

</script>

<template>
  <section class="width--narrow message--primary px-1 py-2 text--center">
    <h1>Bienvenue sur Administrans !</h1>
    <p>Le site qui vous aide avec votre transition administrative.</p>
  </section>
  <section class="width--narrow my-4">
    <div class="grid--row">
      <div class="grid--column">
        <h2>Je veux demander un changement de prénom et/ou de mention de sexe à l'état-civil</h2>
        <p>Cette étape vous permet de faire reconnaître le changement officiellement.</p>
        <RouterLink class="my-2 button" to="/cec">Commencer</RouterLink>
      </div>
      <div class="grid--column">
        <h2>Je veux faire mettre à jour mon état-civil auprès des entreprises et administrations</h2>
        <p>Cette étape vous permet de répercuter les changements liés à votre état-civil auprès des différentes organisations avec lesquelles vous intéragissez.</p>
        <RouterLink class="my-2 button"  to="/mise-a-jour">Commencer</RouterLink>
      </div>
    </div>
    <h2>Comment ça marche ?</h2>
    <ol>
      <li>Choisissez la demande que vous souhaitez effectuer</li>
      <li>Saisissez vos informations</li>
      <li>Obtenez en quelques secondes un document PDF préparé pour vous, prêt à envoyer</li>
    </ol>
    <p>Administrans est gratuit, fonctionne sans inscription et les données que vous saisissez et courriers générés ne quittent jamais votre appareil.</p>
  </section>
  <section class="width--xnarrow">
    <h2>Demandes disponibles</h2>
    <LettersList />
  </section>
</template>
