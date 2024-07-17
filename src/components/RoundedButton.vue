<script setup lang="ts">
const props = defineProps<{ icon: string; title: string }>();
</script>

<template>
  <button
    class="w-5 h-5 border border-csm-rose-300 rounded-full p-0.5 hover:text-csm-red hover:bg-white"
    type="button"
  >
    <img
      :src="props.icon"
      alt="Button Icon"
      class="w-5 hover:text-csm-red"
      :title="props.title"
    />
  </button>
</template>
