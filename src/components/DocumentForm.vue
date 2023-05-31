<script setup>
import { reactive, watch, ref, inject } from 'vue'
import DynamicForm from './DynamicForm.vue'
import { useGlobalStore } from '@/store'

const plausible = inject('plausible')

const store = useGlobalStore()

const props = defineProps({
  template: {
    type: Object,
    required: true
  },
  prefillData: {
    type: Object,
    required: false,
    default: () => {return {}}
  }
})
const formFields = {}
props.template.structure.forEach((f) => {
  if (f.isInput) {
    let v
    if (props.prefillData[f.id] != undefined) {
      v = props.prefillData[f.id]
    }
    else if (store.formData[f.id] != undefined) {
      v = store.formData[f.id]
    } else if (f.default != undefined) {
      v = f.default()
    }
    formFields[f.id] = v
  }
})
const data = reactive(formFields)
const manualEdit = ref(false)
let formKey = ref(1)

watch(
  data,
  (v) => {
    let toPersist = {}
    props.template.structure.forEach((e) => {
      let persist = e.persist === undefined ? true : e.persist
      if (persist && v[e.id] != undefined) {
        toPersist[e.id] = v[e.id]
      }
    })
    store.persistFormData(toPersist)
  },
  { deep: true }
)
function updateData(v) {
  Object.assign(data, v)
}
function downloadPdf() {
  plausible.trackEvent('print', { props: { document: props.template.id } })
  window.print()
}
async function shareUrl() {
  let url = window.location.href.split('?')[0]
  const params = new URLSearchParams()
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      if (element != undefined) {
        params.set(key, element)
      }
    }
  }
  url = url + '?' + params.toString()
  await navigator.clipboard.writeText(url)
  alert(`Un lien de partage a été copié dans le presse-papier. Il contient toutes les informations du document, ne le partagez qu'avec des personnes de confiance`)
  
}

function deleteData() {
  if (confirm('Cela effacera toutes vos modifications et tous les champs du formulaire.')) {
    const cleanData = {}
    props.template.structure.forEach((f) => {
      if (f.isInput) {
        let v = undefined
        if (f.default != undefined) {
          v = f.default()
        }
        cleanData[f.id] = v
      }
    })
    updateData(cleanData)
    store.persistFormData(cleanData)
  }
}

</script>

<template>
  <div>
    <div class="grid--row">
      <div class="grid--column hide-for-print">
        <h1>{{ template.name }}</h1>
        <p 
          v-if="template.description"
          class="text--small"
          v-html="template.description"></p>
        <p 
          v-if="template.help"
          class="text--small"
          v-html="template.help"></p>
        <p class="text--small">Remplissez le formulaire ci-dessous pour obtenir votre document.</p>
        <DynamicForm
          :key="formKey"
          :class="{'position--sticky': template.stickyForm}"
          v-model="data"
          :disabled="manualEdit"
          :structure="template.structure"
          @update:modelValue="updateData"
        >
          <p v-if="manualEdit" class="message--info px-1 py-1">
            En mode édition, il n'est pas possible de modifier les données du formulaire. Vous
            pouvez désactiver l'édition, mais vous perdrez les modifications effectuées manuellement
            dans le document.
          </p>
          <button @click.prevent="manualEdit = false" v-if="manualEdit" class="inverted">
            Désactiver l'édition
          </button>
          <hr class="hidden" />
          <button type="submit" class="my-2" @click.prevent="downloadPdf">
            Télécharger au format PDF
          </button>
          <button class="my-2 mx-2 inverted" @click.prevent="shareUrl">
            Partager le document…
          </button>
          <button class="my-2 inverted" @click.prevent="deleteData();formKey = formKey + 1">
            Effacer les données…
          </button>
        </DynamicForm>
      </div>
      <div class="grid--column">
        <div class="hide-for-print">
          <div class="grid--row">
            <div class="grid--column">
              <h2>Rendu du document</h2>
            </div>
            <div class="grid--column text--right">
              <button class="inverted" @click.prevent="manualEdit = true" v-if="!manualEdit">
                Éditer
              </button>
            </div>
          </div>
          <p v-if="manualEdit" class="message--primary px-1 py-1">
            Vous êtes actuellement en mode édition. Vous pouvez éditer directement le contenu du
            document avant de l'enregistrer.
          </p>
          <hr class="hidden" />
        </div>
        <div class="document position--sticky" id="rendered" :contenteditable="manualEdit">
          <component :is="template.template" :data="data" :structure="template.structure" />
        </div>
      </div>
    </div>
  </div>
</template>
