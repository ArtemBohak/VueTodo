<script setup lang="ts">
type Props = { height: string };

const { height } = withDefaults(defineProps<Props>(), { height: "2em" });
</script>

<template>
  <button class="add-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :height="height"
      viewBox="0 0 448 512"
    >
      <path
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
      />
    </svg>
  </button>
</template>

<style lang="css" scoped>
.add-button {
  @apply absolute bottom-8 right-14 fill-white bg-orange-500 py-2 px-2.5 rounded-full hover:fill-orange-400 hover:bg-white transition-all duration-300;
}
</style>
