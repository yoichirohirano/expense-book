import firebase from "@/plugins/firebase";
import { db } from "@/plugins/firebase/firestore";
import { Expense } from "state/expenses";
import { CategoryBudgets } from "state/budgets";
import { Category } from "state/categories";

export interface User extends firebase.firestore.DocumentData {
  createdAt: string;
  expenses?: Record<string, Expense>;
  budgets?: Record<string, CategoryBudgets>;
  categories?: Record<string, Category>;
}

export const userRef = (uid: string): firebase.firestore.DocumentReference => {
  return db.collection("users").doc(uid);
};

const usersDB = {
  add: async (uid: string): Promise<string> => {
    await userRef(uid).set({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return uid;
  },
  get: async (uid: string): Promise<User | undefined> => {
    const doc = await userRef(uid).get();
    const data = doc.data() as User | undefined;
    return data;
  },
};

export default usersDB;
