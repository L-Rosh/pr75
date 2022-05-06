import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBOni_0RRANEiXtibluo1lhqdsbZ0WlntU",
  authDomain: "pro75-21af7.firebaseapp.com",
  projectId: "pro75-21af7",
  storageBucket: "pro75-21af7.appspot.com",
  messagingSenderId: "664289385691",
  appId: "1:664289385691:web:553f704c1b58c882f3c0fe"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
