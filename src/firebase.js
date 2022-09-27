import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAkbI1_nAelkLbu7shkAc3ukV7BLB-xsJU",
    authDomain: "k-concept-d989f.firebaseapp.com",
    databaseURL: "https://k-concept-d989f-default-rtdb.firebaseio.com",
    projectId: "k-concept-d989f",
    storageBucket: "k-concept-d989f.appspot.com",
    messagingSenderId: "290537885422",
    appId: "1:290537885422:web:0cae4ff3edf068d1a8edff",
    measurementId: "G-JWWRGHLB6Y"
};
// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default FirebaseApp;
export { db };