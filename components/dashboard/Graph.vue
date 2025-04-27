<template>
  <div class="w-full h-full flex flex-col p-4">
    <div class="w-full flex justify-between items-center">
      <div class="w-full flex flex-col gap-2">
        <h2 class="text-primary text-4xl font-black">{{ selectedGraphFilter }} consumption</h2>
        <p class="text-primary text-3xl font-bold">in tonnes</p>
      </div>

      <div class="flex justify-end items-center w-full">
        <div class="w-1/2 flex border-[3px] border-purple-400 rounded-full select-none">
          <label class="radio flex flex-grow items-center justify-center rounded-l-full p-1 cursor-pointer">
            <input
              type="radio"
              name="graph-radio"
              value="Yearly"
              class="peer hidden"
              v-model="selectedGraphFilter"
            />
            <span class="flex-1 rounded-l-full tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 py-2 text-center transition duration-150 ease-in-out">
              Yearly
            </span>
          </label>

          <label class="radio flex flex-grow items-center justify-center rounded-r-full p-1 cursor-pointer">
            <input
              type="radio"
              name="graph-radio"
              value="Monthly"
              class="peer hidden"
              v-model="selectedGraphFilter"
            />
            <span class="flex-1 rounded-r-full tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 py-2 text-center transition duration-150 ease-in-out">
              Monthly
            </span>
          </label>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const selectedGraphFilter = ref<string>('Yearly')
</script>