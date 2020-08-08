import React from "react";
import "./App.css";
import TopPage from "@/components/pages/TopPage";
import usersDB from "@/plugins/firebase/firestore/users";
import expensesDB from "@/plugins/firebase/firestore/expenses";
import firebaseAuth from "@/plugins/firebase/auth";
import { useDispatch } from "react-redux";
import { loginActions } from "state/login";
import { expensesActions } from "state/expenses";

function App(): JSX.Element {
  const dispatch = useDispatch();

  const onLogin = async (user: firebase.User): Promise<void> => {
    dispatch(loginActions.login(user.uid));
    // 初回ログイン時はユーザを新規登録
    const userInfo = await usersDB.get(user.uid);
    if (!userInfo) {
      usersDB.add(user.uid);
    } else {
      // 2回目以降はexpenses,budget,categoryを取得
      const expenses = await expensesDB.get(user.uid);
      dispatch(expensesActions.updateAllExpensesFromFirestore(expenses));
    }
  };
  const onLogout = (): void => {
    // ログイン導線を表示
    dispatch(loginActions.logout());
  };

  firebaseAuth.onAuthStateChange(onLogin, onLogout);

  return (
    <div className="App">
      <TopPage />
    </div>
  );
}

export default App;
