import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    console.log(chefs);
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-5xl font-semibold text-center'>Meet Our Chefs</h2>
            <div className='grid md:grid-cols-3 gap-10 mt-10'>
                {
                    chefs.slice(0, 6).map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
            <div className='text-center my-5'>
                <button className="btn btn-primary mx-auto">More Chefs</button>
            </div>
        </div>
    );
};

export default Chefs;