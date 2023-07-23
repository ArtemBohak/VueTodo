<script setup lang="ts">
import { computed, ref } from "vue";

import { todos, todoType } from "../../../../staticData/todos";
import { useTodoStore } from "../../../store/TodoStore";
import { filterTodos } from "../../../helpers/FilterTodos";

import TodoListItem from "./TodoListItem.vue";
import AddButton from "../../UI/Buttons/AddButton.vue";
import AddTodoModal from "../../UI/ModalWindows/AddTodoModal.vue";

const todoStore = useTodoStore();

const reactiveTodos = ref<todoType[]>(todos);
const computedTodoList = computed(() =>
  filterTodos(reactiveTodos.value, todoStore.filter, todoStore.searchInputRef)
);

const addTodoHandle = (todo: todoType): void => {
  reactiveTodos.value.push(todo);
  closeModal();
};

const isShown = ref<boolean>(false);

const removeTodo = (id: string) => {
  reactiveTodos.value = reactiveTodos.value.filter((item) => item.id !== id);
};

const toggleIsChecked = (id: string) => {
  const todo = reactiveTodos.value.find((todo) => todo.id === id) as todoType;
  todo.isChecked = !todo.isChecked;
};

const closeModal = () => {
  isShown.value = false;
};
</script>

<template>
  <Transition name="todo-list-appear" appear>
    <TransitionGroup name="todo-list" class="todo-list" tag="ul">
      <TodoListItem
        @toggleIsChecked="toggleIsChecked"
        @removeTodo="removeTodo"
        v-for="todo of computedTodoList"
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
  @apply flex justify-center items-center flex-col mt-12 relative;
}

.todo-list-move,
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
}

.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  /* transform: translateX(150px); */
}

.todo-list-leave-active {
  position: absolute;
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
