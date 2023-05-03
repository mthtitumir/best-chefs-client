import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefProfileDetails from './ChefProfileDetails/ChefProfileDetails';
import Recipes from './Recipes/Recipes';

const ChefRecipes = () => {
    const recipes = useLoaderData();
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);
    const { id } = useParams();
    console.log(chefs);
    const chef = chefs.find(searchingChef => searchingChef.chefId===id);
    console.log(chef);
    const chefRecipes = recipes.filter(recipe => recipe.category===id);
    console.log(chefRecipes);
    return (
        <div className='container mx-auto'>
            {/* <ChefProfileDetails chef={chef}></ChefProfileDetails> */}
            <Recipes chefRecipes={chefRecipes}></Recipes>
        </div>
    );
};

export default ChefRecipes;