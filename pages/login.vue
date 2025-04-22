<script setup>
useHead({
  title: "Login",
  meta: [
    {
      name: "login",
      content: "login page",
    },
  ],
});

const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref(null);

async function signIn() {
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
    errorMsg.value = error.message;
  }
}
</script>

<template>
  <h1>Login</h1>
  <form @submit.prevent="signIn">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model= "password" type="password" placeholder="Password" required />
    <button type="submit">Sign In</button>
    <p v-if="errorMsg">{{ errorMsg }}</p>
  </form>
  <NuxtLink to="/register">Already have an account? Login</NuxtLink>
</template>