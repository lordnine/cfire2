import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA0tIbd9J_gR8fbS2mT9B8EvIvxv7-8kw4",
  authDomain: "rn-cfire2.firebaseapp.com",
  databaseURL: "https://rn-cfire2-default-rtdb.firebaseio.com",
  projectId: "rn-cfire2",
  storageBucket: "rn-cfire2.appspot.com",
  messagingSenderId: "20319303910",
  appId: "1:20319303910:web:3baad25744621f3508a327"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// reference to the authorization features


// export const firebaseAuth = firebase.auth();