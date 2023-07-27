<script setup lang="ts">
import { todoType } from "staticData/todos";

import CustomInput from "../../../../components/UI/Inputs/CustomInput.vue";

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
  <CustomInput
    :model-value="props.reactiveInputs.todoText"
    @update:model-value="
      (newValue) => emit('changeReactiveInputs', { text: newValue })
    "
    placeholder="description"
  />
</template>

<style lang="css" scoped></style>
