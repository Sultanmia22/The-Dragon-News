import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {

    const [categoryNews,setCategoryNews] = useState([])

    const {id} = useParams()
    console.log(id);

    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        
        if(id == '0'){
            setCategoryNews(data)
        }

        else if(id == '1'){
            const filterData = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filterData)
        }

        else{
            const filterData = data.filter(news => news.category_id == id)
        setCategoryNews(filterData)
        }

    },[data,id])

    return (
        <div>
          <h2 className='font-bold text-2xl'> Total <span> Category News - {categoryNews.length} </span></h2>

          <div className='grid grid-cols-1 gap-5'>
            {
                categoryNews.map(news => <NewsCard key={news.id} news={news} />)
            }
          </div>
        </div>
    );
};

export default CategoryNews;