<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <form @submit.prevent="signIn" class="w-1/4 h-auto p-5 bg-slate-200 rounded-lg border border-slate-300">
      <div class="flex flex-col items-center justify-center mb-4">
        <Person class="w-10 h-10"/>
        <h1 class="text-xl font-bold">Login</h1>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input id="email" type="email" v-model="email" placeholder="Enter your email" required
          class="border rounded p-2 w-full" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
        <input id="password" type="password" v-model="password" placeholder="Enter your password" required
          class="border rounded p-2 w-full" />
      </div>
      <div v-if="errorMsg" class="text-red-500 text-sm mb-4">{{ errorMsg }}</div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Sign In
      </button>
      <NuxtLink to="/register" class="block text-center text-blue-500 mt-4 hover:underline">
        Don't have an account? Sign Up
      </NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
import Person from './svg/Person.vue'
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
    });
    if (error) {
      errorMsg.value = error.message;
    } else {
      router.push("/dashboard");
    }
  } catch (error) {
    errorMsg.value = "an error occurred during sign-in";
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Manrope', sans-serif;
}

* {
  font-family: 'Inter', sans-serif;
}
</style>