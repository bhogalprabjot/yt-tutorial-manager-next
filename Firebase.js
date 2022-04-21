import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6q_sAA3jRRgL7Us0xE5Nfv8Zug9T87dg",
    authDomain: "yt-learning-9c8ad.firebaseapp.com",
    projectId: "yt-learning-9c8ad",
    storageBucket: "yt-learning-9c8ad.appspot.com",
    messagingSenderId: "532275076037",
    appId: "1:532275076037:web:a19e4581b12e22fd5ac9ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
