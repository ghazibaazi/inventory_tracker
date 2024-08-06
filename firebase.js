// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8vjGFB2lgdutQir5wCs0ippKWgdyfO70",
  authDomain: "inventory-tracker-4b6af.firebaseapp.com",
  projectId: "inventory-tracker-4b6af",
  storageBucket: "inventory-tracker-4b6af.appspot.com",
  messagingSenderId: "80123862824",
  appId: "1:80123862824:web:823415498a54483f34ba1d",
  measurementId: "G-9SL224N0D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { firestore, auth };
