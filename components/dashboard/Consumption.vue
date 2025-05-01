<template>
  <div class="w-full h-full flex flex-col p-4">
    <h2 class="text-primary text-4xl font-black">My consumption</h2>
    <div class="w-full h-full flex flex-col gap-4 overflow-x-hidden p-4">
      <div v-for="category in categories" class="w-full flex flex-col border p-4 rounded-2xl gap-2">
        <h3 class="text-2xl font-bold text-black1">
          {{ category.name }}
        </h3>
        <ConsumptionBar/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Categories } from '@/types/supabase'
import axios from 'axios'

import ConsumptionBar from '../elements/ConsumptionBar.vue'


const categories = ref<Categories[]>([])

  const fetchCategories = async (): Promise<void> => {
  try {
    const response = await axios.get('http://localhost:3010/categories');
    if (response.data) {
      categories.value = response.data.categories;
      console.log("🚀 ~ fetchCategories ~ categories:", categories.value)
    }

  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

onMounted(async () => {
  await fetchCategories()
})

</script>