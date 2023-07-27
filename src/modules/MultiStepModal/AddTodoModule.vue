<script setup lang="ts">
import { ref } from "vue";

import { todoType } from "staticData/todos";

import CustomModal from "@/components/UI/ModalWindows/CustomModal/CustomModal.vue";
import AddButton from "@/components/UI/Buttons/AddButton.vue";
import StepperForm from "@/modules/MultiStepModal/components/StepperForm.vue";

type Emits = {
  (event: "addTodo", todo: todoType): void;
};
const emit = defineEmits<Emits>();

const isShown = ref<boolean>(false);

const toggleIsShown = () => {
  isShown.value = !isShown.value;
};

const emitAddTodo = (todo: todoType) => {
  emit("addTodo", todo);
};
</script>

<template>
  <CustomModal :isShown="isShown" @toggleIsShown="toggleIsShown">
    <StepperForm @addTodo="emitAddTodo" @toggleIsShown="toggleIsShown" />
  </CustomModal>
  <AddButton @click="toggleIsShown" />
</template>

<style lang="css" scoped>
.inputs {
  @apply flex flex-col gap-5;
}
</style>
