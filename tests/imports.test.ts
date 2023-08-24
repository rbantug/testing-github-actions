describe('import vue components', () => {
    test('normal imports as expected', async () => {
        const component = await import('../components/TestOne.vue')
        expect(component).toBeDefined()
    })
})
