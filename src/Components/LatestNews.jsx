import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary btn'>Latest</p>
            <Marquee>
                <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe alias vero dicta pariatur ducimus eos aspernatur quidem perspiciatis ea!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;