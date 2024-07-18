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
  <div class="p-6 pb-4 rounded-xl bg-csm-rose-50 sticky top-5">
    <h2 class="text-xl text-csm-red font-bold mb-4">Your Cart({{ totalItems }})</h2>

    <EmptyCart v-if="productList.length == 0" />

    <CartList v-else />
  </div>
</template>
