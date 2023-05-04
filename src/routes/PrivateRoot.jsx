// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const PrivateRoot = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    console.log('user ekhon private roote ase', user);
    if(loading){
        return <div className='flex items-center justify-center my-8'>
            <progress className="progress bg-orange-500 w-1/2 mt-10 text-center mx-auto"></progress>
        </div>;
    }
    if (user){
        return children ;
    }
    return <Navigate state={{from: location}} to='login' replace></Navigate>
    
};

export default PrivateRoot;