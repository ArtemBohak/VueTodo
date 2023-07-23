import { FiltersType } from "@/components/UI/Selects/SelectFilter.vue";
import { todoType } from "staticData/todos";

export const filterTodos = (
  todos: todoType[],
  filter: FiltersType,
  subString: string = ""
) => {
  const helpFilter = (todo: todoType) => {
    return todo.text.toLowerCase().trim().includes(subString.toLowerCase().trim());
  };

  switch (filter) {
    case "all":
      return todos.filter((todo) => helpFilter(todo));
    case "completed":
      return todos.filter((todo) => todo.isChecked && helpFilter(todo));
    case "uncompleted":
      return todos.filter((todo) => !todo.isChecked && helpFilter(todo));
  }
};
