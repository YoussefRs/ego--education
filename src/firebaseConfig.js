import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKKmXEaxB2itVx4FenQG7vbelSy3THrwg",
  authDomain: "ego-education-1c8f9.firebaseapp.com",
  projectId: "ego-education-1c8f9",
  storageBucket: "ego-education-1c8f9.appspot.com",
  messagingSenderId: "917333395940",
  appId: "1:917333395940:web:b4ee5ddcd2eec78a385ff1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);