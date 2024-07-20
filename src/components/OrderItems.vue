<script setup lang="ts">
import type { ProductItem } from "../stores/Products";
const props = defineProps<{ item: ProductItem }>();
const { thumbnail, name, quantity, price } = props.item;
const total = quantity * price;
</script>

<template>
  <div class="flex gap-4 py-4 items-center">
    <img :src="thumbnail" class="w-16 rounded-md" :alt="'Thumbnail of ' + name" />

    <div class="flex justify-between items-center w-full">
      <div>
        <p class="text-csm-rose-900 font-semibold truncate">
          {{ name }}
        </p>
        <p>
          <span class="text-csm-red mr-2 font-semibold">{{ quantity }}x</span>
          <span class="text-csm-rose-400">@ ${{ price.toFixed(2) }}</span>
        </p>
      </div>

      <span class="text-csm-rose-900 font-semibold">${{ total.toFixed(2) }}</span>
    </div>
  </div>
</template>
