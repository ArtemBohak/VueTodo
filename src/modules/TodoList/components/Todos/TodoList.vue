<script setup lang="ts">
import { computed, ref } from "vue";

import { todos, todoType } from "../../../../../staticData/todos";
import { filterTodos } from "../../helpers/FilterTodos";
import { FiltersType } from "../../../../components/UI/Selects/CustomSelect.vue";

import TodoListItem from "./TodoListItem.vue";
import AddTodoModal from "../../../MultiStepModal/AddTodoModule.vue";

type Props = {
  filter: FiltersType;
  searchInputRef: string;
};
const props = withDefaults(defineProps<Props>(), {
  filter: "all",
  searchInputRef: "",
});

const reactiveTodos = ref<todoType[]>(todos);

const computedTodoList = computed(() =>
  filterTodos(reactiveTodos.value, props.filter, props.searchInputRef)
);

const removeTodo = (id: string) => {
  reactiveTodos.value = reactiveTodos.value.filter((item) => item.id !== id);
};

const addTodo = (todo: todoType) => {
  reactiveTodos.value.push(todo);
};

const toggleIsChecked = (id: string) => {
  const todo = reactiveTodos.value.find((todo) => todo.id === id) as todoType;
  todo.isChecked = !todo.isChecked;
};
</script>

<template>
  <Transition name="todo-list-appear" appear>
    <TransitionGroup name="todo-list" class="todo-list" tag="ul">
      <TodoListItem
        v-for="todo of computedTodoList"
        @toggleIsChecked="toggleIsChecked"
        @removeTodo="removeTodo"
        :key="todo.id"
        :todo="todo"
      />
    </TransitionGroup>
  </Transition>
  <AddTodoModal @addTodo="addTodo" />
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
