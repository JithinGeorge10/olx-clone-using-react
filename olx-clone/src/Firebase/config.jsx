import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBkTU08Z_qy0QqLfNnIlXTypZcRArziUEo",
  authDomain: "olx-clone-c1a6a.firebaseapp.com",
  projectId: "olx-clone-c1a6a",
  storageBucket: "olx-clone-c1a6a.appspot.com",
  messagingSenderId: "161852957778",
  appId: "1:161852957778:web:57af899a7cb4344ae0ab8b",
  measurementId: "G-7Q5S5C9S4F"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

//config and export in main.js no need to wrap then go to signup page and get from firebase/auth