// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore, getDocs, collection } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWLrLhMSi9WRkr_fuhEBinkvt7C-6lV1k",
  authDomain: "thesis-systems.firebaseapp.com",
  projectId: "thesis-systems",
  storageBucket: "thesis-systems.appspot.com",
  messagingSenderId: "261429527891",
  appId: "1:261429527891:web:0f6fef0f636d00c51f0da6",
  measurementId: "G-P3TXN5T7V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);