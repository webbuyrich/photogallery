// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIM8d3i92-nJsh67wG7uGuyFLWpnF-P9c",
  authDomain: "photogallery-56684.firebaseapp.com",
  projectId: "photogallery-56684",
  storageBucket: "photogallery-56684.appspot.com",
  messagingSenderId: "978393367338",
  appId: "1:978393367338:web:4522bc5f979560ed9a1453"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore}
