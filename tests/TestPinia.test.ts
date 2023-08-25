import { createTestingPinia } from '@pinia/testing'
import { cleanup, fireEvent, render, screen } from '@testing-library/vue'
import { shallowMount, VueWrapper } from '@vue/test-utils'

import TestPinia from '../components/TestPinia.vue'
import { Test, useStoreOptions } from '../store/useStoreOptions'

let wrapper:VueWrapper
let store:Test

beforeEach(() => {
    wrapper = shallowMount(TestPinia, {
        global: {
            plugins: [createTestingPinia({ stubActions: false })]
        }
    })
    store = useStoreOptions()
})

afterEach(() => {
    wrapper.unmount()
    cleanup()
})

describe('TestPinia.vue', () => {
    test('check data', async () => {
        expect(TestPinia).toBeTruthy()
        await wrapper.find('[data-test="btn-increment"]').trigger('click')
        await wrapper.find('[data-test="btn-increment"]').trigger('click')
        const data = wrapper.find('[data-test="data"]')
        expect(data.text()).toContain('This is the data: 3')
    })

    test('check name', async () => {
        const testString = 'asasas'
        await wrapper.find('[data-test="input"]').setValue(testString)
        await wrapper.find('[data-test="btn-updateName"]').trigger('click')
        const name = wrapper.find('[data-test="name"]')
        expect(name.text()).toBe(`This is the name: ${testString}`)
    })

    test('check if conditional element was rendered', async () => {
        await wrapper.find('[data-test="btn-conditional"]').trigger('click')
        const conditional = wrapper.find('[data-test="conditional"]')
        expect(conditional.exists()).toBe(true)
    })

    test('check if conditional element was not rendered', async () => {
        store.obj.active = true
        await wrapper.find('[data-test="btn-conditional"]').trigger('click')
        const conditional = wrapper.find('[data-test="conditional"]')
        expect(conditional.exists()).toBe(false)
    })

    test('check if fetched data was received', async () => {
        /* await wrapper.find('[data-test="fetchBtn"]').trigger('click')
        const fetchedElement = wrapper.find('[data-test="fetch"]')
        expect(fetchedElement.text()).toBe('test product was received') */
        render(TestPinia)
        const button = await screen.findByTestId('fetchBtn')
        await fireEvent.click(button)
        const fetchedElement = await screen.findByTestId('fetch')
        expect(fetchedElement.innerHTML.trim()).toBe('test product was received')
    })

    /* test('check if fetched data was not received and throws an error', () => {
        const fetchedElement = wrapper.find('[data-test="fetch"]')
        expect(fetchedElement.text()).toBe('Status 400: Error')
    }) */

    test('github action', async () => {
        render(TestPinia)
        const element = await screen.findByTestId('githubActions')
        expect(element.innerHTML.trim()).toBe('This is should fail')
    })
})
