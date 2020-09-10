import React, { useState } from "react";
import "./App.css";
import TopPage from "@/components/pages/TopPage";
import LoadingPage from "@/components/pages/LoadingPage";
import usersDB from "@/plugins/firebase/firestore/users";
import expensesDB from "@/plugins/firebase/firestore/expenses";
import budgetsDB from "@/plugins/firebase/firestore/budgets";
import categoriesDB from "@/plugins/firebase/firestore/categories";
import firebaseAuth from "@/plugins/firebase/auth";
import { useDispatch } from "react-redux";
import { loginActions } from "state/login";
import { expensesActions } from "@/state/expenses";
import { budgetsActions } from "@/state/budgets";
import { categoriesActions } from "@/state/categories";

function App(): JSX.Element {
  const dispatch = useDispatch();
  const [firebaseAccess, setFirebaseAccess] = useState<boolean>(false);

  const onLogin = async (user: firebase.User): Promise<void> => {
    dispatch(loginActions.login(user.uid));
    // 初回ログイン時はユーザを新規登録
    const userInfo = await usersDB.get(user.uid);
    if (!userInfo) {
      usersDB.add(user.uid);
    } else {
      // 2回目以降はFirestoreからexpenses,budget,categoryを取得
      const expenses = await expensesDB.get(user.uid);
      dispatch(expensesActions.updateAllExpensesFromFirestore(expenses));
      const budgets = await budgetsDB.getAll(user.uid);
      dispatch(budgetsActions.updateAllBudgetsFromFirestore(budgets));
      const categories = await categoriesDB.get(user.uid);
      dispatch(categoriesActions.updateAllCategoriesFromFirestore(categories));
    }
    setFirebaseAccess(true);
  };
  const onLogout = (): void => {
    // ログイン導線を表示
    dispatch(loginActions.logout());
  };

  firebaseAuth.onAuthStateChange(onLogin, onLogout);

  return (
    <div className="App">{firebaseAccess ? <TopPage /> : <LoadingPage />}</div>
  );
}

export default App;
