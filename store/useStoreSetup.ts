import { defineStore } from 'pinia'

export const useStoreSetup = defineStore('setup', () => {
    const data = ref(1)
    function updateData (value: number) {
        data.value = value
    }

    function addToData (value: number) {
        data.value += value
    }
    const outputData = computed<number>(() => data.value)

    const name = ref('')

    return { data, updateData, addToData, name, outputData }
})
