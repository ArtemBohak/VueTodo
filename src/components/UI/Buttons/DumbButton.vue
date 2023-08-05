<script setup lang="ts">
type Props = {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
};
const props = defineProps<Props>();
</script>

<template>
  <button :type="props.type" class="dumb-button">{{ props.title }}</button>
</template>

<style lang="css" scoped>
.dumb-button {
  @apply rounded-md transition-all duration-300 w-full p-1.5 bg-orange-200 hover:bg-white;
}
</style>
