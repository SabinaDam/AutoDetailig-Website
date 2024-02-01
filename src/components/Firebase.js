import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig =({
  apiKey: "AIzaSyD1li_lg6y5EfA7kSrD7nKKz2vY5VmWrE0",
  authDomain: "jd-autoteknik.firebaseapp.com",
  projectId: "jd-autoteknik",
  storageBucket: "jd-autoteknik.appspot.com",
  messagingSenderId: "658879105504",
  appId: "1:658879105504:web:4c1b9602144ce382374385"
});

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { auth, db };
