<script setup>
import { reactive, watch } from 'vue'
import { useGlobalStore } from '@/store'
defineEmits(['update:modelValue', 'submit'])
const store = useGlobalStore()
const props = defineProps({
  structure: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Object,
    required: true
  }
})

const fieldsById = {}
props.structure.forEach(e => {
  if (e.isInput) {
    fieldsById[e.id] = e
  }
})
const localData = reactive({...props.modelValue})
</script>

<template>
  <form @submit.prevent="">
    <template v-for="element in props.structure" :key="JSON.stringify(element)">
      <div v-if="element.isInput">
        <label :for="`field-${element.id}`">{{ element.name }}</label>
        <textarea
          v-if="element.type === 'textarea'"
          v-model="localData[element.id]"
          :id="`field-${element.id}`"
          rows="5"
          @input="$emit('update:modelValue', localData)"
        >
        </textarea>
        <input
          v-else
          :type="element.type || 'text'"
          v-model="localData[element.id]"
          :id="`field-${element.id}`"
          @input="$emit('update:modelValue', localData)"
        >
      </div>
    </template>
  </form>
</template>
