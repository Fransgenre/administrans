<script setup>
import { RouterLink } from 'vue-router'
import { ref, watch, inject } from 'vue'
import { useGlobalStore } from '@/store'
import { useRoute } from 'vue-router'

const plausible = inject('plausible')

const route = useRoute()
const props = defineProps({
  stepId: { required: true },
  link: { required: false, default: true },
  linkTo: { required: false, default: '' }
})

const store = useGlobalStore()
const value = ref(store.steps[props.stepId])


watch(value, (v) => {
  store.setStep(props.stepId, v)
  if (v) {
    plausible.trackEvent('checkItem', { props: { step: props.stepId } }, {url: route.path})
  }
})
</script>

<template>
  <div class="step checkbox">
    <input type="checkbox" v-model="value" :id="`check-${stepId}`" :name="stepId" />
    <label :for="`check-${stepId}`">
      <slot></slot>
    </label>
    <template v-if="link">
      · <RouterLink :to="`#${linkTo || stepId}`">Détails</RouterLink>
    </template>
    <slot name="after-link"></slot>
  </div>
</template>
