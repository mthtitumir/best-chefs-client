import React from 'react';

const FoodCard = ({ food }) => {
    const {image, title, description } = food;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='rounded-lg' src={image}/></ figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;