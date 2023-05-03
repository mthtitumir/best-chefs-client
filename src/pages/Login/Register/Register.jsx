import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('');
        setSuccess('');
        if( email == '' || password == ''){
            setError('Please give email and password')
        }
        if (password.length < 6) {
            setError('Password must contains 6 characters.')
            return;
        }
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo)
            })
            .catch(error => {
                console.log(error);
            });

        form.reset();

    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className='text-sm'>Already Have an Account?</p>
                                <Link to="/login" className="label-text-alt link link-hover font-semibold text-primary">Please Login!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button type='submit' className="px-4 py-2 rounded-lg font-semibold text-black bg-orange-400">Register</button>
                        </div>
                    </form>

                    <p className='text-red-600 text-center mb-3 font-semibold'>{error}</p>
                    <p className='text-success text-center mb-3 font-semibold'>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;