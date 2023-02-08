import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHrOVn5umSkZYIGcsI2I9HlGq-WcEXN3o",
  authDomain: "ecommerce-votta.firebaseapp.com",
  projectId: "ecommerce-votta",
  storageBucket: "ecommerce-votta.appspot.com",
  messagingSenderId: "608336632014",
  appId: "1:608336632014:web:0a5dcf34301b61b0b3189f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);