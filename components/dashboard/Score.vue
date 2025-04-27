<template>
  <div class="w-full h-full p-4">

    <div class="flex flex-col gap-2 xl:gap-6 justify-center">
      <h2 class="text-primary text-4xl font-black">Carbon score</h2>
      <label class="text-primary text-6xl font-black">{{ user.currentScore }}</label>
      <p class="text-black1 text-xl font-semibold">Corresponds to the number of tonnes of CO<sub>2</sub> emitted per
        year</p>
    </div>

    <hr class="bg-primary h-1 mx-8 my-2 xl:my-4 rounded-full" />

    <ExperienceBar :user="user"/>

    <p class="text-black1 text-xs xl:text-sm 2xl:text-base font-semibold">You need {{ user.nextLevel }} xp points before the next level, you can do it !</p>

    <hr class="bg-primary h-1 mx-8 my-2 xl:my-4 rounded-full" />

    <div class="flex flex-col gap-2 xl:gap-6 justify-center text-sm text-black1">

      <p v-if="isLoading" class="text-base xl:text-base 2xl:text-xl text-black1 font-semibold">Loading history...</p>
      <p v-else-if="history.length > 0" class="text-base xl:text-base 2xl:text-xl text-black1 font-semibold">Last questionnaire completed on {{ history[0].historyDate }}</p>
      <p v-else class="text-base xl:text-base 2xl:text-xl font-semibold">No questionnaire data available</p>
      <p v-if="isLoading" class="text-base xl:text-base 2xl:text-xl text-black1 font-semibold">Loading history...</p>
      <p v-else-if="history.length > 0" class="text-base xl:text-base 2xl:text-xl text-black1 font-semibold">Number of questionnaires completed : {{ history.length }}</p>
      <p v-else class="text-base xl:text-base 2xl:text-xl text-black1 font-semibold">No questionnaire data available</p>

    </div>



  </div>
</template>

<script setup lang="ts">
import ExperienceBar from '../elements/ExperienceBar.vue';

import type { History } from '@/types/supabase'


const client = useSupabaseClient<History>()

const history = ref<History[]>([])

const isLoading = ref(true);

const fetchCurrentUserHistory = async (): Promise<void> => {
  if (!props.user.id) {
    console.error("User ID is undefined or missing");
    return;
  }

  const { data, error } = await client
    .from('history')
    .select('historyDate')
    .eq('userId', props.user.id)
    .order('historyDate', { ascending: false });

  history.value = data || [];
  isLoading.value = false;
};




const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

watch(() => props.user?.id, (currentUserId) => {
  if (currentUserId) {
    fetchCurrentUserHistory();
  }
});
</script>