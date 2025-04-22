<template>

</template>

<script setup lang="ts">
const client = useSupabaseClient();
const router = useRouter();

const email = ref<string>("");
const password = ref<string>("");
const errorMsg = ref<string>("");

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
