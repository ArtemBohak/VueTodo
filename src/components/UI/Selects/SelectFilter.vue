<script setup lang="ts">
type Props = { options: string[] };

const props = withDefaults(defineProps<Props>(), {
  options: () => ["all", "completed", "uncompleted"],
});


</script>

<template>
  <select name="filters">
    <option v-for="item of props.options" :key="item">
      {{ item.charAt(0).toUpperCase() + item.slice(1) }}
    </option>
  </select>
</template>

<style lang="css" scoped>
select {
  @apply py-1 px-2 text-lg border rounded-sm shadow-md;
}
</style>
