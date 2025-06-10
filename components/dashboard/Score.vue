<template>
  <div class="w-full h-full p-4">

    <div class="flex flex-col gap-2 lg:gap-4 xl:gap-6 justify-center">
      <h2 class="text-primary text-4xl font-black">Carbon score</h2>
      <label class="text-primary text-6xl font-black"> {{ props.user?.currentScore }}</label>
      <p class="text-black1 text-xl font-semibold">Corresponds to the number of tonnes of CO<sub>2</sub> emitted per
        year</p>
    </div>

    <hr class="bg-primary h-1 mx-8 my-2 lg:my-4 rounded-full" />

    <ExperienceBar :user="user" />

    <p class="text-black1 text-xs xl:text-sm 2xl:text-base font-semibold">You need {{ props.user?.nextLevel }} xp points
      before the next level, you can do it !</p>

    <hr class="bg-primary h-1 mx-8 my-2 lg:my-6 rounded-full" />

    <div class="flex flex-col gap-2 justify-center text-sm text-black1">

      <p v-if="isLoading" class="text-sm xl:text-lg 2xl:text-xl text-black1 font-semibold">Loading history...</p>
      <p v-else-if="history.length > 0" class="text-sm xl:text-lg 2xl:text-xl text-black1 font-semibold">Last
        questionnaire on {{ history[0]?.historyDate }}</p>
      <p v-else class="text-sm xl:text-lg 2xl:text-xl font-semibold">No questionnaire data available</p>
      <p v-if="isLoading" class="text-sm xl:text-lg 2xl:text-xl text-black1 font-semibold">Loading history...</p>
      <p v-else-if="history.length > 0" class="text-sm xl:text-lg 2xl:text-xl text-black1 font-semibold">Number of
        questionnaires completed : {{ history?.length }}</p>
      <p v-else class="text-sm xl:text-lg 2xl:text-xl text-black1 font-semibold">No questionnaire data available</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceBar from '../elements/ExperienceBar.vue';

import type { History, Users } from '@/types/supabase'
import axios from 'axios';

const client = useSupabaseClient()

const isLoading = ref(true);

const history = ref<History[]>([])
const props = defineProps<{
  user: Users | null
}>()

const fetchCurrentUserHistory = async (currentUserId: string): Promise<void> => {
  const { data: userAuth, error: userError } = await client.auth.getUser()

  if (userError || !userAuth?.user) {
    isLoading.value = false;
    return console.error('Error fetching auth user:', userError);
  }
  try {
    const response = await axios.get('http://10.61.11.244:3010/history', { headers: { "userid": currentUserId } });

    if (response.data)
      history.value = response.data.history;

  } catch (error) {
    console.error('Error fetching user history:', error);
  }
  isLoading.value = false;
}

watch(() => props.user?.id, (currentUserId) => {
  if (currentUserId) {
    fetchCurrentUserHistory(currentUserId);
  }
});
</script>