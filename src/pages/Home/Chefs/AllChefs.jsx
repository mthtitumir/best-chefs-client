// eslint-disable-next-line no-unused-vars
import React from 'react';
import Spinner from '../../../components/Spinner';

const AllChefs = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='my-5 text-center font-semibold'>All Chefs Data is coming soon</h2>
            <div className='flex justify-center items-center  my-8'>
                <Spinner></Spinner>
            </div>
        </div>
    );
};

export default AllChefs;