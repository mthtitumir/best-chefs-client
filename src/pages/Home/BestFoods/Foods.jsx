import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import Spinner from '../../../components/Spinner';


const Foods = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://best-chefs-server-mthtitumir.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setIsLoading(false);
            })
    }, []);
    console.log(foods);
    return (
        <div>
            {
                !isLoading ?
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
                    :
                    <div className='flex justify-center items-center  my-8'>
                        <Spinner></Spinner>
                    </div>
            }
        </div>
    );
};

export default Foods;