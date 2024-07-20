<script lang="ts" setup>
import EmptyCart from "./EmptyCart.vue";
import { useProductsStore } from "@/stores/Products";
import { computed } from "vue";
import CartList from "./CartList.vue";

const { state } = useProductsStore();
const { productList } = state;

const totalItems = computed(() => {
  let sum = 0;
  productList.forEach((item) => (sum += item.quantity));
  console.log(sum);

  return sum;
});
</script>

<template>
  <div class="p-8 rounded-xl bg-white sticky top-5 md:mr-8 max-w-[400px]">
    <h2 class="text-2xl text-csm-red font-bold mb-4">Your Cart({{ totalItems }})</h2>

    <EmptyCart v-if="productList.length == 0" />

    <CartList v-else />
  </div>
</template>
