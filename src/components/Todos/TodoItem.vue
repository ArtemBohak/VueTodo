<script setup lang="ts">
import CheckButton from "@/UI/Buttons/CheckButton.vue"
import TrashBinButton from "@/UI/Buttons/TrashBinButton.vue";
import { todoType } from "staticData/todos";

const FONT_SIZE = "1.5em";

type Props = {
  todo: todoType;
};

const { todo } = defineProps<Props>();
</script>

<template>
  <li class="todo-item">
    <div class="todo-description">{{ todo.text }} / {{ todo.date }}</div>
    <div class="todo-buttons">
      <CheckButton :height="FONT_SIZE" />
      <TrashBinButton :height="FONT_SIZE" />
    </div>
  </li>
</template>

<style scoped>

.todo-item {
  @apply flex justify-center items-center py-1 px-1.5 m-1 rounded shadow-md gap-1 w-3/5;
}

.todo-buttons {
  @apply flex flex-row justify-center items-center gap-1;
}

.todo-description {
  @apply bg-white w-full p-1.5 rounded;
}
</style>
