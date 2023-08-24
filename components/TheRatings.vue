<template>
  <div>
    <div v-for="x of props.maxStars" :key="x" data-test="star" :active="runStarActive(x)" @click="updateStarActive(x)">
      {{ x }}
    </div>
    <div data-test="summary">
      Summary: {{ starsActive }} of {{ props.maxStars }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    maxStars: {
        type: Number,
        default: 5
    }
})

const starsActive = ref(2)

function runStarActive (x:number) {
    if (x <= starsActive.value) { return true }
    if (x > starsActive.value) { return false }
}

function updateStarActive (x:number) {
    starsActive.value = x
}
</script>
