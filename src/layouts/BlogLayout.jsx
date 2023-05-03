import React from 'react';
import NavBar from '../pages/Shared/Headeer/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import Blog from '../pages/Blog/Blog';
import { useLoaderData } from 'react-router-dom';

const BlogLayout = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <NavBar></NavBar>
            <div className='container mx-auto'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}></Blog>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogLayout;