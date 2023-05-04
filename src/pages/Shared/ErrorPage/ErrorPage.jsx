import React from 'react';
import NavBar from '../Headeer/NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <div className='relative'>
                <img className='w-full' src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/10/fork_knife_and_empty_plate_1427236818.jpg" alt="" />
                <div className='absolute mx-auto text-center inset-x-0 top-1/3 w-1/4 bg-red-00 p-3 border shadow-xl rounded-lg'>
                    <h1 className='text-white mb-3 font-semibold text-3xl'>No Food For You Here</h1>
                    <Link to='/' className="px-3 py-2  rounded-md font-semibold text-orange-600 bg-white">Back to Main Website?</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;