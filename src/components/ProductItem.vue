<script setup lang="ts">
import { computed } from "vue";
import icons from "../constants/icons";
import { useProductsStore } from "@/stores/Products";
import AddToCart from "./AddToCartButton.vue";
import RoundedButton from "./RoundedButton.vue";

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
const { increment, productList, decrement, addToCart } = useProductsStore();

const productInCart = computed(() => {
  return productList.find((item) => item.name == name);
});
</script>

<template>
  <div>
    <div>
      <picture>
        <source media="(max-width: 600px)" :srcset="image.mobile" />
        <source media="(mix-width: 600px and max-width: 1200)" :srcset="image.tablet" />
        <source media="(min-width: 1200px)" :srcset="image.desktop" />

        <img
          :src="image.mobile"
          :alt="'Image of ' + name"
          class="rounded-xl border-2"
          :class="{
            ' border-csm-red': productInCart,
            'border-transparent': !productInCart,
          }"
        />

        <div class="relative bottom-6 grid place-items-center">
          <div
            v-if="productInCart && productInCart.quantity > 0"
            class="bg-csm-red flex justify-between items-center w-3/5 p-3 rounded-full"
          >
            <RoundedButton
              :icon="icons.decrement"
              @click="decrement(name)"
              title="Decrement Item Count"
            />
            <span class="text-csm-rose-50"> {{ productInCart.quantity }}</span>
            <RoundedButton
              :icon="icons.increment"
              @click="increment(name)"
              title="Decrement Item Count"
            />
          </div>

          <AddToCart
            v-else
            @click="
              addToCart({
                name: name,
                price: price,
                quantity: 1,
                thumbnail: image.thumbnail,
              })
            "
          />
        </div>
      </picture>
    </div>
    <p class="t text-csm-rose-300 text-sm">{{ category }}</p>
    <p class="text-csm-rose-900 font-semibold">{{ name }}</p>
    <p class="text-csm-red font-semibold">${{ Number(price).toFixed(2) }}</p>
  </div>
</template>
