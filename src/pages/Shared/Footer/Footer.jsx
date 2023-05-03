import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-yellow-300 text-base-content rounded container mx-auto">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaFacebook className='text-sky-700'></FaFacebook></Link>
                    <Link><FaYoutube className='text-red-600'></FaYoutube></Link>
                    <Link><FaTwitter className='text-sky-500'></FaTwitter></Link>
                    <Link><FaInstagram className='text-orange-600'></FaInstagram></Link>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Best Chefs Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;