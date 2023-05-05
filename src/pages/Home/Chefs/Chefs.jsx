// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import { BsFire } from 'react-icons/bs';
import Spinner from '../../../components/Spinner';

const Chefs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://best-chefs-server-mthtitumir.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setIsLoading(false);
            })
    }, [])
    console.log(chefs);
    return (
        <div>
            {
                !isLoading ?
                    <div className='container mx-auto mt-10'>
                        <div className='flex justify-center gap-3 items-center'><h2 className='text-5xl font-semibold text-center'>Meet Our Chefs</h2> <BsFire className='text-orange-600' size={'3em'}></BsFire></div>
                        <div className='grid md:grid-cols-3 gap-10 mt-10'>
                            {
                                chefs.slice(0, 6).map(chef => <Chef
                                    key={chef.id}
                                    chef={chef}
                                ></Chef>)
                            }
                        </div>
                        <div className='text-center my-8'>
                            <button className="btn btn-outline hover:bg-orange-500 mx-auto">More Chefs</button>
                        </div>
                    </div>
                    :
                    <div className='my-8'>
                        <h2 className='my-5 text-center font-semibold'>All Chefs Data is Loading</h2>
                        <Spinner></Spinner>
                    </div>
            }
        </div>
    );
};

export default Chefs;