<template>
  <div class="w-full h-full flex flex-col p-4">
    <h2 class="text-primary text-4xl font-black">Tips</h2>
    <div class="w-full h-full flex flex-col overflow-x-hidden">
      <div v-for="tips in random_tips.slice(0, 4)"
        class="text-black1 flex flex-col border border-gray-300 mt-2 p-2  rounded-2xl shadow-md text-center font-bold">
        <p class="text-xs 2xl:text-sm">{{ tips.content }}</p>
      </div>
      <h2 class="text-primary text-4xl mt-2 xl:mt-4 font-black">Daily resource</h2>
      <div
        class="text-black1 border border-gray-300 mt-2 p-2 xl:mb-3 2xl:mb-1 rounded-2xl shadow-xl/10 text-center font-bold">
        <p class="text-xs 2xl:text-sm">Follow the last alerts on :</p>
        <a class="text-xs 2xl:text-sm underlined" href="https://www.ecologie.gouv.fr/">https://www.ecologie.gouv.fr/</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { Tips } from '@/types/supabase'

const client = useSupabaseClient<Tips>()

const random_tips = ref<Tips[]>([])
const isLoading = ref(true)

const fetchTips = async (): Promise<void> => {
  const { data, error } = await client.from('random_tips').select('*')
    .limit(4)

  if (error) {
    console.error('Error fetching tips:', error)
    return
  }

  random_tips.value = data
  isLoading.value = false
  console.log('Tips:', random_tips.value)
}
onMounted(async () => {
  await fetchTips()
})



</script>