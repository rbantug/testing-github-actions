import { shallowMount, VueWrapper } from '@vue/test-utils'

import TheRatings from '../components/TheRatings.vue'

let wrapper:VueWrapper

beforeEach(() => {
    wrapper = shallowMount(TheRatings, {
        props: {
            maxStars: 5
        }
    })
})

afterEach(() => {
    wrapper.unmount()
})

describe('Rating', () => {
    test('renders the stars', () => {
        const stars = wrapper.findAll('[data-test="star"]')
        expect(stars.length).toBe(5)
    })

    test('renders X amount of stars', async () => {
        const starCount = 10
        await wrapper.setProps({ maxStars: starCount })
        const getStars = wrapper.findAll('[data-test="star"]')
        expect(getStars.length).toBe(starCount)
    })

    test('renders 2 active stars', () => {
        const getStars = wrapper.findAll('[active="true"]')
        expect(getStars.length).toBe(2)
    })

    test('renders a summary', () => {
        const getSummary = wrapper.find('[data-test="summary"]')
        expect(getSummary.text()).toBe('Summary: 2 of 5')
    })

    test('render stars and summary based on clicked star', async () => {
        const starNum = 4
        await wrapper.findAll('[data-test="star"]')[starNum - 1].trigger('click')
        const getStars = wrapper.findAll('[active="true"]')
        const getSummary = wrapper.find('[data-test="summary"]')
        expect(getSummary.text()).toBe(`Summary: ${starNum} of 5`)
        expect(getStars.length).toBe(starNum)
    })
})
