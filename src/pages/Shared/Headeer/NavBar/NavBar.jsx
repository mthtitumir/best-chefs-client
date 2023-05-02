import React from 'react';
import logo from '../../../../assets/logo-bc.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-yellow-300 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Recipes</Link></li>
                        <li><Link>Chefs</Link></li>
                        <li><Link>Blog</Link></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='h-8' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>Recipes</Link></li>
                    <li><Link>Chefs</Link></li>
                    <li><Link>Blog</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='login' className="px-4 py-1 rounded-lg font-semibold text-black bg-orange-400">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;