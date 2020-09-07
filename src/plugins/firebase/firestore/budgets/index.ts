import firebase from "@/plugins/firebase";
import { db } from "@/plugins/firebase/firestore";
import { CategoryBudget, CategoryBudgets, Budgets } from "@/state/budgets";

/**
 * カテゴリ予算のドキュメントから紐づくbudgetコレクションID(YYYYMM)を取得する
 * @param document
 */
const getYYYYMMFromCategoryBudgetDocument = (
  document: firebase.firestore.DocumentData
): string => {
  const matchList = document.ref.path.match(/budgets\/(\d+)\/categoryBudgets/);
  return matchList ? matchList[1] : "";
};

const budgetsDB = {
  // 指定月に紐づく予算情報
  get: async (uid: string, yyyymm: string): Promise<CategoryBudgets> => {
    const data: CategoryBudgets = {};
    const snapshot = (await db
      .collection("users")
      .doc(uid)
      .collection("budgets")
      .doc(yyyymm)
      .collection("categoryBudgets")
      .get()) as firebase.firestore.QuerySnapshot<CategoryBudget>;
    snapshot.forEach(function (doc) {
      data[doc.id] = doc.data();
    });
    return data;
  },
  // 全月の予算情報
  getAll: async (uid: string): Promise<Budgets> => {
    const snapshot = await db
      .collectionGroup("categoryBudgets")
      .where("userId", "==", uid)
      .get();
    const budgets: Budgets = {};
    snapshot.forEach((doc) => {
      const yyyymm = getYYYYMMFromCategoryBudgetDocument(doc);
      if (!budgets[yyyymm]) {
        budgets[yyyymm] = {
          categoryBudgets: {},
        };
      }
      if (!budgets[yyyymm].categoryBudgets[doc.id]) {
        budgets[yyyymm].categoryBudgets[doc.id] = doc.data() as CategoryBudget;
      }
    });
    return budgets;
  },
  // 月予算(全カテゴリ)の追加
  addMonthlyBudget: async ({
    uid,
    yyyymm,
    categoryBudgets,
  }: {
    uid: string;
    yyyymm: string;
    categoryBudgets: CategoryBudgets;
  }): Promise<void> => {
    const batch = db.batch();
    Object.entries(categoryBudgets).forEach(([id, budget]) => {
      const ref = db
        .collection("users")
        .doc(uid)
        .collection("budgets")
        .doc(yyyymm)
        .collection("categoryBudgets")
        .doc(id);
      batch.set(ref, budget);
    });
    await batch.commit();
  },
  // 月予算内の1カテゴリの変更
  update: async ({
    uid,
    yyyymm,
    budgetId,
    budget,
  }: {
    uid: string;
    yyyymm: string;
    budgetId: string;
    budget: CategoryBudget;
  }): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("budgets")
      .doc(yyyymm)
      .collection("categoryBudgets")
      .doc(budgetId)
      .set(budget);
  },
  // 月予算の削除
  delete: async (uid: string, yyyymm: string): Promise<void> => {
    const batch = db.batch();
    const categoryBudgets = await budgetsDB.get(uid, yyyymm);
    Object.entries(categoryBudgets).forEach(([id]) => {
      const ref = db
        .collection("users")
        .doc(uid)
        .collection("budgets")
        .doc(yyyymm)
        .collection("categoryBudgets")
        .doc(id);
      batch.delete(ref);
    });
    await batch.commit();
  },
};

export default budgetsDB;
