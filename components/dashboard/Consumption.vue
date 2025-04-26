<template>
  <div class="w-full h-full flex flex-col p-4">
    <h2 class="text-primary text-4xl font-bold">My consumption</h2>
    <div class="w-full h-full flex flex-col gap-2 overflow-x-hidden">
      <div v-for="category in categories" class="w-full flex flex-col border p-4 rounded-2xl">
        <h3 class="text-2xl font-bold text-black1">
          {{ category }}
        </h3>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Categories } from '@/types/supabase'

const client = useSupabaseClient<Categories>()

const categories = ref<string[]>([])

const fetchCategories = async (): Promise<void> => {
  const { data, error } = await client.from('categories').select('*')

  if (error) {
    console.error('Error fetching categories:', error)
    return
  }

  categories.value = data?.map((category) => category.name) || []
}

onMounted(async () => {
  await fetchCategories()
})
</script>