<script setup lang="ts">
import { ref } from "vue";

import { FiltersType } from "@/components/UI/Selects/CustomSelect.vue";

import SearchFilter from "../../components/UI/SearchFilter/SearchFilter.vue";
import TodoList from "./components/Todos/TodoList.vue";

const filter = ref<FiltersType>("all");
const searchInputRef = ref<string>("");

const changeFilter = (newFilter: FiltersType) => {
  filter.value = newFilter;
};

const changeSearchInputRef = (newValue: string) => {
  searchInputRef.value = newValue;
};
</script>

<template>
  <div class="todos-wrapper">
    <div class="todo-app">
      <SearchFilter
        @changeFilter="changeFilter"
        @changeSearchInputRef="changeSearchInputRef"
        :searchInputRef="searchInputRef"
      />
      <TodoList :filter="filter" :searchInputRef="searchInputRef" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.todos-wrapper {
  @apply h-screen flex justify-center items-center;
}
.todo-app {
  @apply w-3/5 h-[75vh] rounded p-2;
}
</style>
