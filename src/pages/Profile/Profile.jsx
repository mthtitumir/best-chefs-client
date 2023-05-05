import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import ErrorPage from '../Shared/ErrorPage/ErrorPage'
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const {displayName, email, photoURL} = user;
    return (
        <div className='container mx-auto'>
            {
                user ?
                    <div className='my-8 flex '>
                        <div className="card md:w-1/2 mx-auto py-10 bg-base-100 shadow-xl">
                            <figure><img className='rounded-[50%]' src={photoURL} alt={displayName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : {displayName}</h2>
                                <h2 className="card-title">Email : {email}</h2>
                                <div className="card-actions justify-center my-3">
                                    <button className="px-3 py-1 rounded-md font-semibold text-black bg-orange-400">Contact</button>
                                    <button className="px-3 py-1 rounded-md font-semibold text-black bg-orange-400">Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Navigate to='login'></Navigate>
            }
        </div>
    );
};

export default Profile;