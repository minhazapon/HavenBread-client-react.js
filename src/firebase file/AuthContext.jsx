import { createContext, useEffect, useState } from "react";

import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const fireContext = createContext(null)

       const glz = new GoogleAuthProvider()



const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
     

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       



    }

    const SignOn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const google = () =>{
        setLoading(true)
        return signInWithPopup(auth, glz)
    }

    const logOut = () =>{
        setLoading(true)
         return signOut(auth)

    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return() => {
            unSubscribe();
         }
    } , [])


    const authInfo = { user, createUser, SignOn, google, logOut, loading }
    
    return (
        <div>

            <fireContext.Provider value={authInfo}>
                 
                 {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;