import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBna0-kKEljz1Vuqve7O2wx1m9WzSCnQG0",
  authDomain: "productsproject2712.firebaseapp.com",
  projectId: "productsproject2712",
  storageBucket: "productsproject2712.firebasestorage.app",
  messagingSenderId: "723535194495",
  appId: "1:723535194495:web:d3d98094d2fc6aa42bd24a",
  databaseURL:
    "https://projectproduct-e5e17-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
