import React from 'react';
import NavBar from '../pages/Shared/Headeer/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import Blog from '../pages/Blog/Blog';

const BlogLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default BlogLayout;