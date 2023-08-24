<template>
  <div>
    <div data-test="data">
      This is the data: {{ store.data }}
    </div>
    <div data-test="name">
      This is the name: {{ store.name }}
    </div>
    <div v-if="store.outputData" data-test="conditional">
      Conditional rendering
    </div>
    <div class="flex flex-col justify-start w-[20rem] pt-10 gap-y-2">
      <button class="p-2 border bg-green-400 rounded-md w-[10rem]" data-test="btn-increment" @click="store.incrementData">
        Increment one
      </button>
      <div class="flex gap-x-2">
        <input ref="text" type="text" class="border" data-test="input">
        <button class="p-2 border bg-indigo-400 rounded-md w-[8rem]" data-test="btn-updateName" @click="store.updateName(text.value)">
          Add name
        </button>
      </div>
      <button class="p-2 border bg-blue-400 rounded-md w-[10rem]" data-test="btn-conditional" @click="store.toggleActiveState">
        Show element
      </button>
    </div>
    <div>
      <div v-if="state" data-testid="fetch">
        {{ fetchedData.products[0].title }} was received
      </div>
      <div data-test="count">
        {{ count }}
      </div>
      <button data-testid="fetchBtn" @click="getData">
        Get Data
      </button>
    </div>
    <div data-testid="githubActions">
      This is for a test
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useStoreOptions } from '../store/useStoreOptions'

const store = useStoreOptions()
const text = ref()
const state = ref(false)
/* const fetchedData = fetch('dummyjson.com/test', {
    method: 'GET'
}) */

// const fetchedData = await useFetch('https://dummyjson.com/products')
const fetchedData = ref()
const count = ref(0)
/* const getData = await fetch('https://dummyjson.com/products')
const fetchedData = await getData.json() */

async function getData () {
    const getData = await fetch('https://dummyjson.com/products')
    fetchedData.value = await getData.json()
    state.value = true
}
// console.log(fetchedData.value)
</script>
