import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null);
// const [user, setUser] = useState(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        auth,
        createUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;