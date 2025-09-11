// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYcgm0wRqecrjFVjsV3MF2QLdUuuCwoLU",
  authDomain: "abfitness-af1cc.firebaseapp.com",
  projectId: "abfitness-af1cc",
  storageBucket: "abfitness-af1cc.appspot.com",
  messagingSenderId: "392827676437",
  appId: "1:392827676437:web:386a433fffbeef99bdab1c"
};

// inicializa e exporta o app
export const app = initializeApp(firebaseConfig);
