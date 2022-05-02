// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmS3ykvUKNABwuLBOHC8zl-B_19eejqvs",
  authDomain: "instagram-clone-1e64f.firebaseapp.com",
  projectId: "instagram-clone-1e64f",
  storageBucket: "instagram-clone-1e64f.appspot.com",
  messagingSenderId: "889225643119",
  appId: "1:889225643119:web:5ebbd328453db241d7b99a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};