<script setup>
defineProps({
  stepId: { required: true }
})
</script>

<template>
  <div :id="stepId" :class="{ 'emphasize-block': $route.hash.slice(1) === stepId, 'my-1': true }">
    <slot></slot>
  </div>
</template>
