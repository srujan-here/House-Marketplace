import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Rm4m3lWiIhpGi5GKpNmeIWnw3Vxt_NY",
  authDomain: "house-market-place-103c2.firebaseapp.com",
  projectId: "house-market-place-103c2",
  storageBucket: "house-market-place-103c2.appspot.com",
  messagingSenderId: "1041974925443",
  appId: "1:1041974925443:web:e20f613460ea0b166de3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore();
