import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/supabase'
  ],
  css: ['~/assets/css/main.css'],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/index',
      exclude: ['/login', '/register', '/forgot-password'],
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
