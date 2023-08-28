// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    runtimeConfig: {
        secret: process.env.TEST_ONE,
        public: {
            publicData: process.env.TEST_TWO
        }
    },
    modules: [
        '@pinia/nuxt'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' }
            ]
        }
    }
})
