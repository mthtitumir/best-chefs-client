import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';


const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    console.log(foods);
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-5xl font-semibold text-center'>Our Best Creations</h2>
            <div className='mt-10 flex flex-col gap-3'>
                {
                    foods.map(food => <FoodCard
                        key={food.id}
                        food={food}
                    ></FoodCard>)
                }
            </div>
            <div className='text-center my-5'>
                <button className="btn btn-primary mx-auto">Explore More</button>
            </div>
        </div>
    );
};

export default Foods;