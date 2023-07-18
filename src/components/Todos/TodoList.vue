<template>
  <ul class="todo-">
    <TodoItem v-for="todo of reactiveTodos" :todo="todo" key="todo" />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { todos, todoType } from "../../../staticData/todos";
import TodoItem from "./TodoItem.vue";

const reactiveTodos = ref<todoType[]>(todos);
</script>

<style scoped></style>
