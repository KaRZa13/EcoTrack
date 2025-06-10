<template>
  <div class="w-screen h-screen flex p-4 bg-white1 gap-8 overflow-hidden">
    <!-- Sidebar -->
    <div class="lg:w-1/10 lg:h-full w-1/4">
      <Sidebar :user="user" />
    </div>

    <!-- Dashboard -->
    <div class="w-full h-full lg:w-9/10 flex flex-col rounded-2xl gap-8">

      <!-- Upper part -->
      <div class="w-full flex-1 lg:h-1/2 flex flex-col lg:flex-row rounded-2xl gap-8">

        <!-- Score -->
        <div class="lg:w-1/3 h-full lg:h-full bg-card rounded-2xl">
          <Score :user="user" />
        </div>

        <!-- Tips -->
        <div class="lg:w-1/3 h-full lg:h-full bg-card rounded-2xl">
          <Tips />
        </div>

        <!-- Ranking -->
        <div class="lg:w-1/3 h-full lg:h-full bg-card rounded-2xl">
          <Ranking :user="user" />
        </div>
      </div>

      <!-- Lower part -->
      <div class="w-full flex-1 lg:h-1/2 flex flex-col lg:flex-row rounded-2xl gap-8">

        <!-- Graph -->
        <div class=" lg:w-1/2 h-full bg-card rounded-2xl">
          <Graph />
        </div>

        <!-- Consommation -->
        <div class="lg:w-1/2 h-full bg-card rounded-2xl">
          <Consumption :user="user"/>
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
import axios from 'axios'
import type { Users } from '@/types/supabase'

const client = useSupabaseClient<Users>()
const user = ref<Users | null>(null)

const fetchCurrentUserProfile = async (session: any): Promise<void> => {
  if (!session || !session.user) {
    console.error('No session or user found')
    return
  }
  const userId = session.user.id
  try {
    const response = await axios.get('http://10.61.11.243:3010/user', {
      headers: { 'userid': userId }
    })
    if (response.data) {
      user.value = response.data.user
    }
  } catch (error) {
    console.error('Error fetching user profile:', error)
  }
}

onMounted(async () => {
  console.log("🚀 ~ onMounted ~ client:", user)
  if (!process.client) return

  // 1. Essaye de récupérer la session immédiatement
  const { data: { session } } = await client.auth.getSession()
  if (session) {
    await fetchCurrentUserProfile(session)
  }

  // 2. Écoute les changements d'auth (utile après login ou refresh)
  client.auth.onAuthStateChange(async (_event, session) => {
    if (session) {
      await fetchCurrentUserProfile(session)
    }
  })
})
</script>