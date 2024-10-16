// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3BeVnFUXRzmIL85VLoOba1w1IEU6LwWw",
  authDomain: "chatapp-1-9b0b9.firebaseapp.com",
  databaseURL:
    "https://chatapp-1-9b0b9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-1-9b0b9",
  storageBucket: "chatapp-1-9b0b9.appspot.com",
  messagingSenderId: "908240163889",
  appId: "1:908240163889:web:4df67a5b05757df3647110",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;
