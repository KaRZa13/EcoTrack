<template>
  <div class="w-screen h-screen flex p-4 bg-white1 gap-8 overflow-y-auto">
    <!-- Sidebar -->
    <div class="md:w-1/10 md:h-full w-1/4">
      <Sidebar />
    </div>

    <!-- Dashboard -->
    <div class="w-full h-full md:w-9/10 flex flex-col rounded-2xl gap-8">

      <!-- Upper part -->
      <div class="w-full flex-1 md:h-1/2 flex flex-col md:flex-row rounded-2xl gap-8">

        <!-- Score -->
        <div class="md:w-1/3 h-full md:h-full bg-card rounded-2xl">
          <Score />
        </div>

        <!-- Tips -->
        <div class="md:w-1/3 h-full md:h-full bg-card rounded-2xl">
          <Tips />
        </div>

        <!-- Ranking -->
        <div class="md:w-1/3 h-full md:h-full bg-card rounded-2xl">
          <Ranking />
        </div>
      </div>

      <!-- Lower part -->
      <div class="w-full flex-1 md:h-1/2 flex flex-col md:flex-row rounded-2xl gap-8">

        <!-- Graph -->
        <div class=" md:w-1/2 h-full bg-card rounded-2xl">
          <Graph />
        </div>

        <!-- Consommation -->
        <div class="md:w-1/2 h-full bg-card rounded-2xl">
          <Consumption />
        </div>

      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import Sidebar from './dashboard/Sidebar.vue'
import Score from './dashboard/Score.vue'
import Tips from './dashboard/Tips.vue'
import Ranking from './dashboard/Ranking.vue'
import Graph from './dashboard/Graph.vue'
import Consumption from './dashboard/Consumption.vue'

</script>