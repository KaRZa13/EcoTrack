<template>
  <div class="w-screen h-screen flex items-center justify-center bg-white1 relative">
    <div class="absolute top-5 left-5">
      <SvgMainLogo class="w-60 sm:w-80 md:w-100" />
    </div>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white1 border border-gray-300 w-full rounded-lg">
      <div class="flex flex-col items-center justify-center mb-4">
        <Person class="w-20 h-20" />

      </div>
      <form @submit.prevent="signIn" class="space-y-4 pt-4">
        <div class="form-group">
          Email
          <input v-model="email" type="email" placeholder="Email" required
            class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300" />
        </div>
        <div class="form-group pt-2">
          Password
          <input v-model="password" type="password" placeholder="Password" required
            class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300" />
        </div>

        <button type="submit"
          class="w-full bg-black text-white py-2 rounded-md border cursor-pointer hover:bg-white1 hover:border-gray-600 hover:text-black transition">
          Log in
        </button>
        <p v-if="errorMsg" class="text-red-500 text-sm mt-2">{{ errorMsg }}</p>
      </form>
      <NuxtLink to="/register" class="block text-center text-gray-500 mt-4">
        Don't have an account? <span class="underline">Sign up</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Person from '../components/svg/Person.vue'

const email = ref<string>("")
const password = ref<string>("")
const errorMsg = ref<string>("")
const router = useRouter()
const client = useSupabaseClient()

const signIn = async () => {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      errorMsg.value = error.message;
      return;
    }

    if (data && data.session) {
      console.log("🚀 ~ signIn ~ session:", data.session)
      router.push("/");
    } else {
      errorMsg.value = "Session not established";
    }
  } catch (error) {
    errorMsg.value = "An error occurred during sign-in";
  }
}
</script>