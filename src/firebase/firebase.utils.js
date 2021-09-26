import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyD_oZOOAnF-zsu6WZnSu7C5wn_VSSOQE4M",
  authDomain: "clothing-shop-f9096.firebaseapp.com",
  projectId: "clothing-shop-f9096",
  storageBucket: "clothing-shop-f9096.appspot.com",
  messagingSenderId: "922072772581",
  appId: "1:922072772581:web:183707cd2935fc2012090c",
  measurementId: "G-9QNVSBLSFB"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase