import firebase from "firebase"
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCqQRByWt4lIRQ00XU8E6hTLQjoT8RL60o",
  authDomain: "gamember-a5e8b.firebaseapp.com",
  projectId: "gamember-a5e8b",
  storageBucket: "gamember-a5e8b.appspot.com",
  messagingSenderId: "110369094882",
  appId: "1:110369094882:web:cd27ae05168e596d5cb2bb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;