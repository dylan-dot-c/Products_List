<script setup lang="ts">
import { useProductsStore } from "../stores/Products";

const { showModal } = useProductsStore();
</script>

<template>
  <Transition>
    <div class="modal" v-if="showModal.show">
      <div
        class="bg-white max-w-[600px] w-[600px] md:p-8 p-4 md:rounded-2xl space-y-4 rounded-t-2xl md:h-auto"
      >
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  animation: fade-in 0.2s ease-in;
}

@keyframes fade-in {
  from {
    opacity: 0;
    scale: 1.5;
  }
  to {
    opacity: 100;
    scale: 1;
  }
}

@media screen and (max-width: 700px) {
  .modal {
    align-items: end;
  }

  @keyframes fade-in {
    from {
      transform: translate(0, 100%);
    }
    to {
      transform: translate(0, 0);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
