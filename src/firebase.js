import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_8wciCHok4mncm8Uw8AOHrcuJZxqP588",
  authDomain: "phms-iot.firebaseapp.com",
  projectId: "phms-iot",
  storageBucket: "phms-iot.appspot.com",
  messagingSenderId: "635218672891",
  appId: "1:635218672891:web:7162936449c188482c045e",
  measurementId: "G-ZML9CKM1VR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage };
