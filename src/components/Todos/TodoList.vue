<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

import { todos, todoType } from "../../../staticData/todos";

import TodoItem from "./TodoItem.vue";
import AddButton from "../../UI/Buttons/AddButton.vue";

const reactiveTodos = ref<todoType[]>(todos);
const addTodoHandle = () => {
  reactiveTodos.value.push({
    id: uuidv4(),
    date: "22-11-2023",
    isChecked: false,
    text: "Smth",
  });
};

const removeTodo = (id: string) => {
  reactiveTodos.value = reactiveTodos.value.filter((item) => item.id !== id);
};
</script>

<template>
  <TransitionGroup name="todo-list" class="todo-list" tag="ul">
    <TodoItem
      @removeTodo="removeTodo"
      v-for="todo of reactiveTodos"
      :key="todo.id"
      :todo="todo"
    />
  </TransitionGroup>
  <AddButton @click="addTodoHandle" />
</template>

<style scoped>
.todo-list {
  @apply flex justify-center items-center flex-col mt-12;
}

.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.5s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
</style>
