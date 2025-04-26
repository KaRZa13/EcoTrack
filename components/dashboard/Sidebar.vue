<template>
  <div class="h-full w-full bg-secondary rounded-2xl flex flex-col items-center justify-between">
    <div class="w-full h-1/2 flex flex-col justify-between p-4">
      <FavLogo stroke="#F7F9F5" />
      <h2 class="w-full text-tertiary font-bold text-center">ENTREPRISE</h2>
      <div class="w-full">
        <img src="@/assets/avatars/fox.png" alt="PP" class="w-full rounded-full border-2 border-tertiary" />
      </div>
      <div class="text-center">
        <h3 class="text-white1 font-bold">Sophie</h3>
        <p class="text-white1 font-bold">Lvl 14</p>
        <p class="text-tertiary font-semibold">Eco-low</p>
      </div>
    </div>

    <div class="w-full h-1/2 flex flex-col items-center justify-between p-4">
      <div class=" w-full h-full bg-secondary">
        BADGES
      </div>
      <button class="w-full">
        <NewFormButtonSVG />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FavLogo from '../svg/FavLogo.vue'
import NewFormButtonSVG from '../svg/NewFormButtonSVG.vue';
</script>