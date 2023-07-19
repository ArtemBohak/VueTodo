export const todos: todoType[] = [
  {
    id: "1",
    text: "Work out",
    date: "25-07-2023",
    isChecked: false,
  },
  {
    id: "2",
    text: "Study",
    date: "22-07-2023",
    isChecked: true,
  },
];

export type todoType = {
  id: string;
  text: string;
  date: string;
  isChecked: boolean;
};
