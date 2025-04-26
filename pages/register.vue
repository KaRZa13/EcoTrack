<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold text-center mb-6">Inscription</h1>
    <form @submit.prevent="signUp" class="space-y-4">
      <div class="form-group">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="form-group">
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirmez le mot de passe"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        S'inscrire
      </button>
      <p v-if="errorMsg" class="text-red-500 text-sm mt-2">{{ errorMsg }}</p>
      <p v-if="successMsg" class="text-green-500 text-sm mt-2">{{ successMsg }}</p>
    </form>
    <NuxtLink
      to="/login"
      class="block text-center text-blue-500 mt-4 hover:underline"
    >
      Vous avez déjà un compte ? Connectez-vous
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const email = ref<string>("")
const password = ref<string>("")
const confirmPassword = ref<string>("")
const errorMsg = ref<string>("")
const successMsg = ref<string>("")

const signUp = async () => {
  errorMsg.value = ""
  successMsg.value = ""

  if (password.value !== confirmPassword.value) {
    errorMsg.value = "Les mots de passe ne correspondent pas."
    return
  }

  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (error) {
      errorMsg.value = error.message
    } else {
      successMsg.value = "Vérifiez votre email pour le lien de confirmation."
    }
  } catch (error: any) {
    errorMsg.value = error.message || "Une erreur est survenue."
  }
}
</script>
