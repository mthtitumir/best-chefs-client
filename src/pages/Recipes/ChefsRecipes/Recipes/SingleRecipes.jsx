import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleRecipes = ({ singleRecipes }) => {
    const { category, image, recipe_name, ingredients, cooking_method, rating, id } = singleRecipes;
    console.log(ingredients);
    const notify = () => toast("Recipe Added to Favorite!");
    const handleOnClick = event => {
        event.currentTarget.disable = true;
        notify();
    }
    return (
        <div className=" card full bg-base-100 shadow-xl mt-3">
            <h2 className="card-title text-3xl px-5 py-8 text-center">{id}. {recipe_name}</h2>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className='text-3xl font-semibold text-center my-3'>Ingredients</h1>
                <div className='text-center mx-auto'>

                    {
                        ingredients.slice(0, 5).map(ingredient => <p key={category} className='text-xl border px-5 py-2 rounded-lg mb-1 bg-base-200 text-left'> o {ingredient}</p>)
                    }
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-center my-3'>Cooking Steps</h1>
                    <p>{cooking_method}</p>
                </div>
            </div>
            <button onClick={handleOnClick} className='px-3 py-2 rounded mb-5 text-white font-semibold bg-orange-500 hover:bg-orange-700 w-1/12 mx-auto'>Favourite</button>
            <button onClick={handleOnClick} className='btn'>Hello</button>
            <ToastContainer />
        </div>
    );
};

export default SingleRecipes;