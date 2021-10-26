import firebase from "firebase/compat";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADjG6wEJdipLKXaCjAjN2jHbYrTDKJtXM",
    authDomain: "login-react-firebas.firebaseapp.com",
    projectId: "login-react-firebas",
    storageBucket: "login-react-firebas.appspot.com",
    messagingSenderId: "399713660017",
    appId: "1:399713660017:web:b601711d6570aa56d67fd0"
};

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);