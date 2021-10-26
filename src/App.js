import React, {useState, useEffect, createContext} from 'react';
import './App.css'
import {fire} from './firebase'
import Login from "./components/Login";
import Hero from "./components/Hero";

export const AuthContext = createContext(null);
const App = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const login =  () => {
        clearErrors();
         fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;


                }
            })
    };

    const singUp =  () => {
        clearErrors();
         fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;


                }
            })
    };

    const logOut =  () => {
         fire
            .auth()
            .signOut()
    };


    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user)
            } else {
                setUser(``)
            }
        })
    };

    useEffect(() => {
        authListener()
    }, [])
    return (
        <AuthContext.Provider value={
            {
                user,
                setUser,
                email,
                setEmail,
                password,
                setPassword,
                emailError,
                passwordError,
                login,
                singUp,
                hasAccount,
                setHasAccount,
                logOut
            }


        }>
            {user ? <Hero/> : <Login/>}


        </AuthContext.Provider>
    );
};

export default App;