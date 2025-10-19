import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading,setLoading] = useState(true)

    //! Creat User 
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //! Sign In User 
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    //! Sign Out
    const logOut = () => {
        return signOut(auth) 
        
    }

    //! Update Profile 
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser,updateData)
    }


    //! user observe feature . 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authData = {
        creatUser,
        user,
        logOut,
        signInUser,
        loading,
        updateUser,
    }



    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;