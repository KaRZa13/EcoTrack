<template>
  <div class="h-full w-full bg-secondary rounded-2xl flex flex-col items-center justify-between">
    <div class="w-full h-1/2 flex flex-col justify-between p-4">
      <FavLogo stroke="#F7F9F5" />
      <h2 class="w-full text-tertiary font-extrabold text-center text-4xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">{{ props.user?.company?.name }}</h2>
      <div class="w-full">
        <img src="/img/avatars/fox.png" alt="PP" class="w-full rounded-full border-3 border-tertiary" />
      </div>
      <div class="text-center">
        <h3 class="text-white1 font-bold text-3xl">{{ props.user?.firstname }}</h3>
        <p class="text-white1 font-bold text-2xl">Lvl {{ props.user?.level }}</p>
        <p class="text-tertiary font-semibold text-xl">Eco-low</p>
      </div>
    </div>

    <div class="w-full h-1/2 flex flex-col items-center justify-between p-4">
      <div class=" w-full h-full bg-secondary">
        <!-- BADGES -->
      </div>
      <NuxtLink to="/form" class="w-full cursor-pointer rounded-full hover:bg-slate-200/15 transition duration-300 ease-in-out">
        <NewFormButtonSVG />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import FavLogo from '../svg/FavLogo.vue'
import NewFormButtonSVG from '../svg/NewFormButtonSVG.vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>