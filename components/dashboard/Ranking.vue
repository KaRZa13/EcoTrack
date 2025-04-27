<template>
  <div class="w-full h-full flex flex-col p-4">
    <h2 class="text-primary text-4xl font-bold">Ranking</h2>

    <!-- Filter -->
    <div class="flex justify-center items-center">
      <div class="w-1/2 flex border-[3px] border-purple-400 rounded-full select-none mx-8 mt-4">
        <label class="radio flex flex-grow items-center justify-center rounded-l-full p-1 cursor-pointer">
          <input type="radio" name="rank-radio" value="internal" class="peer hidden" v-model="selectedFilter" />
          <span class="flex-1 rounded-l-full tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 py-2 text-center transition duration-150 ease-in-out">
            Internal
          </span>
        </label>

        <label class="radio flex flex-grow items-center justify-center rounded-r-full p-1 cursor-pointer">
          <input type="radio" name="rank-radio" value="external" class="peer hidden" v-model="selectedFilter" />
          <span class="flex-1 rounded-r-full tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 py-2 text-center transition duration-150 ease-in-out">
            External
          </span>
        </label>
      </div>
    </div>

    <!-- Ranking -->
    <div class="flex flex-col gap-4 mt-4">

      <!-- VFOR sur les user de l'entreprise -->
      <div v-for="(user, index) in users" :key="index" v-if="selectedFilter === 'internal'"
        class="w-full flex flex-col gap-2">
        <div class="w-full flex items-center justify-between px-2">
          <div class="flex items-center gap-4">
            <p class="w-6 font-bold text-primary text-4xl">{{ index + 1 }}</p>
            <img src="/img/avatars/lion.png" class="w-12 h-12 rounded-full border-2 border-tertiary" />
            <p class="text-black1 font-bold">{{ user.firstname }}</p>
          </div>
          <p class="text-black1 font-bold">{{ user.currentScore }}</p>
        </div>
        <hr class="bg-secondary h-1 mx-6 rounded-full" />
      </div>

      <!-- VFOR POUR LES ENTREPRISE -->
      <div v-for="(company, index) in companies" :key="index" v-if="selectedFilter === 'external'" class="w-full flex flex-col gap-2">
        <div class="w-full flex items-center justify-between px-2">
          <div class="flex items-center gap-4">
            <p class="w-6 font-bold text-primary text-4xl">{{ index + 1 }}</p>
            <img src="/img/avatars/fox.png" class="w-12 h-12 rounded-full border-2 border-tertiary" />
            <p class="text-black1 font-bold">{{ company.name }}</p>
          </div>
          <p class="text-black1 font-bold">{{ company.currentScore }}</p>
        </div>
        <hr class="bg-secondary h-1 mx-6 rounded-full" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Users } from '@/types/supabase'
import type { Companies } from '@/types/supabase'

const selectedFilter = ref<string>('internal')

const client = useSupabaseClient()

const users = ref<Users[]>([])
const companies = ref<Companies[]>([])

const fetchAllUsers = async (): Promise<void> => {
  const { data, error } = await client
    .from('user_profiles')
    .select('*')
    .order('currentScore', { ascending: true })

  if (error) {
    console.error('Error fetching users:', error)
  } else {
    users.value = data || []
  }
}

const fetchAllCompanies = async (): Promise<void> => {
  const { data, error } = await client
    .from('companies')
    .select('*')
    .order('currentScore', { ascending: true })

  if (error) {
    console.error('Error fetching companies:', error)
  } else {
    companies.value = data || []
  }
}

onMounted(async () => {
  await fetchAllUsers()
  await fetchAllCompanies()
})

</script>