import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_alHMlKdC4opshakDXiVkaRtCR_JXGt8",
  authDomain: "facebook-clone-9f50e.firebaseapp.com",
  projectId: "facebook-clone-9f50e",
  storageBucket: "facebook-clone-9f50e.appspot.com",
  messagingSenderId: "342057583904",
  appId: "1:342057583904:web:895daf54e1828325f14345",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
