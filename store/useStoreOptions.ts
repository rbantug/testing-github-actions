import { defineStore } from 'pinia'

interface Obj {
	active: boolean
}

export interface Test {
	data: number,
	name: string
	obj: Obj
}

export const useStoreOptions = defineStore('option', {
    state: ():Test => ({
        data: 1,
        name: '',
        obj: {
            active: false
        }
    }),
    actions: {
        updateName (this: Test, value: string) {
            this.name = value
        },
        incrementData (this: Test) {
            this.data += 1
        },
        toggleActiveState (this: Test) {
            this.obj.active = !this.obj.active
        }
    },
    getters: {
        outputData (state: Test) {
            return state.obj.active
        }
    }
})
