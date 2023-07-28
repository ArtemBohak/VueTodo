<script setup lang="ts">
import { TodoDataType } from "../../helpers/composables/useTodoModalInputs";

import FirstStep from "./FirstStep.vue";
import SecondStep from "./SecondStep.vue";
import ThirdStep from "./ThirdStep.vue";

type Props = {
  currentStepIndex: number;
  reactiveInputs: {
    todoText: string;
    todoDate: string;
    category: string;
  };
};
const props = defineProps<Props>();
type Emits = {
  (event: "changeReactiveInputs", todoData: TodoDataType): void;
};
const emit = defineEmits<Emits>();
const emitOnChangeHandle = (todoData: TodoDataType) => {
  emit("changeReactiveInputs", todoData);
};
</script>

<template>
  <div>
    <FirstStep
      @changeReactiveInputs="emitOnChangeHandle"
      :reactiveInputs="props.reactiveInputs"
      v-if="props.currentStepIndex === 1"
    />
    <SecondStep
      @changeReactiveInputs="emitOnChangeHandle"
      :reactiveInputs="props.reactiveInputs"
      v-if="props.currentStepIndex === 2"
    />
    <ThirdStep
      @changeReactiveInputs="emitOnChangeHandle"
      :reactiveInputs="props.reactiveInputs"
      v-if="currentStepIndex === 3"
    />
  </div>
</template>

<style lang="css" scoped></style>
