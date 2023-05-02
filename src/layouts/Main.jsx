import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Headeer/NavBar/NavBar';
import Banner from '../pages/Shared/Headeer/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import Foods from '../pages/Home/BestFoods/Foods';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Chefs></Chefs>
            <Foods></Foods>
            <Footer></Footer>
        </div>
    );
};

export default Main;