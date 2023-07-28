<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

import { todoType } from "staticData/todos";
import { useTodoModalInputs } from "./helpers/composables/useTodoModalInputs";

import CustomModal from "@/components/UI/ModalWindows/CustomModal/CustomModal.vue";
import OpenModalButton from "@/components/UI/Buttons/OpenModalButton.vue";
import StepperForm from "@/modules/MultiStepModal/components/StepperForm.vue";
import Steps from "./components/Steps/Steps.vue";

type Emits = {
  (event: "addTodo", todo: todoType): void;
};
const emit = defineEmits<Emits>();

const isShown = ref<boolean>(false);
const { reactiveInputs, changeReactiveInputs, resetReactiveInputs } =
  useTodoModalInputs();

const toggleIsShown = () => {
  isShown.value = !isShown.value;
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
      @onSubmit="onSubmitHandle"
      v-slot="slotProps"
    >
      <Steps
        :currentStepIndex="slotProps.currentStepIndex"
        :reactiveInputs="reactiveInputs"
        @changeReactiveInputs="changeReactiveInputs"
      />
    </StepperForm>
  </CustomModal>
  <OpenModalButton @click="toggleIsShown" />
</template>

<style lang="css" scoped></style>
