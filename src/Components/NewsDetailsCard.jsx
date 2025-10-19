import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    // console.log(news);

    return (
        <div className='p-6 border-2 border-gray-100 rounded-lg'>
          
                <img src={news.image_url} alt=""  className='object-cover'/>
            
            <div>
                <h2 className='text-2xl font-bold py-4'> {news.title} </h2>
                <p> {news.details} </p>
                <Link to={`/category/${news.category_id}`} className='flex items-center gap-2 btn bg-secondary max-w-[323px] text-base-100 mt-5'> <FaArrowLeftLong /> <span>All news in this category</span> </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;