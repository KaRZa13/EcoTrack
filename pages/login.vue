<template>
  <div class="w-screen h-screen flex items-center justify-center bg-white1 ">
    <div class="max-w-md mx-auto mt-10 p-6 bg-white1 shadow-md rounded-lg">
      <div class="flex flex-col items-center justify-center mb-4">
        <Person class="w-10 h-10" />
        <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
      </div>
      <form @submit.prevent="signIn" class="space-y-4">
        <div class="form-group">
          <input v-model="email" type="email" placeholder="Email" required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="Mot de passe" required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          S'inscrire
        </button>
        <p v-if="errorMsg" class="text-red-500 text-sm mt-2">{{ errorMsg }}</p>
      </form>
      <NuxtLink to="/register" class="block text-center text-blue-500 mt-4 hover:underline">
        Vous n'avez pas de compte ? Inscrivez-vous
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Person from '../components/svg/Person.vue'

const client = useSupabaseClient()
const router = useRouter()

const email = ref<string>("")
const password = ref<string>("")
const errorMsg = ref<string>("")

const signIn = async () => {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) {
      errorMsg.value = error.message
    } else {
      router.push("/")
    }
  } catch (error) {
    errorMsg.value = "an error occurred during sign-in"
  }
}
</script>
