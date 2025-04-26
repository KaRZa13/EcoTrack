import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/supabase'],
  css: ['~/assets/css/main.css'],
  supabase: {
    redirect: false,
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
