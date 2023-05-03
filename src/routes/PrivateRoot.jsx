import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoot = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user ekhon private roote ase', user);
    if(loading){
        return <progress className="progress w-1/2 mt-10 text-center mx-auto"></progress>;
    }
    if (user){
        return children ;
    }
    return <Navigate state={{from: location}} to='login' replace></Navigate>
};

export default PrivateRoot;