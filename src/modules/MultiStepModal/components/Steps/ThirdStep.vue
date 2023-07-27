<script setup lang="ts">
import { todoType } from "staticData/todos";

import CustomSelect from "@/components/UI/Selects/CustomSelect.vue";

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
  <div>
    <CustomSelect
      :options="['sport', 'work', 'study', 'other']"
      :model-value="props.reactiveInputs.category"
      @update:model-value="
        (newValue) => emit('changeReactiveInputs', { category: newValue })
      "
      placeholder="description"
    />
  </div>
</template>

<style lang="css" scoped></style>
