// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgCI-YduaAjftPknc6N_XPqJlSabd6ttY",
    authDomain: "pgc-2u.firebaseapp.com",
    databaseURL: "https://pgc-2u.firebaseio.com",
    projectId: "pgc-2u",
    storageBucket: "pgc-2u.appspot.com",
    messagingSenderId: "631917577865",
    appId: "1:631917577865:web:6aa7273b47352b3b266858",
    measurementId: "G-QSYFMCPZKL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;