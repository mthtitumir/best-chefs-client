import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Headeer/NavBar/NavBar';
import { Outlet } from 'react-router-dom';



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;