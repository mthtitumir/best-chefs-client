import React from 'react';

const Chef = ({ chef }) => {
    const { picture, likes, name, num_recipes, years_of_experience } = chef;
    return (
        <div>
            <div className="card w-full bg-orange-400 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-[50%] border h-40" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Likes : {likes}</p>
                    <p>Number of Recipes: {num_recipes}</p>
                    <p>Experiences: {years_of_experience} years</p>
                    <div className="card-actions">
                        <button className="btn btn-warning">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;