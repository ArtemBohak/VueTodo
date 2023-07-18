<script setup lang="ts">
import TodoList from "./components/Todos/TodoList.vue";
import SearchFilter from "./UI/SearchFilter/SearchFilter.vue"
import AddButton from './UI/Buttons/AddButton.vue'

</script>

<template>
  <div class="wrapper">
    <div class="todo-app">
      <SearchFilter />
      <TodoList />
    </div>
  </div>
  <AddButton />
</template>

<style scoped>
.wrapper {
  @apply h-screen flex justify-center items-center;
}

.todo-app {
  @apply w-3/5 h-[75vh] rounded p-2;
}
</style>
