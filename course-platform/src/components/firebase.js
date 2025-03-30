// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBxr1cQzNUdDhe45hhHZMtgoJlYXLLqtvY",
    authDomain: "orko-cf309.firebaseapp.com",
    projectId: "orko-cf309",
    storageBucket: "orko-cf309.firebasestorage.app",
    messagingSenderId: "286169203113",
    appId: "1:286169203113:web:96350e80d6b1725d5344b8",
    measurementId: "G-CHW3HJYCPJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };