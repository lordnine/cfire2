

import Firebase from 'firebase';


let config = {
    apiKey: "AIzaSyA0tIbd9J_gR8fbS2mT9B8EvIvxv7-8kw4",
    authDomain: "rn-cfire2.firebaseapp.com",
    databaseURL: "https://rn-cfire2-default-rtdb.firebaseio.com",
    projectId: "rn-cfire2",
    storageBucket: "rn-cfire2.appspot.com",
    messagingSenderId: "20319303910",
    appId: "1:20319303910:web:9a56417a1bd2bd0b08a327"
  };

let app = Firebase.initializeApp(config);
export const db = app.database();
export const auth = Firebase.auth();

// reference to the authorization features


// export const firebaseAuth = firebase.auth();