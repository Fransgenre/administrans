<script setup>
import { reactive, watch, ref } from 'vue'
import DynamicForm from './DynamicForm.vue'
import { useGlobalStore } from '@/store'

const store = useGlobalStore()

const props = defineProps({
  template: {
    type: Object,
    required: true
  }
})
const formFields = {}
props.template.structure.forEach((f) => {
  if (f.isInput) {
    let v
    if (store.formData[f.id] != undefined) {
      v = store.formData[f.id]
    } else if (f.default != undefined) {
      v = f.default()
    }
    formFields[f.id] = v
  }
})
const data = reactive(formFields)
const manualEdit = ref(false)

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
  window.print()
}
</script>

<template>
  <div>
    <div class="grid--row">
      <div class="grid--column hide-for-print">
        <h1>{{ template.name }}</h1>
        <p>Remplissez le formulaire ci-dessous pour obtenir votre courrier.</p>
        <DynamicForm
          class="position--sticky"
          v-model="data"
          :disabled="manualEdit"
          :structure="template.structure"
          @update:modelValue="updateData"
          >
          <p v-if="manualEdit" class="message--info px-1 py-1">
            En mode édition, il n'est pas possible de modifier les données du formulaire. Vous pouvez désactiver l'édition, mais vous perdrez les modifications effectuées manuellement dans le courrier.
          </p>
          <button
            @click.prevent="manualEdit = false"
            v-if="manualEdit"
            class="inverted"
          >
            Désactiver l'édition
          </button>
          <hr class="hidden">
          <button
            type="submit"
            class="my-2"
            @click.prevent="downloadPdf"
          >Télécharger au format PDF</button>
        </DynamicForm>
      </div>
      <div class="grid--column">
        <div class="hide-for-print">
          <div class="grid--row">
            <div class="grid--column">
              <h2>Rendu du courrier</h2>
            </div>
            <div class="grid--column text--right">
              <button
                class="inverted"
                @click.prevent="manualEdit = true"
                v-if="!manualEdit"
              >
                Éditer
              </button>
            </div>
          </div>
          <p v-if="manualEdit" class="message--primary px-1 py-1">
            Vous êtes actuellement en mode édition. Vous pouvez éditer directement le contenu du courrier avant de l'enregistrer.
          </p>
          <hr class="hidden" />
        </div>
        <div class="letter" id="rendered" :contenteditable="manualEdit">
          <component :is="template.template" :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>
