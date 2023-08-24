<template>
  <div>
    <NuxtLayout name="layout-header">
      <template #default>
        <p>user</p>
      </template>
      <template #main>
        <p>test</p>
      </template>
    </NuxtLayout>
    <span>Number</span>
    <span>{{ outputData }}</span>
    <div class="flex gap-x-2">
      <input v-model="test" type="number" class="border-2 border-red-400 p-2">
      <button class="font-DMSans p-2 bg-gray-400 rounded-xl hover:bg-gray-300" @click="storeSetup.addToData(test)">
        Add {{ test }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
/* import { useStoreOptions } from '../../store/useStoreOptions' */
import { useStoreSetup } from '../../store/useStoreSetup'

/* definePageMeta({
	layout: 'layout-header'
}) */

/* const storeOptions = useStoreOptions() */

const storeSetup = useStoreSetup()

const test = ref(0)

const outputData = computed(() => storeSetup.data)
</script>
