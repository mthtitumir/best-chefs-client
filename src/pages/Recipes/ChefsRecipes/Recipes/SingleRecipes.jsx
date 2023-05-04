import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleRecipes = ({ singleRecipes }) => {
    const [isClicked, setIsClicked] = useState(false);

    const { category, image, recipe_name, ingredients, cooking_method, rating, id } = singleRecipes;
    console.log(ingredients);
    const notify = () => toast("Recipe Added to Favorite!");
    const handleOnClick = () => {
        notify();
        setIsClicked(true);

    }
    return (
        <div>
            <div className='grid md:grid-col-2 my-5'>
                <div>
                    <div className="card md:card-side gap-3 bg-base-100 shadow-xl">
                        <figure><img src={image} className='rounded-lg' alt="Food" /></figure>
                        <div className="card-body border rounded-lg">
                            <h2 className="card-title text-3xl">{recipe_name}</h2>
                            <p className='font-semibold my-1 py-1'> Rating:  {rating}</p>
                            <h2 className="card-title text-xl">Tags</h2>
                            <div>
                                <div className="badge badge-outline">food</div>
                                <div className="badge badge-primary badge-outline">chinese</div>
                                <div className="badge badge-secondary badge-outline">chinese traditional</div> <br />
                                <div className="badge badge-accent badge-outline">daily meal</div>
                                <div className="badge badge-outline">food</div>
                                <div className="badge badge-primary badge-outline">chinese</div><br />
                                <div className="badge badge-secondary badge-outline">chinese traditional</div>
                                <div className="badge badge-accent badge-outline">daily meal</div>
                            </div>
                            <div className="card-actions justify-start">
                                <button onClick={handleOnClick} disabled={isClicked} className='px-3 py-2 rounded ml-0 mb-5 text-white font-semibold bg-orange-500 hover:bg-orange-700 mx-auto'>{!isClicked ? 'Make Favorite' : 'Favorite Added'}</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
                        <div>
                            <h2 className="card-title text-3xl mt-3 ml-5 pt-0">Ingredients</h2>
                            <div className='w-full my-auto px-5 py-3'>
                                {
                                    ingredients.slice(0, 5).map(ingredient => <p key={category} className='text-xl border px-5 py-2 rounded-lg mb-1 bg-base-200 text-left'> o {ingredient}</p>)
                                }
                            </div>
                        </div>
                        <div className="card w-full">
                            <h2 className="card-title text-3xl mt-3 pt-0 px-5">Cooking Steps</h2>
                            <p className='px-5 py-5 font-semibold w-1/2' >{cooking_method}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipes;




