// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7AjiOaesnrGEPjgkOJZXin_KPCz4nC3o",
  authDomain: "en-corto-c2d82.firebaseapp.com",
  projectId: "en-corto-c2d82",
  storageBucket: "en-corto-c2d82.appspot.com",
  messagingSenderId: "215788878073",
  appId: "1:215788878073:web:95baf2e60eca42a2100a28",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export const storage = getStorage(firebase);
