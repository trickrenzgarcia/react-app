import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQ730nxCldvygERBecbzzcWnbgrM7FY-o",
  authDomain: "instagram-clone-fbe14.firebaseapp.com",
  databaseURL: "https://instagram-clone-fbe14.firebaseio.com",
  projectId: "instagram-clone-fbe14",
  storageBucket: "instagram-clone-fbe14.appspot.com",
  messagingSenderId: "262618917319",
  appId: "1:262618917319:web:0c370c10eba08f3f3411e2",
  measurementId: "G-16H6SVY5JV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

