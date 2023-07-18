<script setup lang="ts">
import TodoList from "./components/Todos/TodoList.vue";
import SearchFilter from "./UI/SearchFilter/SearchFilter.vue"

</script>

<template>
  <div class="wrapper">
    <div class="todo-app">
      <SearchFilter />
      <TodoList />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply h-screen flex justify-center items-center;
}

.todo-app {
  @apply w-3/5 h-[75vh] bg-orange-400 rounded p-2;
}
</style>
