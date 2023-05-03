import React from 'react';
import SingleRecipes from './SingleRecipes';

const Recipes = ({ chefRecipes }) => {
    console.log(chefRecipes);
    return (

        <div>
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