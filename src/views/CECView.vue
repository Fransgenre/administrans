<script setup>
import StepItem from '@/components/StepItem.vue'
import { useGlobalStore } from '@/store'

const store = useGlobalStore()

</script>

<template>
  <div class="grid--row">
    <div class="grid--column two-third">
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
          <p>On fait modifier le(s) prénom(s) en même temps que la mention de sexe, via une requête adressée au tribunal administratif.</p>
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
        <h2>Les étapes en détail</h2>
        <p>Ici, on vous explique très précisément comment constituer votre dossier pour qu'il aie les meilleurs chances de passer.</p>
        <p>Commencez par choisir votre parcours :
          <select
            name="method"
            id="method"
            :value="store.CecMethod"
            @input="store.setCecMethod($event.target.value)">
            <option value="tribunal">Tribunal uniquement</option>
            <option value="mairieEtTribunal">Mairie puis tribunal</option>
          </select>
        </p> 
        <div
          id="chooseNames"
          :class="{'emphasize-block': $route.hash.slice(1) === 'chooseNames'}"
        >
          <h3>Choisir vos prénoms</h3>
          <p>Il s'agit d'un choix très personnel, évidemment, mais voici quelques informations qui pourront vous aider :</p>
          <ul>
            <li>
              Il n'y a théoriquement pas de limite au nombre de prénoms que vous pouvez choisir,
              même si pour des raisons pratiques, il est possible qu'on vous refuse un nombre trop élevé. Dans la nature, des cas de personnes ayant demandé et obtenu 7, voire 10 prénoms ont été recensés !
            </li>
            <li>Vous êtes totalement libre sur l'orthographe, et vous pouvez inventer vos propres prénoms si vous le souhaitez</li>
          </ul>
        </div>
        <div
          id="requestBirthCertificates"
          :class="{'emphasize-block': $route.hash.slice(1) === 'requestBirthCertificates'}"
        >
          <h3>Demander des copies intégrales de votre acte de naissance</h3>
          <p>
            Ces copies vont permettre de justifier de votre identité et sont indispensables pour la suite de la procédure.
          </p>
          <p>
            Elles sont à demander à votre commune de naissance,
            consultez pour cela
            <a href="https://www.service-public.fr/particuliers/vosdroits/F1427" target="_blank">service-public.fr</a>
            qui vous indiquera précisément la marche à suivre.
          </p>
          <p>
            Nous vous recommandons de faire cette demande le plus tôt possible,
            dans la mesure où elle est gratuite et que certaines communes mettent parfois
            un peu de temps à vous envoyer les documents. Prenez au moins 3 copies, ce n'est jamais perdu.
          </p>
        </div>
        <div
          id="prepareRequest"
          :class="{'emphasize-block': $route.hash.slice(1) === 'prepareRequest'}"
        >
          <h3>Préparer votre demande</h3>
          <p>
            TODO
          </p>
        </div>
        <div
          id="prepareProofs"
          :class="{'emphasize-block': $route.hash.slice(1) === 'prepareProofs'}"
        >
          <h3>Rassembler vos justificatifs</h3>
          <p>
            TODO
          </p>
        </div>
        <div
          id="submitRequest"
          :class="{'emphasize-block': $route.hash.slice(1) === 'submitRequest'}"
        >
          <h3>Déposer votre demande</h3>
          <p>
            TODO
          </p>
        </div>
        <div
          id="wait"
          :class="{'emphasize-block': $route.hash.slice(1) === 'wait'}"
        >
          <h3>Patienter</h3>
          <p>
            TODO
          </p>
        </div>

      </section>
    </div>
    <div class="grid--column one-third">
      <aside class="position--sticky my-4">
        <h2>Checklist</h2>
        <StepItem stepId="chooseCecMethod" :link="false">
          Choisir votre parcours :
          <select
            name="method"
            id="method"
            :value="store.CecMethod"
            @input="store.setCecMethod($event.target.value)">
            <option value="tribunal">Tribunal uniquement</option>
            <option value="mairieEtTribunal">Mairie puis tribunal</option>
          </select>
        </StepItem>
        <StepItem stepId="chooseNames" :link="true">
          Choisir vos prénoms
        </StepItem>
        <StepItem stepId="requestBirthCertificates">
          Demander des copies intégrales de votre acte de naissance
        </StepItem>
        <StepItem stepId="prepareRequest">
          Préparer votre demande
        </StepItem>
        <StepItem stepId="prepareProofs">
          Préparer vos justificatifs
        </StepItem>
        <StepItem stepId="submitRequest">
          Déposer où envoyer votre demande
        </StepItem>
        <StepItem stepId="wait">
          Patienter
        </StepItem>
      </aside>
    </div>
  </div>
</template>
