<script setup>
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue';
import { useGlobalStore } from '@/store'

const props = defineProps({
  stepId: {required: true},
  link: {required: false, default: true},
})

const store = useGlobalStore()
const value = ref(store.steps[props.stepId])

watch(
  value,
  (v) => {
    store.setStep(props.stepId, v)
  }
)
</script>

<template>
  <div class="step checkbox">
    <input
      type="checkbox"
      v-model="value"
      :id="`check-${stepId}`"
      :name="stepId"
    />
    <label :for="`check-${stepId}`"> 
      <slot></slot>
    </label>
    <template v-if="link">
      · <RouterLink :to="`#${stepId}`">Détails</RouterLink>
    </template>
  </div>
</template>
