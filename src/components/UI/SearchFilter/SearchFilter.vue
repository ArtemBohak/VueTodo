<script setup lang="ts">
import SearchInput from "../Inputs/SearchInput.vue"
import SelectFilter from "../Selects/SelectFilter.vue"
</script>

<template>
  <div class="todo-interact">
    <SearchInput />
    <SelectFilter />
  </div>
</template>

<style lang="css" scoped>
.todo-interact {
  @apply flex flex-row justify-center items-center gap-5
}
</style>
