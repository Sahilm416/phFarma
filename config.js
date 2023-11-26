import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrRjuwpYeW-fSkuPNMuTdjq626tqI9ggY",
  authDomain: "ph-farma.firebaseapp.com",
  projectId: "ph-farma",
  storageBucket: "ph-farma.appspot.com",
  messagingSenderId: "204511010332",
  appId: "1:204511010332:web:a251b58ca07ad7c15b89d9",
  measurementId: "G-6MGNHYB64J"
};
    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
