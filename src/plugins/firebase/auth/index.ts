import firebase from "@/plugins/firebase";

const googleProvider = new firebase.auth.GoogleAuthProvider();

const firebaseAuth = {
  onAuthStateChange: (
    onLogin: (user: firebase.User) => void,
    onLogout: () => void
  ): void => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        onLogin(user);
      } else {
        onLogout();
      }
    });
  },
  login: (): void => {
    // firebaseでGoogleログインを実行する
    firebase.auth().signInWithRedirect(googleProvider);
  },
};

export default firebaseAuth;
