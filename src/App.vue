<script setup lang="ts">
import { ref } from "vue";
import TodoList from "./components/app/Todos/TodoList.vue";
import SearchFilter from "./components/UI/SearchFilter/SearchFilter.vue";

const searchFilter = ref<string>('all')
</script>

<template>
  <div class="wrapper">
    <div class="todo-app">
      <SearchFilter />
      <TodoList :searchFilter="searchFilter" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply h-screen flex justify-center items-center;
}

.todo-app {
  @apply w-3/5 h-[75vh] rounded p-2;
}
</style>
