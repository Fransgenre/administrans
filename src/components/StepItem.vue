<script setup>
import { useGlobalStore } from '@/store'

const store = useGlobalStore()
defineProps({
  stepId: {required: true},
  value: {required: false, default: false},
})

</script>

<template>
  <div class="checkbox">
    <label :for="stepId"><slot></slot></label>
    <input
      type="checkbox"
      :value="value"
      @change="store.setStep(stepId, $event.target.value)"
      :id="stepId"
    />
  </div>
</template>
