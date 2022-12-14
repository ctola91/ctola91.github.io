// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: {
                // Default theme (same as single string)
                default: 'material-palenight',
                // Theme used if `html.dark`
                dark: 'github-dark',
            }
        },
        markdown: {
            toc: {
                depth: 5,
                searchDepth: 5
            },
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    runtimeConfig: {
        public: {
            siteKey: '', // Overridden by NUXT_SITE_KEY
        }
    }
})
