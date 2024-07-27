import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBuQX9EwVAJydbuVtsDDbge6KszYQUQqVs",
    authDomain: "login-page-ba24d.firebaseapp.com",
    projectId: "login-page-ba24d",
    storageBucket: "login-page-ba24d.appspot.com",
    messagingSenderId: "1089556786899",
    appId: "1:1089556786899:web:462466375f1799b0eeee26"
  };


export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);