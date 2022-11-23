import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { AuthContext } from 'd:/projects/doctors-portal/src/context/authprovider';
import app from '../FIrebase/Firebase.config';

export const authContext = createContext();
const auth = getAuth(app);

const AutoProvider = ({children}) => {
    const {user, setUser} = useState('');
    const {loading, setLoading} = useState(true)

   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(email, password, auth)
   }

   const signin = (email, password) =>{
    return signInWithEmailAndPassword(email, password,auth);
   }

   const googleUser = (googleProvider) =>{
    return signInWithPopup(auth, googleProvider)
   }

   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{

 const unSubscribe=onAuthStateChanged(auth, 
    currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false)
    })
 return ()=> {
    return unSubscribe()
}
},[])



    

    const authInfo = {

        createUser,
        signin,
        logOut,
        googleUser,
        user,
        loading,

    }

    return (
       <AuthContext.Provider value={authInfo}
        >
             {children}
        </AuthContext.Provider>
    );
};

export default AutoProvider;