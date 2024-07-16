<script setup lang="ts">
import ProductsList from "./components/ProductsList.vue";
import ProductCart from "./components/ProductCart.vue";
</script>

<template>
  <main class="p-6 md:grid md:grid-cols-6 space-y-6 md:gap-10">
    <ProductsList />
    <div>
      <ProductCart />
    </div>
  </main>
</template>
