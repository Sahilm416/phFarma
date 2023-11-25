import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey:"AIzaSyBpmWDkwcgkUWDASIaiuLNg7FuG2lWmXxU",
    authDomain: "farma-80b4f.firebaseapp.com",
    projectId: "farma-80b4f",
    storageBucket: "farma-80b4f.appspot.com",
    messagingSenderId: "679697403307",
    appId: "1:679697403307:web:e191e2f6be14bc9d0f16ee"
  };

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);