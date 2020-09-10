import firebase from "@/plugins/firebase";
import { db } from "@/plugins/firebase/firestore";
import { Category, Categories } from "@/state/categories";

const categoriesDB = {
  get: async (uid: string): Promise<Categories> => {
    const data: Categories = {};
    const snapshot = (await db
      .collection("users")
      .doc(uid)
      .collection("categories")
      .get()) as firebase.firestore.QuerySnapshot<Category>;
    snapshot.forEach(function (doc) {
      data[doc.id] = doc.data();
    });
    return data;
  },
  add: async (
    uid: string,
    category: Category,
    categoryId: string
  ): Promise<string> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("categories")
      .doc(categoryId)
      .set(category);
    return categoryId;
  },
  update: async (
    uid: string,
    category: Category,
    categoryId: string
  ): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("categories")
      .doc(categoryId)
      .set(category);
  },
  delete: async (uid: string, categoryId: string): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("categories")
      .doc(categoryId)
      .delete();
  },
};

export default categoriesDB;
