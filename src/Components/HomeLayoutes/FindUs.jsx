import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold '> Find Us On </h2>
            <div className='flex flex-col my-4'>
                <button className='btn bg-white'> <FaFacebook /> <span>Facebook</span> </button>
                <button className='btn bg-white'> <FaTwitter/> <span>Twitter</span> </button>
                <button className='btn bg-white'> <FaInstagram/> <span>Instagram</span> </button>
            </div>
        </div>
    );
};

export default FindUs;