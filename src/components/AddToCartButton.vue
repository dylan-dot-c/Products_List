<script setup lang="ts">
import icons from "../constants/icons";
const { shoppingCart } = icons;
</script>

<template>
  <button
    class="flex gap-1 bg-csm-rose-50 rounded-full p-3 border border-csm-rose-400 items-center w-3/5 justify-center hover:border-csm-red transition"
    title="Add To Cart"
  >
    <img :src="shoppingCart" alt="Shopping Cart Icon" />
    <span class="font-semibold">Add To Cart</span>
  </button>
</template>
