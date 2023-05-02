import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
                            <label className="label">
                                <p className='text-sm'>Don't Have an Account?</p>
                                <Link to="/register" className="label-text-alt link link-hover font-semibold text-primary">Please Register!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button type='submit' className="px-4 py-2 rounded-lg font-semibold text-black bg-orange-400">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;