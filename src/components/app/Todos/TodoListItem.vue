<script setup lang="ts">
import { todoType } from "staticData/todos";

import CheckButton from "../../UI/Buttons/CheckButton.vue";
import TrashBinButton from "../../UI/Buttons/TrashBinButton.vue";

type Props = {
  todo: todoType;
};
const props = defineProps<Props>();

type Emits = {
  (event: "toggleIsChecked", id: string): void;
};
const emit = defineEmits<Emits>();

const clickHandle = () => {
  emit("toggleIsChecked", props.todo.id);
};
</script>

<template>
  <li class="todo-item" :class="{ checked: props.todo.isChecked }">
    <div class="todo-description">
      {{ props.todo.text }} / {{ props.todo.date }}
    </div>
    <div class="todo-buttons">
      <CheckButton @click="clickHandle" :isChecked="todo.isChecked" />
      <TrashBinButton @click="$emit('removeTodo', props.todo.id)" />
    </div>
  </li>
</template>

<style scoped>
.todo-item {
  @apply flex justify-center items-center py-1 px-1.5 m-1 rounded shadow-md gap-1 w-3/5;
}

.todo-item.checked {
  @apply line-through duration-500 transition-all;
}

.todo-buttons {
  @apply flex flex-row justify-center items-center gap-1;
}

.todo-description {
  @apply bg-white w-full p-1.5 rounded;
}
</style>
