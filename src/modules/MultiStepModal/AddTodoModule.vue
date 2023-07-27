<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

import { todoType } from "staticData/todos";
import { useInputs } from "./helpers/composables/useInputs";

import CustomModal from "@/components/UI/ModalWindows/CustomModal/CustomModal.vue";
import OpenModalButton from "@/components/UI/Buttons/OpenModalButton.vue";
import StepperForm from "@/modules/MultiStepModal/components/StepperForm.vue";
import Steps from "./components/Steps/Steps.vue";

type Emits = {
  (event: "addTodo", todo: todoType): void;
};
const emit = defineEmits<Emits>();

const isShown = ref<boolean>(false);
const currentStepIndex = ref<number>(1);
const { reactiveInputs, changeReactiveInputs, resetReactiveInputs } =
  useInputs();

const toggleIsShown = () => {
  isShown.value = !isShown.value;
};

const changeCurrentStepIndex = (step: number) => {
  currentStepIndex.value = step;
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
  toggleIsShown();
  resetReactiveInputs();
};
</script>

<template>
  <CustomModal :isShown="isShown" @toggleIsShown="toggleIsShown">
    <StepperForm
      :isValid="false"
      :stepsLength="3"
      @changeCurrentStepIndex="changeCurrentStepIndex"
      @onSubmit="onSubmitHandle"
    >
      <Steps
        :reactiveInputs="reactiveInputs"
        :currentStepIndex="currentStepIndex"
        @changeReactiveInputs="changeReactiveInputs"
      />
    </StepperForm>
  </CustomModal>
  <OpenModalButton @click="toggleIsShown" />
</template>

<style lang="css" scoped></style>
