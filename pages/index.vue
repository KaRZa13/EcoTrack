<template>
    <MainLogo/>
    <MainLogo fill="#F7F9F5"/>
    <FavLogo/>
  <NuxtLink to="/test"></NuxtLink>
</template>

<script setup lang="ts">
import MainLogo from '@/components/svg/MainLogo.vue'
import FavLogo from '@/components/svg/FavLogo.vue'
</script>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: 'Manrope', sans-serif;
}

* {
    font-family: 'Inter', sans-serif;
}
</style>