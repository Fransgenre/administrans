<script setup>
import useLetterTemplate from '@/templates'
import LetterHeader from './LetterHeader.vue'
import LetterFooter from './LetterFooter.vue'
import {textToArrays} from '@/utils'

const p = defineProps({ data: { type: Object }, structure: { type: Array } })
const { renderValue, renderDate } = useLetterTemplate(p)
</script>

<template>
  <div class="cerfa">
    <div class="text--center">
      <h1>Demande de changement de prénom</h1>
      <p>
        Cerfa N° 16233*02 <br>
        (Article 60 du code civil)
      </p>
    </div>
    <div>
      <p>Vous souhaitez changer votre ou vos prénom(s), ajouter, supprimer et/ou modifier leur ordre.</p>
      <p>
        Vous voudrez bien cocher les cases correspondantes à votre situation, reseigner les rubriques
        qui s'y rapportent, joindre les pièces justificatives nécessaires, puis dater et signer ce formulaire.
      </p>
      <p>Votre demande doit être remise soit à la maire de votre lieu de résidence, soit à celle de votre lieu de naissance.</p>
    </div>
    <div>
      <h2>Votre identité</h2>
      <div class="fieldset">
        <div class="checkbox">
          <input
          type="checkbox"
          :checked="data['genreÉtatCivil'] === 'féminin'"
          id="genre-f"
          />
          <label for="genre-m">Madame</label>
        </div>
        <div class="checkbox">
          <input
          type="checkbox"
          :checked="data['genreÉtatCivil'] === 'masculin'"
          id="genre-m"
          />
          <label for="genre-m">Monsieur</label>
        </div>
        <p class="field">Votre nom de famille (nom de naissance) : <span class="value">{{ renderValue('nom').toUpperCase() }}</span></p>
        <p class="field">Votre nom d'usage (exemple: nom d'époux / d'épouse) : <span class="value">{{ renderValue('nomUsage', false).toUpperCase() }}</span></p>
        <p class="field">Votre (ou vos) prénoms : <span class="value">{{ renderValue('prénoms') }}</span></p>
        <p class="field">Votre date et lieu de naissance : <span class="value">{{ renderDate('dateNaissance') }}</span></p>
        <p class="field">à : <span class="value">{{ renderValue('lieuNaissance') }}</span></p>
        <p class="field">Votre (ou vos) nationalités : <span class="value">{{ renderValue('nationalités') }}</span></p>
        <p class="field">Votre adresse : <span class="value">{{ renderValue('adresseVoie') }}</span></p>
        <p class="field">Complément d'adresse : <span class="value">{{ renderValue('adresseComplément', false) }}</span></p>
        <p class="field">Code postal : <span class="value">{{ renderValue('adresseCodePostal') }} Commune: {{ renderValue('adresseCommune') }}</span></p>
        <p class="field">Pays : <span class="value">{{ renderValue('adressePays') }}</span></p>
        <p class="field">Adresse électronique : <span class="value">{{ renderValue('email') }}</span></p>
        <p class="field">Numéro de téléphone : <span class="value">{{ renderValue('téléphone') }}</span></p>
      </div>
    </div>
    <div>
      <h2>Votre demande</h2>
      <div class="fieldset">
        <div class="checkbox">
          <input
          type="checkbox"
          :checked="true"
          id="prénoms"
          />
          <label for="prénoms">Je demande à ce que désormais, les prénoms apparaissent dans l'ordre déterminé ci-dessous</label>
        </div>
        <p
          v-for="prenom, idx in renderValue('nouveauxPrénoms', '<Nouveaux prénoms>').split(',')"
          :key="prenom"
          class="field"
        >
          {{ idx + 1}}<template v-if="idx === 0">er</template><template v-else>ème</template> Prénom : <span class="value">{{  prenom.trim() }}</span>
        </p>
        <p>Pour les motifs suivants : (joignez tous les documents utiles à la présente demande afin d'attester de l'intérêt légitime)</p>
        <p class="value">
          {{ renderValue('motif') }}
        </p>
        <p>
          J'atteste sur l'honneur qu'aucune procédure de changement de prénom(s) n'est actuellement en cours devant
          les juridictions fraçaises, ni qu'aucune demande de changement de prénom(s) n'est actuellement examinée devant un autre officier de l'état civil.
        </p>
        <div class="checkbox">
          <input
          type="checkbox"
          :checked="data.typeDemande === 'première'"
          id="premièreDemande"
          />
          <label for="premièreDemande">Je déclare n'avoir jamais formulé de demande de changement de prénom(s).</label>
        </div>
        <div class="checkbox">
          <input
          type="checkbox"
          :checked="data.typeDemande === 'plusieurs'"
          id="plusieursDemandes"
          />
          <label for="plusieursDemandes">J'ai déjà formulé la ou les demandes de changement de prénom(s) mentionnée(s) ci-dessous :</label>
        </div>
        <table>
          <thead>
            <th>Date et lieu de la demande</th>
            <th>Autorité saisie</th>
            <th>Date de la décision rendue</th>
          </thead>
          <tbody>
            <tr v-for="row, idx in textToArrays(data.demandes, ',', 3)" :key="idx">
              <td>{{ row[0] }}</td>
              <td>{{ row[1] }}</td>
              <td>{{ row[2] }}</td>
            </tr>
          </tbody>
        </table>
        <p>
          Je demande également la mise à jour des actes de l'état civil listés ci-dessous, dès lors que le
          changement de prénom(s) aura une incidence sur ces actes :
        </p>
        <p class="field">
          <strong>Acte de naissance :</strong> 
          <span class="value" v-if="data.majActeNaissance">
            {{ renderDate('dateNaissance') }} à {{ renderValue('lieuNaissance') }}
          </span>
          <span class="value" v-else></span>
        </p>
        <p class="field">
          <strong>Acte de mariage (le cas échéant) :</strong> 
          <span class="value" v-if="data.majActeMariage">
            {{ renderDate('dateMariage') }} à {{ renderValue('lieuMariage') }}
          </span>
          <span class="value" v-else></span>
        </p>
        <p>
          <strong>Acte de naissance du conjoint ou partenaire de PACS (le cas échéant) :</strong>
        </p>
        <p class="field">
          Nom du conjoint/partenaire :
          <span class="value" v-if="data.majActeNaissanceConjoint">
            {{ renderValue('nomConjoint') }}
          </span>
          <span class="value" v-else></span>
        </p>
        <p class="field">
          Prénom(s) :
          <span class="value" v-if="data.majActeNaissanceConjoint">
            {{ renderValue('prénomsConjoint') }}
          </span>
          <span class="value" v-else></span>
        </p>
        <p class="field">
          Date et lieu de naissance :
          <span class="value" v-if="data.majActeNaissanceConjoint">
            {{ renderDate('dateNaissanceConjoint') }} à {{ renderValue('lieuNaissanceConjoint') }}
          </span>
          <span class="value" v-else></span>
        </p>
        <p>
          <strong>Acte de naissance du/des enfant(s) (le cas échéant)</strong>
        </p>
        <template v-for="row, idx in textToArrays(data.enfants, ',', 3)" :key="idx">
          <p class="field">
            Nom du {{ idx + 1}}<template v-if="idx === 0">er</template><template v-else>ème</template> enfant :
            <span class="value" v-if="row.length > 0 && data.majActeNaissanceEnfants">
              {{ row[0] }}
            </span>
            <span class="value" v-else></span>
          </p>
          <p class="field">
            Prénom(s) :
            <span class="value" v-if="row.length > 0 && data.majActeNaissanceEnfants">
              {{ row[1] }}
            </span>
            <span class="value" v-else></span>
          </p>
          <p class="field">
            Date et lieu de naissance :
            <span class="value" v-if="row.length > 0 && data.majActeNaissanceEnfants">
              {{ row[2] }} à {{ row[3] }}
            </span>
            <span class="value" v-else></span>
          </p>
          <hr class="hidden">
        </template>
        <p>
          <strong>Acte de mariage du/des enfant(s) (le cas échéant)</strong>
        </p>
        <template v-for="row, idx in textToArrays(data.enfants, ',', 3)" :key="idx">
          <p class="field">
            Nom du {{ idx + 1}}<template v-if="idx === 0">er</template><template v-else>ème</template> enfant :
            <span class="value" v-if="row.length > 0 && data.majActeMariageEnfants">
              {{ row[0] }}
            </span>
            <span class="value" v-else></span>
          </p>
          <p class="field">
            Prénom(s) :
            <span class="value" v-if="row.length > 0 && data.majActeMariageEnfants">
              {{ row[1] }}
            </span>
            <span class="value" v-else></span>
          </p>
          <p class="field">
            Date et lieu de naissance :
            <span class="value" v-if="row.length > 0 && data.majActeMariageEnfants">
              {{ row[2] }} à {{ row[3] }}
            </span>
            <span class="value" v-else></span>
          </p>
          <hr class="hidden">
        </template>
      </div>
    </div>
    <h2>Attestation sur l'honneur</h2>
    <p>
      Je soussigné(e)<span class="value">{{ renderValue('prénoms') }}
          <span class="text--uppercase">{{ renderValue('nom') }}</span>
        </span>
      (prénom(s), nom(s)) certifie sur l'honneur que les renseignements portés sur ce formulaire sont 
      exacts.
    </p>
    <p>
      Fait à<span class="value">{{ renderValue('villeCourrier') }}</span>, le<span class="value">{{ renderDate('dateCourrier') }}</span>
    </p>
    <p style="margin-bottom: 100px;">
      <strong>Signature :</strong>
    </p>
    <p class="footer">
      La loi n°78-17 du 6 janvier 1978 relative aux fichiers nominatifs garantit un droit d'accès et
      de rectification des données après des organismes destinataires de ce formuliaire
    </p>
  </div>
</template>
