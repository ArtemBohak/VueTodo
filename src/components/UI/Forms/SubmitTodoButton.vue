<script setup lang="ts">
type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>

<template>
  <button type="submit" class="submit-button">{{ props.title }}</button>
</template>

<style lang="css" scoped>
.submit-button {
  @apply rounded-md transition-all duration-300 w-full p-1.5 bg-orange-200 hover:bg-white;
}
</style>
