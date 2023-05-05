<script setup>
import LettersList from '../components/LettersList.vue'
</script>

<template>
  <section class="width--xnarrow px-2 py-2 message--primary">
    <h1>Bienvenue sur Administrans !</h1>
    <p>Le site qui vous aide à mettre à jour votre état civil auprès des différentes entreprises et administrations.</p>
  </section>
  <section class="width--xnarrow px-2 py-2">
    <h2>Comment ça marche ?</h2>
    <ol>
      <li>Choisissez la demande que vous souhaitez effectuer</li>
      <li>Saisissez vos informations</li>
      <li>Obtenez un courrier prêt à l'emploi, préparé pour vous</li>
    </ol>
    <p class="text--italic">
      Administrans vous fournit un document au format PDF que vous pouvez ensuite
      imprimer ou envoyer par mail à l'organisme concerné pour faire valoir vos droits.
    </p>
  </section>
  <section class="width--xnarrow">
    <LettersList />
  </section>
</template>
