import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD8lsktOgr4MUR8WhKszB8WTAgaUla4ckQ",
  authDomain: "crwn-db-625f1.firebaseapp.com",
  projectId: "crwn-db-625f1",
  storageBucket: "crwn-db-625f1.appspot.com",
  messagingSenderId: "909084226681",
  appId: "1:909084226681:web:a2121d589268138bf290a8",
  measurementId: "G-FD97VTSSMX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
