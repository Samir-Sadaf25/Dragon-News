import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { useLocation } from 'react-router';
export const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
   
    const updateUser = (updatedUser) =>{
        return updateProfile(auth.currentUser,updatedUser);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () =>{
        return signOut(auth)
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser
    }
    console.log(user);
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;