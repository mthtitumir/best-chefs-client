import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { MdFoodBank, MdPlayLesson } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {
    const { id } = useParams();
    console.log(id);
    const { chefId, picture, likes, name, num_recipes, years_of_experience } = chef;
    return (
        <div className="card w-full bg-yellow-300 shadow-xl">
            <figure className="px-10 pt-10">
                <LazyLoad effect={blur}><img src={picture} alt="Shoes" className="rounded-[50%] border h-40" /></LazyLoad>
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className='font-semibold mt-'><AiFillLike className='inline text-orange-600'></AiFillLike> Likes : {likes}</p>
                <p className='font-semibold mt-'><MdFoodBank className='inline text-orange-600'></MdFoodBank> Number of Recipes: {num_recipes}</p>
                <p className='font-semibold mt-'><MdPlayLesson className='inline text-orange-600'></MdPlayLesson> Experiences: {years_of_experience} years</p>
                <div className="card-actions">
                    <Link to={`/recipes/${chefId}`}><button className="px-3 py-2 font-semibold text-white rounded-lg bg-orange-600 hover:btn-outline">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;