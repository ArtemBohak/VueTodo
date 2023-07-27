<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";

import { todoType } from "staticData/todos";
import useStepper from "../helpers/composables/useStepper";

import DumbButton from "@/components/UI/Buttons/DumbButton.vue";
import FirstStep from "./Steps/FirstStep.vue";
import SecondStep from "./Steps/SecondStep.vue";
import ThirdStep from "./Steps/ThirdStep.vue";

type Emits = {
  (event: "addTodo", todo: todoType): void;
  (event: "toggleIsShown"): void;
};
const emit = defineEmits<Emits>();

const { steps, goBack, goNext, currentStepIndex } = useStepper([1, 2, 3]);

const reactiveInputs = reactive({
  todoText: "",
  todoDate: "",
  category: "",
});

const changeReactiveInputs = (
  todoData: Partial<todoType & { category: string }>
) => {
  reactiveInputs.category = todoData.category || reactiveInputs.category;
  reactiveInputs.todoText = todoData.text || reactiveInputs.todoText;
  reactiveInputs.todoDate = todoData.date || reactiveInputs.todoDate;
};

const resetReactiveInputs = () => {
  reactiveInputs.category = "";
  reactiveInputs.todoText = "";
  reactiveInputs.category = "";
};

const onSubmitHandle = () => {
  const id = uuidv4();
  emit("addTodo", {
    id: id,
    isChecked: false,
    date: reactiveInputs.todoDate,
    text: reactiveInputs.todoText,
    category: reactiveInputs.category,
  });
  emit("toggleIsShown");
  resetReactiveInputs();
};
</script>

<template>
  <form @submit.prevent="onSubmitHandle">
    <h1>{{ currentStepIndex }} / {{ steps.length }}</h1>
    <div class="modal-step">
      <FirstStep
        @changeReactiveInputs="changeReactiveInputs"
        :reactiveInputs="reactiveInputs"
        v-if="currentStepIndex === 1"
      />
      <SecondStep
        @changeReactiveInputs="changeReactiveInputs"
        :reactiveInputs="reactiveInputs"
        v-if="currentStepIndex === 2"
      />
      <ThirdStep
        @changeReactiveInputs="changeReactiveInputs"
        :reactiveInputs="reactiveInputs"
        v-if="currentStepIndex === 3"
      />
    </div>

    <div class="dumb-buttons">
      <DumbButton
        type="button"
        v-if="currentStepIndex !== 1"
        title="Back"
        @click="goBack"
      />
      <!-- <DumbButton
        :type="currentStepIndex === 3 ? 'submit' : 'button'"
        :title="currentStepIndex >= 3 ? 'Add' : 'Next'"
        @click="currentStepIndex !== 3 && goNext()"
      /> -->
      <DumbButton
        type="button"
        v-if="currentStepIndex !== 3"
        @click="goNext"
        title="Next"
      />
      <DumbButton type="submit" v-if="currentStepIndex === 3" title="Add" />
    </div>
  </form>
</template>

<style lang="css" scoped>
.dumb-buttons {
  @apply flex flex-row w-full gap-5;
}

form {
  @apply flex flex-col justify-between h-full;
}
</style>
