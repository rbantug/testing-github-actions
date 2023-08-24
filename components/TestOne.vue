<template>
  <div>
    <div>test one</div>
    <div>{{ props.data1 }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data1: string
  data2?: number
}>()
</script>
