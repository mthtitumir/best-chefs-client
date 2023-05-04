import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';


const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://best-chefs-server-mthtitumir.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    console.log(foods);
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-5xl font-semibold text-center'>Best Chinese Foods</h2>
            <div className='mt-6 flex flex-col gap-3'>
                {
                    foods.map(food => <FoodCard
                        key={food.id}
                        food={food}
                    ></FoodCard>)
                }
            </div>
            <div className='text-center my-8'>
                <button className="btn btn-outline hover:bg-orange-500 mx-auto">Explore More</button>
            </div>
        </div>
    );
};

export default Foods;