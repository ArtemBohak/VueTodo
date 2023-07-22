<script setup lang="ts">
type Props = {
  height: string;
  isChecked: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  height: "1.5em",
});
</script>

<template>
  <button class="check-button" :class="{ active: props.isChecked }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :height="props.height"
      viewBox="0 0 448 512"
    >
      <path
        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
      />
    </svg>
  </button>
</template>

<style lang="css" scoped>
.check-button {
  @apply p-1 bg-green-500 rounded-sm fill-white hover:bg-white hover:fill-green-400 transition-all duration-300;
}

.check-button.active {
  @apply bg-white fill-green-400 transition-all duration-300;
}
</style>
