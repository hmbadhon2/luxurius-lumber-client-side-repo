import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email, password)
   }

   const signin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password,);
   }

//    useEffect(()=>{
//     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
//           setUser(currentUser)
//           setLoading(false)
//       })
//       return ()=> unSubscribe()
//   },[])

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=> unSubscribe()
},[])

   const googleUser = (googleProvider) =>{
    return signInWithPopup(auth, googleProvider)
   }

   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}



    

    const authInfo = {

        createUser,
        signin,
        logOut,
        googleUser,
        user,
        loading,

    }

    return (
      <AuthContext.Provider value = {authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;