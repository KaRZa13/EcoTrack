<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path :fill="fill"
      d="M12 7.81a.75.75 0 0 0-.75.75v2.69H8.56a.75.75 0 0 0 0 1.5h2.69v2.69a.75.75 0 0 0 1.5 0v-2.69h2.69a.75.75 0 0 0 0-1.5h-2.69V8.56a.75.75 0 0 0-.75-.75" />
    <path :fill="fill" fill-rule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"
      clip-rule="evenodd" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: '#FFFD99'
  }
})
</script>
