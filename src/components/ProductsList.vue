<script setup lang="ts">
import products from "../constants/data";
import ProductItem from "../components/ProductItem.vue";
</script>

<template>
  <div class="md:col-span-4">
    <h1 class="text-4xl font-bold mb-8">Desserts</h1>

    <div class="grid md:grid-cols-3 gap-8">
      <ProductItem :item="product" v-for="product in products" :key="product.name" />
    </div>
  </div>
</template>
