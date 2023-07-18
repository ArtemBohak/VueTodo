<script setup lang="ts">
import CheckButton from "@/UI/Buttons/CheckButton.vue"
import TrashBinButton from "@/UI/Buttons/TrashBinButton.vue";
import { todoType } from "staticData/todos";

const FONT_SIZE = "1.6em";

type Props = {
  todo: todoType;
};

const { todo } = defineProps<Props>();
</script>

<template>
  <li class="todo-item">
    <div class="todo-description">{{ todo.text }} / {{ todo.date }}</div>
    <div class="todo-buttons">
      <CheckButton :fontSize="FONT_SIZE" />
      <TrashBinButton :fontSize="FONT_SIZE" />
    </div>
  </li>
</template>

<style scoped>
svg {
  fill: #fff;
}
.todo-item {
  @apply flex justify-center items-center p-1 m-1 rounded bg-orange-400 gap-1;
}

.todo-buttons {
  @apply flex flex-row justify-center items-center gap-1;
}

.todo-description {
  @apply bg-white w-full p-1.5 rounded;
}
</style>
