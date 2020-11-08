import firebase from "firebase/app";


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_qkgMMFr9lyKBYj9HLFRwdzqEGG-VCGw",
  authDomain: "algo-station.firebaseapp.com",
  databaseURL: "https://algo-station.firebaseio.com",
  projectId: "algo-station",
  storageBucket: "algo-station.appspot.com",
  messagingSenderId: "706562680358",
  appId: "1:706562680358:web:41399bf1cffea0b3b468e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DATABASE
var db = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
// var storageRef = storage.ref();

// export {db, storage, storageRef}
export default firebase;