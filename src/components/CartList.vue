<script setup lang="ts">
import CartListItem from "./CartListItem.vue";
import { useProductsStore } from "../stores/Products";
import { computed } from "vue";
import icons from "@/constants/icons";

const { productList } = useProductsStore();

const cartTotal = computed(() => {
  let total = 0;
  productList.forEach((product) => {
    const cost = product.price * product.quantity;
    total += cost;
  });
  return total;
});
</script>

<template>
  <div class="divide-y divide-y-csm-rose-300">
    <div class="py-2" v-for="(item, index) in productList" :key="item.name">
      <CartListItem :index />
    </div>
  </div>
  <div class="space-y-5 mt-3">
    <div class="flex justify-between items-center">
      <p>Order Total</p>
      <span class="text-3xl text-csm-rose-900 font-bold"
        >${{ cartTotal.toFixed(2) }}</span
      >
    </div>

    <div class="bg-csm-rose-100 rounded-lg py-4 flex justify-center gap-2">
      <img :src="icons.carbonNeutral" alt="Carbon Neutral Icon with Tree" />
      <p class="text-sm">This is a <b>carbon-neutral</b> delivery</p>
    </div>

    <button class="bg-csm-red text-csm-rose-50 w-full p-4 rounded-full">
      Confirm Order
    </button>
  </div>
</template>

<style scoped></style>
