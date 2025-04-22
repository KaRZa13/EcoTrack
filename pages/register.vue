<script setup>
import { NuxtLink } from '#components';

useHead({
  title: "Register",
  meta: [
    {
      name: "register",
      content: "register page",
    },
  ],
});

const client = useSupabaseClient();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) {
      errorMsg.value = error.message;
    } else {
      successMsg.value = "Check your email for the confirmation link";
    }
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
<template>
  <h1>Register</h1>
  <form @submit.prevent="signUp">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Sign Up</button>
    <p v-if="errorMsg">{{ errorMsg }}</p>
    <p v-if="successMsg">{{ successMsg }}</p>
  </form>
  <NuxtLink to="/login">Already have an account? Login</NuxtLink>
</template>