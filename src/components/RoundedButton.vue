<script setup lang="ts">
const props = defineProps<{ icon: string; title: string }>();
</script>

<template>
  <button class="w-5 h-5 border border-csm-rose-300 rounded-full p-0.5" type="button">
    <img :src="props.icon" alt="Button Icon" class="w-5" :title="props.title" />
  </button>
</template>
