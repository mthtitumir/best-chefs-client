import React from 'react';
import NavBar from '../pages/Shared/Headeer/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;