import firebase from "firebase";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqQRByWt4lIRQ00XU8E6hTLQjoT8RL60o",
  authDomain: "gamember-a5e8b.firebaseapp.com",
  projectId: "gamember-a5e8b",
  storageBucket: "gamember-a5e8b.appspot.com",
  messagingSenderId: "110369094882",
  appId: "1:110369094882:web:cd27ae05168e596d5cb2bb"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCx5JOmSMY7O2sVU0H9FpLptTUVcUPhJ7k",
//   authDomain: "gamember-dcdc5.firebaseapp.com",
//   databaseURL: "https://gamember-dcdc5-default-rtdb.firebaseio.com",
//   projectId: "gamember-dcdc5",
//   storageBucket: "gamember-dcdc5.appspot.com",
//   messagingSenderId: "1055219531147",
//   appId: "1:1055219531147:web:cda815a8e1dc1f68d7838e"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;