<script setup lang="ts">
import icons from "../constants/icons";
interface Props {
  item: {
    image: {
      mobile: string;
      thumbnail: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}
const props = defineProps<Props>();

const { name, category, price, image } = props.item;
</script>

<template>
  <div>
    <div>
      <picture>
        <source media="(max-width: 600px)" :srcset="image.mobile" />
        <source media="(mix-width: 600px and max-width: 1200)" :srcset="image.tablet" />
        <source media="(min-width: 1200px)" :srcset="image.desktop" />

        <img :src="image.mobile" :alt="'Image of ' + name" class="rounded-xl shadow-lg" />

        <div class="relative bottom-6 grid place-items-center">
          <button
            class="flex gap-1 bg-csm-rose-50 rounded-full p-3 border border-csm-rose-400 items-center"
          >
            <img :src="icons.shoppingCart" alt="Shopping Cart Icon" />
            <span class="font-semibold">Add To Cart</span>
          </button>
        </div>
      </picture>
    </div>
    <p class="t text-csm-rose-300 text-sm">{{ category }}</p>
    <p class="text-csm-rose-900 font-semibold">{{ name }}</p>
    <p class="text-csm-red font-semibold">${{ Number(price).toFixed(2) }}</p>
  </div>
</template>
