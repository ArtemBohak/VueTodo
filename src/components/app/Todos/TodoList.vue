<script setup lang="ts">
import { ref } from "vue";

import { todos, todoType } from "../../../../staticData/todos";

import TodoListItem from "./TodoListItem.vue";
import AddButton from "../../UI/Buttons/AddButton.vue";
import AddTodoModal from "../../UI/ModalWindows/AddTodoModal.vue";

// type Props = {
//   searchFilter:
// }

const reactiveTodos = ref<todoType[]>(todos);
const addTodoHandle = (todo: todoType): void => {
  reactiveTodos.value.push(todo);
};

const isShown = ref<boolean>(false);

const removeTodo = (id: string) => {
  reactiveTodos.value = reactiveTodos.value.filter((item) => item.id !== id);
};

const closeModal = () => {
  isShown.value = false;
};
</script>

<template>
  <Transition name="todo-list-appear" appear>
    <TransitionGroup name="todo-list" class="todo-list" tag="ul">
      <TodoListItem
        @removeTodo="removeTodo"
        v-for="todo of reactiveTodos"
        :key="todo.id"
        :todo="todo"
      />
    </TransitionGroup>
  </Transition>
  <AddButton @click="isShown = !isShown" />
  <AddTodoModal
    @addTodo="addTodoHandle"
    @closeModal="closeModal"
    :isShown="isShown"
  />
</template>

<style scoped>
.todo-list {
  @apply flex justify-center items-center flex-col mt-12;
}

.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.5s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.todo-list-appear-enter-active,
.todo-list-appear-leave-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.todo-list-appear-enter-from,
.todo-list-appear-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
</style>
