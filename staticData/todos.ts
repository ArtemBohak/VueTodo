export const todos: todoType[] = [
  {
    text: "Work out",
    date: "25-07-2023",
  },
  {
    text: "Study",
    date: "22-07-2023",
  },
];

type Human = todoType & {
  
}

export type todoType = { text: string; date: string };
