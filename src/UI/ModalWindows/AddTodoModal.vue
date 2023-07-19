<script setup lang="ts">
import { Transition } from "vue";

type Props = { isShown: boolean };

const props = defineProps<Props>();
</script>

<template>
  <Transition name="fade">
    <div v-if="props.isShown" class="modal"></div>
  </Transition>
</template>

<style lang="css" scoped>
.modal {
  @apply h-1/2 w-2/3;
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
