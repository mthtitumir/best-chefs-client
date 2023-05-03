import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { MdFoodBank } from 'react-icons/md';
import { MdPlayLesson } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ChefProfileDetails = ({ chef }) => {
    console.log(chef);
    const { picture, likes, name, num_recipes, years_of_experience, description } = chef;
    console.log(picture);
    return (
        <div className="card md:w-1/2 mx-auto bg-base-400 shadow-xl my-9 border">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-[50%] border h-40" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className='font-semibold'><AiFillLike className='inline text-orange-600'></AiFillLike> Likes : {likes}</p>
                <p className='font-semibold'><MdFoodBank className='inline text-orange-600'></MdFoodBank> Number of Recipes: {num_recipes}</p>
                <p className='font-semibold'><MdPlayLesson className='inline text-orange-600'></MdPlayLesson> Experiences: {years_of_experience} years</p>
                <p className='text-center font-semibold text-sm'>{description}</p>
            </div>
            <div className='flex justify-center gap-4 my-5'>
                <button className='bg-sky-600 p-3 rounded-[50%]'><FaTwitter className='text-white'></FaTwitter></button>
                <button className='bg-primary p-3 rounded-[50%]'><FaFacebook className='text-white'></FaFacebook></button>
                <button className='bg-red-700 p-3 rounded-[50%]'><FaInstagram className='text-white'></FaInstagram></button>
            </div>
        </div>
    );
};

export default ChefProfileDetails;