<template>
  <NuxtLayout name="header">
    <NuxtWelcome />
  </NuxtLayout>
</template>

<script setup>
/* import { ref } from 'vue'

import TestOne from '../components/TestOne.vue' */

definePageMeta({
    layout: 'header',
    keepalive: { max: 2 }
})
</script>
