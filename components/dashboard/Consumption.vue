<template>
  <div class="w-full h-full flex flex-col p-4">
    <h2 class="text-primary text-4xl font-bold">My consumption</h2>
    <div v-for="category in categories">
      {{ category }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Categories } from '@/types/supabase'

type CategoryRow = Categories['public']['Tables']['categories']['Row']

const client = useSupabaseClient<Categories>()

const categories = ref<string[]>([])

const fetchCategories = async (): Promise<void> => {
  const { data, error } = await client.from('categories').select('*')
  
  if (error) {
    console.error('Error fetching categories:', error)
    return
  }

  data?.forEach((category: CategoryRow) => {
    categories.value.push(category.name)
  })

  console.log('Fetched categories:', categories.value)
}

onMounted(() => {
  fetchCategories()
})
</script>