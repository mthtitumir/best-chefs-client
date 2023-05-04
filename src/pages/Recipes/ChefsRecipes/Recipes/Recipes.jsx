import React from 'react';
import SingleRecipes from './SingleRecipes';

const Recipes = ({ chefRecipes }) => {
    console.log(chefRecipes);
    return (

        <div>
            
            <h1 className='text-5xl text-center my-8 font-semibold'>Recipes</h1>
            {
                chefRecipes.map(singleRecipes => <SingleRecipes
                key={singleRecipes.id}
                    singleRecipes={singleRecipes}
                ></SingleRecipes>)
            }
        </div>
    )
}
export default Recipes;