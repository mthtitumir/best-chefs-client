import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id } = useParams();
    console.log(id);
    const { chefId, picture, likes, name, num_recipes, years_of_experience } = chef;
    return (
        <div className="card w-full bg-yellow-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-[50%] border h-40" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>Likes : {likes}</p>
                <p>Number of Recipes: {num_recipes}</p>
                <p>Experiences: {years_of_experience} years</p>
                <div className="card-actions">
                    <Link to={`/recipes/${chefId}`}><button className="btn bg-orange-400">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;