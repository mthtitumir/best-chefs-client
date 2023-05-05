import React from 'react';
import Spinner from '../../../components/Spinner';

const AllRecipes = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='my-5 text-center font-semibold'>All Recipes Data is coming soon</h2>
            <div className='flex justify-center items-center  my-8'>
               <Spinner></Spinner>
            </div>
        </div>
    );
};

export default AllRecipes;