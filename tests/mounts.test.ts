import { mount } from '@vue/test-utils'
import TestOneVue from 'components/TestOne.vue'

describe('Mounting component', () => {
    test('TestOne.vue', () => {
        const msg = 'message'
        const wrapper = mount(TestOneVue, {
            props: {
                data1: msg
            }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})
