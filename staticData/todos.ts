export const todos: todoType[] = [
  {
    id: "1",
    text: "Working out",
    date: "25-07-2023",
    isChecked: true,
    category: 'sport'
  },
  {
    id: "2",
    text: "Studying",
    date: "22-07-2023",
    isChecked: true,
    category: 'study'
  },
  {
    id: "3",
    text: "Going to the post",
    date: "25-07-2023",
    isChecked: false,
    category: 'other'
  },
  {
    id: "4",
    text: "Shopping",
    date: "22-07-2023",
    isChecked: true,
    category: 'other'
  },
  {
    id: "5",
    text: "Sleeping",
    date: "25-07-2023",
    isChecked: false,
    category: 'other'
  },
  {
    id: "6",
    text: "Eating",
    date: "22-07-2023",
    isChecked: true,
    category: 'other'
  },
];

export type todoType = {
  id: string;
  text: string;
  date: string;
  isChecked: boolean;
  category: string;
};
