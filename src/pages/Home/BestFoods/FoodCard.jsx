import React from 'react';

const FoodCard = ({ food }) => {
    const {image, title, description } = food;
    return (
        <div className="card flex md:card-side bg-base-100 shadow-xl">
            <figure><img className='rounded' src={image}/></ figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="px-3 py-2 text-black font-semibold rounded bg-orange-500">See More</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;