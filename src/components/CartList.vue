<script setup lang="ts">
import ModalContainer from "./ModalContainer.vue";
import OrderConfirmed from "./OrderConfirmed.vue";
import CartListItem from "./CartListItem.vue";
import { useProductsStore } from "../stores/Products";
import { computed } from "vue";
import CarbonNeutral from "./CarbonNeutral.vue";

const { state, toggleModal } = useProductsStore();
const { productList } = state;

// calculate the total of the cart
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
    <div class="py-2" v-for="item in productList" :key="item.name">
      <CartListItem :item="item" />
    </div>
  </div>
  <div class="space-y-5 mt-3">
    <div class="flex justify-between items-center">
      <p>Order Total</p>
      <span class="text-3xl text-csm-rose-900 font-bold"
        >${{ cartTotal.toFixed(2) }}</span
      >
    </div>

    <CarbonNeutral />

    <button @click="toggleModal" class="btn">Confirm Order</button>

    <!-- used to place the modal content in the body instead of having it deeply nested in the DOM -->
    <Teleport to="body">
      <ModalContainer>
        <OrderConfirmed :cartTotal />
      </ModalContainer>
    </Teleport>
  </div>
</template>

<style scoped></style>
