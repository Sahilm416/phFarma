import {collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
import { db } from "/config.js";

  export const addDocument = async (formData) => {
    try{
        const docRef = await addDoc(collection(db, "formData"), formData);
        console.log("Document written with ID: ", docRef.id);
        return true;
    }
    catch(e){
        console.log("error : " + e);
        return false;
    }
  };