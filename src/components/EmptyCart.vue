<script setup lang="ts">
import image from "../assets/images/illustration-empty-cart.svg";
</script>

<template>
  <div class="flex flex-col items-center gap-3 mt-4">
    <img :src="image" alt="Picture Of A Cake being cut" />
    <p class="text-csm-rose-500 font-semibold text-sm">
      Your added items will appear here
    </p>
  </div>
</template>
