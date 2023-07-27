<script setup lang="ts">
import { todoType } from "staticData/todos";

import AddTodoDate from "@/components/UI/Inputs/AddTodoDate.vue";

type Props = {
  reactiveInputs: { todoText: string; todoDate: string; category: string };
};
const props = defineProps<Props>();

type Emits = {
  (
    event: "changeReactiveInputs",
    todoData: Partial<todoType & { category: string }>
  ): void;
};
const emit = defineEmits<Emits>();
</script>

<template>
  <AddTodoDate
    :modelValue="props.reactiveInputs.todoDate"
    @update:modelValue="
      (newValue) => emit('changeReactiveInputs', { date: newValue })
    "
  />
</template>

<style lang="css" scoped></style>
