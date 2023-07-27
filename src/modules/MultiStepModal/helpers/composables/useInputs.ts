import { reactive } from "vue";

import { todoType } from "staticData/todos";

export type TodoDataType = Partial<todoType & { category: string }>;

export const useInputs = () => {
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

  return { reactiveInputs, changeReactiveInputs, resetReactiveInputs };
};
