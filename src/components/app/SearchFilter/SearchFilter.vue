<script setup lang="ts">
import { ref, watch } from "vue";

import { useTodoStore } from "@/store/TodoStore";

import SearchInput from "../../UI/Inputs/SearchInput.vue";
import SelectFilter, { FiltersType } from "../../UI/Selects/SelectFilter.vue";

const todoStore = useTodoStore();

const selected = ref<FiltersType>("all");
watch(selected, (newValue, _oldValue) => {
  todoStore.changeFilter(newValue);
});
</script>

<template>
  <div class="todo-interact">
    <SearchInput v-model="todoStore.searchInputRef" />
    <SelectFilter v-model="selected" />
  </div>
</template>

<style lang="css" scoped>
.todo-interact {
  @apply flex flex-row justify-center items-center gap-5;
}
</style>
