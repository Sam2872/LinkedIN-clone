import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_wPkWxXWXc3_dUt92b8S_Ppni7C2G8Y4",
  authDomain: "linkedin-clone-85714.firebaseapp.com",
  projectId: "linkedin-clone-85714",
  storageBucket: "linkedin-clone-85714.appspot.com",
  messagingSenderId: "740119061534",
  appId: "1:740119061534:web:e638c2236364e33b643a0f"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth;
 


  export {db, auth};