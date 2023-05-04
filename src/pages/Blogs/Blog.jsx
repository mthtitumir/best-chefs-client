import React from 'react';

const Blog = ({ blog }) => {
    console.log(blog);
    const {title, description, image} = blog;
    return (
        <div className="border my-5 pl-5 card card-side w-full bg-base-100 shadow-xl">
            <figure><img className='rounded-lg' src={image} alt="react" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Blog;