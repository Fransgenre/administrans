<script setup>
import { reactive, watch } from 'vue'
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
props.template.structure.forEach(f => {
  if (f.isInput) {
    let v
    if (store.currentProfile[f.id] != undefined) {
      v = store.currentProfile[f.id]
    } else if (f.default != undefined) {
      v = f.default()
    }
    formFields[f.id] = v
  }
})
const data = reactive(formFields)
watch (
  data,
  (v) => {
    let toPersist = {}
    props.template.structure.forEach(e => {
      let persist = e.persist === undefined ? true : e.persist
      if (persist && v[e.id] != undefined) {
        toPersist[e.id] = v[e.id]
      }
    })
    store.persistProfileData(toPersist)
  },
  {deep: true},
)
function updateData (v) {
  Object.assign(data, v)
}
</script>

<template>
  <div>
    <h1>{{ template.name}}</h1>
    <p>{{ template.description }}</p>
    <hr>
    <div class="grid--row">
      <div class="grid--column">
        <DynamicForm
          v-model="data"
          :structure="template.structure"
          @update:modelValue="updateData"
        />
      </div>
      <div class="grid--column">
        <h2>Rendu du courrier</h2>
        <div class="letter">
          <component :is="template.template" :data="data" /> 
        </div>
      </div>
    </div>
  </div>
</template>
