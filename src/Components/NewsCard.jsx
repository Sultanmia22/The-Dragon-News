
import React from 'react';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({news}) => {
    // console.log(news);
    return (
        <div className=''>
    <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4  bg-base-200">
        <div className="flex items-center gap-3 ">
          <img 
            src={news.author.img} 
            alt={news.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{news.author.name}</h3>
              <p className='text-accent'>  {`${new Date(news.author.published_date).getFullYear()}-${String(new Date(news.author.published_date).getMonth() + 1).padStart(2, '0')}-${String(new Date(news.author.published_date).getDate()).padStart(2, '0')}`} </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <FaBookmark className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <FaShareAlt className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 leading-tight">
          {news.title}
        </h2>
      </div>

      {/* Image */}
      <div className="">
        <img 
          src={news.image_url} 
          alt={news.title}
          className="w-full h-full object-cover"
        />
        
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {news.details.substring(0, 200)}...
        </p>
        <Link to={`/news-details/${news.id}`} className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition">
          Read More
        </Link>
      </div>

      <div className='w-full h-[1px] bg-gray-300'></div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4  ">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar 
              key={index}
              className={`w-5 h-5 ${
                index < news.rating.number 
                  ? 'text-orange-400' 
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-700">
            {news.rating.number}.9
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye className="w-5 h-5" />
          <span className="text-sm font-semibold">499</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NewsCard;