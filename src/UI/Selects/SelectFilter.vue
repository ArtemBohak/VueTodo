<script setup lang="ts"></script>

<template>
  <select name="filters">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="uncompleted">Uncompleted</option>
  </select>
</template>

<style lang="css" scoped>
select {
  @apply py-1 px-2 text-lg border rounded-sm shadow-md;
}
</style>
