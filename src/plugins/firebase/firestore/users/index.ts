import firebase from "@/plugins/firebase";
import { db } from "@/plugins/firebase/firestore";

export interface User extends firebase.firestore.DocumentData {
  createdAt: string;
  expenses?: Record<string, any>;
  budgets?: Record<string, any>;
  categories?: Record<string, any>;
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
