<template>
  <div class="w-full mx-auto px-2 py-2">
    <div class="w-full bg-tertiary rounded-full h-6 overflow-hidden">
      <div class="bg-secondary h-6 transition-all duration-300 flex items-center" :style="{ width: `${progress}%` }" >
        <span v-if="progress == 0" class="text-black1 px-2">{{ progress }}%</span>
        <span v-else class="text-white1 px-2">{{ progress }}%</span>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
const progress = ref<number>(0)

defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>
