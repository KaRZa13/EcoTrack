import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  devServer: {
    host: '10.61.11.244', // Bind to all interfaces
    port: 3001
  },
  
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
