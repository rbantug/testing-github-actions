import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [Vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html']
        },
        setupFiles: 'mocks/setupMSW.js'
    }/*,
     resolve: {
        alias: {
            '~': '.'
        }
    } */
})
