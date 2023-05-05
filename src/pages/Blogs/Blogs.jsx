import React from 'react';
import Blog from './Blog';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = React.createRef();
const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div ref={ref}>
            <div className='container mx-auto'>
                <div className='text-right'>
                    <Pdf targetRef={ref} filename="recipe_blogs.pdf" x={1} y={1} scale={.5}>
                        {({ toPdf }) => <button onClick={toPdf} className='mt-3 font-semibold px-3 py-1 bg-orange-500 rounded-md'>Download This Page</button>}
                    </Pdf>
                    <h2 className='mt-8 text-3xl font-semibold text-center'>Important Blogs</h2>
                </div>
                <div>
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}></Blog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;