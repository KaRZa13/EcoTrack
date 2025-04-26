<template>
  <div class="w-screen h-screen flex items-center justify-center bg-white1  ">
    <!-- Logo Ecotrack -->
    <div class="absolute top-5 left-5">
      <SvgMainLogo class="w-60 sm:w-80 md:w-100" />
    </div>
    <!-- Formulaire d'inscription -->
    <div class="w-full rounded-lg mt-10 p-6 flex flex-col justify-center items-center md:flex-row gap-8 md:gap-12 max-w-4xl ">
      
      <!-- Calculate Track Reduce -->
      <div class="max-w-xl mt-10 p-6 bg-white1 w-full rounded-lg md:block hidden">
        <div class="p-8 items-center rounded-2xl flex flex-col text-3xl font-bold gap-6 flex-1 ">
          <div class="flex self-start items-center gap-4">
            <img src="/img/register/logocalculate.png" alt="Calculate" class="w-24 h-auto">
            <p>Calculate</p>
          </div>
          <div class="flex self-start items-center gap-4">
            <img src="/img/register/logotracker.png" alt="Tracker" class="w-24 h-auto">
            <p>Track</p>
          </div>
          <div class="flex self-start items-center gap-4">
            <img src="/img/register/logoreduce.png" alt="Reduce" class="w-24 h-auto">
            <p>Reduce</p>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="max-w-xl mx-auto mt-10 p-6 bg-white1 border border-gray-300 w-full rounded-lg">
        <div class="flex flex-col items-center justify-center mb-4">
          <AddPerson class="w-20 h-20" />

        </div>
        <form @submit.prevent="signUp" class="space-y-4 pt-4">
          <div class="form-group">
            First name
            <input v-model="name" type="name" placeholder="First name" required
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300" />
          </div>
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
          <div class="form-group pt-2">
            Password confirmation
            <input v-model="confirmPassword" type="password" placeholder="Password" required
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300" />
          </div>
          <div class="form-group pt-2">
            Code entreprise
            <input v-model="codeEntreprise" type="entreprise" placeholder="XXXXXXXXX" required
              class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-300" />
          </div>
          
          <div class="inline-flex items-center py-2">
            <label class="flex items-center cursor-pointer relative" for="check-with-link">
              <input type="checkbox" required
                class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-black checked:border-slate-800"
                id="check-with-link" />
              <span
                class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label class="select-none cursor-pointer ml-2 text-slate-800 text-sm" for="check-with-link">
              <p>
                I agree with the <span class="underlined">terms and conditions.</span>
              </p>
            </label>
          </div>
          <button type="submit"
            class="w-full bg-black text-white py-2 rounded-md border cursor-pointer hover:bg-white1 hover:border-gray-600 hover:text-black transition">
            Sign up
          </button>
          <p v-if="errorMsg" class="text-red-500 text-sm mt-2">{{ errorMsg }}</p>
          <p v-if="successMsg" class="text-green-500 text-sm mt-2">{{ successMsg }}</p>
        </form>
        <NuxtLink to="/login" class="block text-center text-gray-500 mt-4">
          Already have an account? <span class="underline">Sign in</span>
        </NuxtLink>
        <!-- <form @submit.prevent="fetchCompanyCode" class="space-y-4 pt-4">
          <button type="submit"
          class="w-full bg-black text-white py-2 rounded-md border cursor-pointer hover:bg-white1 hover:border-gray-600 hover:text-black transition">
            Sign up
          </button>
          <p v-if="errorMsg" class="text-red-500 text-sm mt-2">{{ errorMsg }}</p>
          <p v-if="successMsg" class="text-green-500 text-sm mt-2">{{ successMsg }}</p>
        </form> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddPerson from '../components/svg/AddPerson.vue'
import type { Company } from '@/types/supabase'

type CompanyId = Company['public']['Tables']['company']['Row']


const client = useSupabaseClient<Company>()

const name = ref<string>("")
const email = ref<string>("")
const password = ref<string>("")
const codeEntreprise = ref<string>("")
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
    const { error } = await client.auth.signUp({
      // firstname: name.value,
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

const fetchCurrentUserProfile = async (): Promise<void> => {
  const { data: userAuth, error: userError } = await client.auth.getUser()

  if (userError || !userAuth?.user) {
    console.error('Error fetching auth user:', userError)
    return
  }

  const userId = userAuth.user.id

  const { data, error } = await client
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single() 

  if (error) {
    console.error('Error fetching user profile:', error)
    return
  }

  // user.value = data
}

onMounted(async () => {
  await fetchCurrentUserProfile()
})
</script>


