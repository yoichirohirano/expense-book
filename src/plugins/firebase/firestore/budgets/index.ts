import firebase from "@/plugins/firebase";
import { db } from "@/plugins/firebase/firestore";
import {
  Budget,
  Budgets,
  BudgetCollection,
  BudgetsCollection,
} from "@/state/budgets";

// export type FirestoreExpense = {
//   amount: number;
//   category: {
//     id: string;
//     name: string;
//   };
//   date: firebase.firestore.Timestamp;
//   dateStr: string;
//   name: string;
// };

const budgetsDB = {
  // 指定月に紐づく予算情報
  get: async (uid: string, yyyymm: string): Promise<BudgetCollection> => {
    const data: BudgetCollection = {};
    const snapshot = (await db
      .collection("users")
      .doc(uid)
      .collection("budgets")
      .doc(yyyymm)
      .collection("budget")
      .get()) as firebase.firestore.QuerySnapshot<Budget>;
    snapshot.forEach(function (doc) {
      data[doc.id] = doc.data();
    });
    return data;
  },
  // 全月の予算情報
  getAll: async (uid: string): Promise<Budgets> => {
    const getRegisteredMonths = async (): Promise<Array<string>> => {
      const list: Array<string> = [];
      const snapshot = (await db
        .collection("users")
        .doc(uid)
        .collection("budgets")
        .get()) as firebase.firestore.QuerySnapshot<Budgets>;
      snapshot.forEach(function (doc) {
        list.push(doc.id);
      });
      return list;
    };
    const yyyymmList = await getRegisteredMonths();
    const budgetsData: Budgets = {};

    // 月ごとのbudgetのコレクションのsnapshotを全て取得
    ((await Promise.all(
      yyyymmList.map(async (yyyymm) => {
        return await db
          .collection("users")
          .doc(uid)
          .collection("budgets")
          .doc(yyyymm)
          .collection("budget")
          .get();
      })
    )) as Array<firebase.firestore.QuerySnapshot<Budget>>)
      // 月ごとのbudgetの情報を配列にして取得
      .map(
        (snapshot): BudgetCollection => {
          const data: BudgetCollection = {};
          snapshot.forEach(function (doc) {
            data[doc.id] = doc.data();
          });
          return data;
        }
      )
      // Budgets型にまとめて返却
      .forEach((data, index): void => {
        budgetsData[yyyymmList[index]] = {
          budget: data,
        };
      });
    return budgetsData;
  },
  // 月予算(全カテゴリ)の追加
  add: async (
    uid: string,
    budget: BudgetCollection,
    yyyymm: string
  ): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("budgets")
      .doc(yyyymm)
      .collection("budget")
      // TODO: だめだ、カテゴリ分ぶん回して、budget内のドキュメントを追加しないと。
      .add(budget);
  },
  // 月予算内の1カテゴリの変更
  update: async (
    uid: string,
    yyyymm: string,
    budget: Budget,
    budgetId: string
  ): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("budgets")
      .doc(yyyymm)
      .collection("budget")
      .doc(budgetId)
      .set(budget);
  },
  // 月予算の削除
  delete: async (uid: string, yyyymm: string): Promise<void> => {
    await db
      .collection("users")
      .doc(uid)
      .collection("budgets")
      .doc(yyyymm)
      .delete();
  },
};

export default budgetsDB;
