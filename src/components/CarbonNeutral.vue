<script setup lang="ts">
import icons from "../constants/icons";
</script>

<template>
  <div class="bg-csm-rose-100 rounded-lg py-4 flex justify-center gap-2">
    <img :src="icons.carbonNeutral" alt="Carbon Neutral Icon with Tree" />
    <p class="text-sm">This is a <b>carbon-neutral</b> delivery</p>
  </div>
</template>
