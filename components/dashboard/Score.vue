<template>
  <div class="w-full h-full p-4">

    <div class="flex flex-col gap-6 justify-center">
      <h2 class="text-primary text-4xl font-bold">Carbon score</h2>
      <label class="text-primary text-6xl font-bold">{{ user.currentScore }}</label>
      <p class="text-black1 text-xl font-semibold">Corresponds to the number of tonnes of CO<sub>2</sub> emitted per
        year</p>
    </div>

    <hr class="bg-primary h-1 mx-8 my-4 rounded-full" />

    <ExperienceBar :user="user"/>

    <p class="text-black1 text-xl font-semibold">You need {{ user.nextLevel }} xp points before the next level, you can do it !</p>

    <hr class="bg-primary h-1 mx-8 my-4 rounded-full" />

    <div class="flex flex-col gap-6 justify-center">
      <p class="text-black1 text-xl font-semibold">Last questionnaire done : {{ }}</p>
      <p class="text-black1 text-xl font-semibold">Number of questionnaires completed:{{ }}</p>
    </div>



  </div>
</template>

<script setup lang="ts">
import ExperienceBar from '../elements/ExperienceBar.vue';

defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>