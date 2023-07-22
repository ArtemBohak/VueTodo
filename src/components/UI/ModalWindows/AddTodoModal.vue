<script setup lang="ts">
import { ref, Transition } from "vue";
import { v4 as uuidv4 } from "uuid";

import { todoType } from "staticData/todos";

import AddTodoInput from "../Inputs/AddTodoInput.vue";
import AddTodoDate from "../Inputs/AddTodoDate.vue";
import SubmitTodoButton from "../Forms/SubmitTodoButton.vue";

type Props = { isShown: boolean };
type Emits = {
  (event: "closeModal"): void;
  (event: "addTodo", value: todoType): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const todoText = ref<string>("");
const todoDate = ref<string>("");

const outerModalClick = (e: Event) => {
  if (e.target === e.currentTarget) {
    emit("closeModal");
  }
};

const onSubmitHandle = () => {
  const id = uuidv4();
  emit("addTodo", {
    id: id,
    isChecked: false,
    date: todoDate.value,
    text: todoText.value,
  });
};
</script>

<template>
  <Teleport to="#modal">
    <Transition name="fade">
      <div @click="outerModalClick" v-if="props.isShown" class="modal-outer">
        <form class="modal-inner" @submit.prevent="onSubmitHandle">
          <div class="inputs">
            <AddTodoInput v-model="todoText" />
            <AddTodoDate v-model="todoDate" />
          </div>
          <SubmitTodoButton>Add</SubmitTodoButton>
        </form>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="css" scoped>
.modal-outer {
  @apply absolute z-10 w-full h-full bg-black-rgba;
}
.modal-inner {
  @apply bg-gradient-to-b from-orange-700 via-70% via-orange-800 to-orange-800 absolute top-[20%] left-1/3 h-2/3 w-1/3 z-50 rounded-md p-3 flex flex-col justify-between;
}

.inputs {
  @apply flex flex-col gap-5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
