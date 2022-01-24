import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAt0Fj0TFF5kuPvz9JP63XNIW4bXWimXDw",
    authDomain: "react-c4e51.firebaseapp.com",
    projectId: "react-c4e51",
    storageBucket: "react-c4e51.appspot.com",
    messagingSenderId: "846510531869",
    appId: "1:846510531869:web:7b55e7e14644c7bd2dadf4",
    measurementId: "G-2CQLLZ09BQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };