<script setup lang="ts">
import { Transition } from "vue";
import CloseModalButton from "./CloseModalButton.vue";

type Props = { isShown: boolean };
type Emits = {
  (event: "toggleIsShown"): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const outerModalClick = (e: Event) => {
  if (e.target === e.currentTarget) {
    emit("toggleIsShown");
  }
};
</script>

<template>
  <Teleport to="#modal">
    <Transition name="fade">
      <div @click="outerModalClick" v-if="props.isShown" class="modal-outer">
        <div class="modal-inner">
          <CloseModalButton @click="emit('toggleIsShown')" />
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="css" scoped>
.modal-outer {
  @apply absolute z-10 w-full h-full bg-black-rgba;
}
.modal-inner {
  @apply bg-gradient-to-b from-orange-700 via-70% via-orange-800 to-orange-800 absolute top-[20%] left-1/3 h-2/3 w-1/3 z-50 rounded-md p-3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
