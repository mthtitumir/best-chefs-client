import React from 'react';
import Login from '../pages/Login/Login/Login';
import NavBar from '../pages/Shared/Headeer/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;