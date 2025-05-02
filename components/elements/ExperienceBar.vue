<template>
  <div class="w-full mx-auto px-4 py-2">
    <div class="mb-4 flex justify-between items-center">
      <span class="text-sm font-medium text-gray-700">Level {{ props.user?.level ?? 'N/A' }}</span>
      <span class="text-sm font-medium text-gray-700">Level {{ props.user?.level ? props.user.level + 1 : 'N/A' }}
      </span>
    </div>
    <div class="w-full bg-tertiary rounded-full h-6 overflow-hidden">
      <div class="bg-secondary h-6 transition-all duration-300 flex items-center" :style="{ width: `${progress}%` }" >
        <span v-if="progress == 0" class="text-black1 px-2">{{ progress }}%</span>
        <span v-else class="text-white1 px-2">{{ progress }}%</span>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import type { Users } from '@/types/supabase'
const progress = ref<number>(0)

const props = defineProps<{
  user: Users | null
}>()
</script>
