<script setup lang="ts">
import ProductsList from "./components/ProductsList.vue";
import ProductCart from "./components/ProductCart.vue";
</script>

<template>
  <main
    class="p-4 md:p-24 md:grid md:grid-cols-6 space-y-6 md:gap-8 max-w-[1800px] mx-auto"
  >
    <ProductsList />
    <div class="col-span-2">
      <ProductCart />
    </div>
  </main>
</template>
