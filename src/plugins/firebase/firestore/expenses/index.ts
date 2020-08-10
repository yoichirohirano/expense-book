import firebase from "@/plugins/firebase";
import { db } from "@/plugins/firebase/firestore";
import { Expense, Expenses } from "@/state/expenses";

export type FirestoreExpense = {
  amount: number;
  category: {
    id: string;
    name: string;
  };
  date: firebase.firestore.Timestamp;
  dateStr: string;
  name: string;
};

const expensesDB = {
  get: async (uid: string): Promise<Expenses> => {
    const data: Expenses = {};
    const snapshot = (await db
      .collection("users")
      .doc(uid)
      .collection("expenses")
      .get()) as firebase.firestore.QuerySnapshot<FirestoreExpense>;
    snapshot.forEach(function (doc) {
      // Timestamp型→Date型置換
      const docData = doc.data();
      const date = docData.date.toDate();
      data[doc.id] = Object.assign<Expense, FirestoreExpense, { date: Date }>(
        {} as Expense,
        docData,
        {
          date: date,
        }
      );
    });
    return data;
  },
  add: async (uid: string, expense: Expense): Promise<void> => {
    await db.collection("users").doc(uid).collection("expenses").add(expense);
  },
  update: async (
    uid: string,
    expense: Expense,
    expenseId: string
  ): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("expenses")
      .doc(expenseId)
      .set(expense);
  },
  delete: async (uid: string, expenseId: string): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("expenses")
      .doc(expenseId)
      .delete();
  },
};

export default expensesDB;
