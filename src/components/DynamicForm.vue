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
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const fieldsById = {}
props.structure.forEach((e) => {
  if (e.isInput) {
    fieldsById[e.id] = e
  }
})
const localData = reactive({ ...props.modelValue })
</script>

<template>
  <form @submit.prevent="$emit('submit')">
    <div class="letter-form">

      <template v-for="element in props.structure" :key="JSON.stringify(element)">
        <h2
          v-if="element.isCategory"
          class="category"
        >{{ element.name }}</h2>
        <div v-if="element.isInput" class="field">
          <label v-if="element.type != 'checkbox'" :for="`field-${element.id}`">{{
            element.name
          }}</label>
          <textarea
            v-if="element.type === 'textarea'"
            v-model="localData[element.id]"
            :id="`field-${element.id}`"
            rows="3"
            @input="$emit('update:modelValue', localData)"
            :disabled="disabled"
          >
          </textarea>
          <div v-else-if="element.type === 'checkbox'" class="checkbox">
            <input
              type="checkbox"
              v-model="localData[element.id]"
              :id="`field-${element.id}`"
              @change="$emit('update:modelValue', localData)"
              :disabled="disabled"
            />
            <label :for="`field-${element.id}`">{{ element.name }}</label>
          </div>
          <input
            v-else
            :type="element.type || 'text'"
            v-model="localData[element.id]"
            :id="`field-${element.id}`"
            @input="$emit('update:modelValue', localData)"
            :disabled="disabled"
          />
        </div>
      </template>
    </div>
    <slot></slot>
  </form>
</template>