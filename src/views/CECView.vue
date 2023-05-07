<script setup>
import StepItem from '@/components/StepItem.vue'
import { useGlobalStore } from '@/store'

const store = useGlobalStore()

</script>

<template>
  <section class="width--xnarrow my-2">
    <h1>Changer d'état-civil</h1>
    <p>
      <strong>Le terme état-civil désigne ici les informations vous concernant officiellement garanties par l'état.</strong>
      Il s'agit notamment de votre prénom, nom, date et lieu de naissance, filiation. Elles peuvent apparaître dans votre acte de naissance, livret de famille, Carte Nationale d'Identité, ou tout autre document similaire produit par l'état.</p>
    <p>
      Dans le cadre d'une transition administrative, on cherche généralement à faire modifier deux informations :
    </p>
    <ul>
      <li>Le ou les prénoms</li>
      <li>La mention de sexe, parfois appelée civilité ou genre</li>
    </ul>
    <p>Il est possible de changer de prénom(s) sans changer de mention de sexe, et inversement.</p>
  </section>
  <section class="width--xnarrow my-2">
    <h2>Comment faire ?</h2>
    <p>En France, il existe deux manières de procéder pour changer d'état-civil.</p>
    <p><strong>Quelle que soit la méthode que vous choisissez, le résultat final est le même.</strong> La ou les décisions vont faire modifier votre acte de naissance, et vous permettre d'utiliser votre nouvel état-civil. Certaines personnes préfèrent la première méthode pour tout faire en une fois, d'autres la seconde pour pouvoir avancer plus rapidement sur leur changement de prénom.</p>
    <div class="message--primary my-2 px-2 py-2">
      <h3>En une fois, au tribunal</h3>
      <p>On fait modifier le(s) prénom(s) en même temps que la mention de sexe, via une requête adressée au tribunal judiciaire.</p>
      <div class="grid--row">
        <div class="grid--column">
          <p><strong>Avantages</strong> :</p>
          <ul>
            <li>Un seul dossier à constituer</li>
            <li>Plus rapide pour la procédure dans son ensemble</li>
            <li>On peut directement refaire ses papiers d'identité finaux une fois la décision rendue</li>
          </ul>
        </div>
        <div class="grid--column">
          <p><strong>Inconvénients</strong> :</p>
          <ul>
            <li>Incohérences de traitement selon les tribunaux qui peuvent ralentir la décision</li>
            <li>On attend plus de temps avant de pouvoir utiliser officiellement son ou ses nouveaux prénom(s)</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="message--primary my-2 px-2 py-2">
      <h3>En deux fois, à la mairie puis au tribunal</h3>
      <p>On fait modifier le(s) prénom(s) en mairie puis, dans un second temps, la mention de sexe au tribunal.</p>
      <div class="grid--row">
        <div class="grid--column">
          <p><strong>Avantages</strong> :</p>
          <ul>
            <li>On peut obtenir une décision plus rapidement pour ses nouveaux prénoms, typiquement en quelques semaines à quelques mois</li>
            <li>La démarche en mairie est plus simple qu'au tribunal</li>
          </ul>
        </div>
        <div class="grid--column">
          <p><strong>Inconvénients</strong> :</p>
          <ul>
            <li>Deux dossiers à constituer</li>
            <li>Il y a une période où l'on a un prénom a jour, mais une mention de sexe obsolète.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="width--xnarrow my-2">
    <h2>Étapes</h2>
    <label for="method">Choisissez la méthode qui vous convient le mieux :</label>
    <select
      name="method"
      id="method"
      :value="store.CecMethod"
      @change="store.setCecMethod($event.target.value)">
      <option value="tribunal">Tribunal uniquement</option>
      <option value="mairieEtTribunal">Mairie puis tribunal</option>
    </select>
  </section>
</template>
