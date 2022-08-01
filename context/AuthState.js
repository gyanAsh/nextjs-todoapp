import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import React,{useEffect, useState} from 'react';
import {AuthContext} from './AuthContext';

const AuthState = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                setLoading(false);
            } else {
                setCurrentUser(null);
                setLoading(true);
            }
        })

        return unsubscribe;
    }, [])
    
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => signOut(auth);


    value = { currentUser, loading, signUp, signIn, logout };

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;