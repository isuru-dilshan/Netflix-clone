import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyARmHbTYAzSebjRpgIeiQfshDzT_vyc2SY",
    authDomain: "netflix-clone-b9a58.firebaseapp.com",
    projectId: "netflix-clone-b9a58",
    storageBucket: "netflix-clone-b9a58.appspot.com",
    messagingSenderId: "753027446685",
    appId: "1:753027446685:web:c26526a831a2d45b4ae174"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;