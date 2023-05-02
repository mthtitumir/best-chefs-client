import React from 'react';
import NavBar from '../pages/Shared/Headeer/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;