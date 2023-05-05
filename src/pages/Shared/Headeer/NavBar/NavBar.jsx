// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import logo from '../../../../assets/logo-bc.png'
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    const navLinkStyles = ({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? "semibold" : "",
          color: isPending ? "red" : "black",
          backgroundColor: isActive ? 'orange': '',
        };
      }
    return (
        <div className=" navbar bg-yellow-300 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink style={navLinkStyles} to='/'>Home</NavLink></li>
                        <li><NavLink style={navLinkStyles} to='/all-recipes'>Recipes</NavLink></li>
                        <li><NavLink style={navLinkStyles} to='/all-chefs'>Chefs</NavLink></li>
                        <li><NavLink style={navLinkStyles} to='/blogs'>Blog</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='h-8' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink style={navLinkStyles} to='/'>Home</NavLink></li>
                    <li><NavLink style={navLinkStyles} to='/all-recipes'>Recipes</NavLink></li>
                    <li><NavLink style={navLinkStyles} to='/all-chefs'>Chefs</NavLink></li>
                    <li><NavLink style={navLinkStyles} to='/blogs'>Blog</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="flex gap-2">
                        <Link to='/profile'><img title={user.displayName} className='h-9 rounded-[50%]' src={user.photoURL? user.photoURL:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"} alt="" /></Link>
                        <button onClick={handleLogOut} className="px-3 py-1 rounded-md font-semibold text-black bg-orange-400">Logout</button>
                    </div> :
                    <Link to='login' className="px-3 py-1 rounded-md font-semibold text-black bg-orange-400">Login</Link>}
            </div>
        </div>
    );
};

export default NavBar;