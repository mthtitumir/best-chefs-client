import React from 'react';
import { Link } from 'react-router-dom';

const ChefProfileDetails = ({ chef }) => {
    console.log(chef);
    const { picture, likes, name, num_recipes, years_of_experience } = chef;
    console.log(picture);
    return (
        <div className="card w-full bg-base-400 rounded-[50%] shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-[50%] border h-40" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>Likes : {likes}</p>
                <p>Number of Recipes: {num_recipes}</p>
                <p>Experiences: {years_of_experience} years</p>
            </div>
        </div>
    );
};

export default ChefProfileDetails;