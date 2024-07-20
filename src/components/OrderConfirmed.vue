<script setup lang="ts">
import icons from "@/constants/icons";
const props = defineProps<{ cartTotal: number }>();
const { cartTotal } = props;
import OrderItems from "./OrderItems.vue";
import { useProductsStore } from "@/stores/Products";

const { state, resetCart } = useProductsStore();
const { productList } = state;
</script>

<template>
  <div>
    <div class="mb-4 space-y-3">
      <img :src="icons.orderConfirmed" alt="Green Checkmark in a green circle" />
      <h3 class="font-bold text-csm-rose-900 text-5xl mt-4">Order Confirmed</h3>
      <p class="text-csm-rose-300">We hope you enjoy your food!</p>
    </div>

    <div
      class="bg-csm-rose-100 divide-y divide-csm-rose-300 p-4 rounded-xl max-h-96 overflow-auto"
    >
      <OrderItems v-for="item in productList" :key="item.name" :item />
      <div class="flex justify-between items-center pt-4">
        <p>Order Total</p>
        <span class="text-3xl text-csm-rose-900 font-bold"
          >${{ cartTotal.toFixed(2) }}</span
        >
      </div>
    </div>
    <button @click="resetCart" class="btn mt-8">Start New Order</button>
  </div>
</template>
