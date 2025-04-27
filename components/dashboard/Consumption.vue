<template>
  <div class="w-full h-full flex flex-col p-4">
    <h2 class="text-primary text-4xl font-bold">My consumption</h2>
    <div class="w-full h-full flex flex-col gap-4 overflow-x-hidden p-4">
      <div v-for="category in categories" class="w-full flex flex-col border p-4 rounded-2xl gap-2">
        <h3 class="text-2xl font-bold text-black1">
          {{ category.name }}
        </h3>
        <ConsumptionBar :user="user"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Categories } from '@/types/supabase'

import ConsumptionBar from '../elements/ConsumptionBar.vue'

const client = useSupabaseClient()

const categories = ref<Categories[]>([])

const fetchCategories = async (): Promise<void> => {
  const { data, error } = await client.from('categories').select('*')

  if (error) {
    console.error('Error fetching categories:', error)
    return
  }

  categories.value = data || []
}

onMounted(async () => {
  await fetchCategories()
})

defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>