<template>
  <div class="w-sreen h-screen flex items-center justify-center">

    <!-- <form @submit.prevent="signIn" class="w-1/4 h-auto p-5 bg-slate-200 rounded-lg border border-bg-slate-300">
      <div class="flex flex-col items-center justify-center">
        <Icon name="ic:round-person" class="w-32 h-32 text-slate-500" />
        <h1>Login</h1>
      </div>
      <div class="">
        <div class="mb-4">
          <label>Email:</label>
          <input type="email" v-model="email" placeholder="Enter your email" required class="border rounded p-2 w-full" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" placeholder="Enter your password" required
            class="border rounded p-2 w-full" />
        </div>
      </div>
      <div v-if="errorMsg" class="error-message">{{ errorMsg }}</div>

      <button type="submit" class="submit-button">Sign In</button>
      <NuxtLink to="/register" class="signup-redirect">Don't have an account? Sign Up</NuxtLink>
    </form> -->

    <form action="">
      <div>
        <!-- DIV LOGIN + IMAGES -->
        <div class="">
          <Icon name="ic:round-person" class="text-slate-500" />
        </div>
      </div>
    </form>

  </div>
</template>

<script setup lang="ts">
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