import { createContext } from "react";

import auth from "./firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const fireContext = createContext(null)



const AuthContext = ({children}) => {
     

    const createUser = (email, password) => {
      
        return createUserWithEmailAndPassword(auth, email, password)

    }
    

    const authInfo = { createUser  }
    
    return (
        <div>

            <fireContext.Provider value={authInfo}>
                 
                 {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;