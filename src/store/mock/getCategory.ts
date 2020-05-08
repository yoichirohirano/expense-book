export interface Expense {
  amount: number;
  category: string;
  // FirestoreのTimestamp型だけど取り急ぎ
  date: string;
  title: string;
}

const getCategory = () => {
  const response: Array<Expense> = [
    {
      category: "Food",
      amount: 300,
      date: "",
      title: "カフェ",
    },
  ];
  return response;
};
