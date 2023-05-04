import React from 'react';
import Banner from '../../Shared/Headeer/Banner/Banner';
import Chefs from '../Chefs/Chefs';
import Foods from '../BestFoods/Foods';
import FoodCategories from '../FoodCategories/FoodCategories';

const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Chefs></Chefs>
            <Foods></Foods>
            <FoodCategories></FoodCategories>
        </div>
    );
};

export default Home;