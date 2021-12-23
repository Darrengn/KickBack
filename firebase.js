// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoyEo5Y2q-m3fi0lVtZyDqzORx6td5HnQ",
  authDomain: "kickback-firebase-91a80.firebaseapp.com",
  projectId: "kickback-firebase-91a80",
  storageBucket: "kickback-firebase-91a80.appspot.com",
  messagingSenderId: "106469223703",
  appId: "1:106469223703:web:753153da691a0a1ab1db52"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}
const auth = firebase.auth()
export { auth };