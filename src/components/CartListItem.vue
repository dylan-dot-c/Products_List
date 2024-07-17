<script setup lang="ts">
import icons from "../constants/icons";
import { computed } from "vue";
import { useProductsStore } from "@/stores/Products";
import RoundedButton from "./RoundedButton.vue";

const { removeFromCart, productList } = useProductsStore();
const props = defineProps<{ index: number }>();

const { index } = props;
const product = computed(() => productList[index]);
const total = computed(() => {
  const value = product.value.quantity * product.value.price;
  return value;
});
</script>
<template>
  <div class="flex justify-between items-center">
    <div>
      <p class="text-csm-rose-900 font-semibold">{{ product.name }}</p>
      <div class="text-sm space-x-2 font-semibold">
        <span class="text-csm-red pr-2">{{ product.quantity }}x</span>
        <span class="text-csm-rose-300 font-normal"
          >@ ${{ product.price.toFixed(2) }}</span
        >
        <span class="text-csm-rose-400">${{ total.toFixed(2) }}</span>
      </div>
    </div>
    <div>
      <RoundedButton
        :icon="icons.removeItem"
        title="Remove Item"
        @click="removeFromCart(product.name)"
      />
    </div>
  </div>
</template>

<style scoped></style>
