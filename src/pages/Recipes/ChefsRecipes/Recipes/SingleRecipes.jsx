import React from 'react';

const SingleRecipes = ({ singleRecipes }) => {
    const { category, image, recipe_name, ingredients, cooking_method, rating } = singleRecipes;
    console.log(ingredients);
    return (
        <div className="bg-base-200">
            <img src={image} className=" rounded-lg shadow-2xl" />
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <h1 className='text-lg font-semibold'>INGREDIENTS & SUBSTITUTIONS : </h1>
                    {
                        ingredients.map(ingredient => <p className='text-xl border px-5 py-2 rounded-lg mb-1 bg-red-300 '> o {ingredient}</p>)
                    }
                </div>
                <div className='w-1/2'>
                    <p>{cooking_method}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipes;