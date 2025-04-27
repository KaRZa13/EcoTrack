<template>
  <div class="w-screen h-screen flex p-4 bg-white1 gap-8 overflow-y-auto">
    <!-- Sidebar -->
    <div class="md:w-1/10 md:h-full w-1/4">
      <Sidebar :user="user" />
    </div>

    <!-- Dashboard -->
    <div class="w-full h-full md:w-9/10 flex flex-col rounded-2xl gap-8">

      <!-- Upper part -->
      <div class="w-full flex-1 md:h-1/2 flex flex-col md:flex-row rounded-2xl gap-8">

        <!-- Score -->
        <div class="md:w-1/3 h-full md:h-full bg-card rounded-2xl">
          <Score :user="user" />
        </div>

        <!-- Tips -->
        <div class="md:w-1/3 h-full md:h-full bg-card rounded-2xl">
          <Tips />
        </div>

        <!-- Ranking -->
        <div class="md:w-1/3 h-full md:h-full bg-card rounded-2xl">
          <Ranking />
        </div>
      </div>

      <!-- Lower part -->
      <div class="w-full flex-1 md:h-1/2 flex flex-col md:flex-row rounded-2xl gap-8">

        <!-- Graph -->
        <div class=" md:w-1/2 h-full bg-card rounded-2xl">
          <Graph />
        </div>

        <!-- Consommation -->
        <div class="md:w-1/2 h-full bg-card rounded-2xl">
          <Consumption />
        </div>

      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import Sidebar from './dashboard/Sidebar.vue'
import Score from './dashboard/Score.vue'
import Tips from './dashboard/Tips.vue'
import Ranking from './dashboard/Ranking.vue'
import Graph from './dashboard/Graph.vue'
import Consumption from './dashboard/Consumption.vue'

import type { Users } from '@/types/supabase'

const client = useSupabaseClient<Users>()

const user = ref<Users['public']['Tables']['user_profiles']['Row'] | Record<string, any>>({})

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
  
  user.value = data
}

onMounted(async () => {
  await fetchCurrentUserProfile()
})
</script>