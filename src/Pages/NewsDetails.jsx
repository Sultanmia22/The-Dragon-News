import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayoutes/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {

    const [news,setNews] = useState({})

    const {id} = useParams()

    const data = useLoaderData()
    // console.log(data);

    useEffect(()=> {
        const filterDetailsNews = data.find(singleNews => singleNews.id == id)
        setNews(filterDetailsNews)
    },[data,id])
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-4'> News Details </h2>

                    <NewsDetailsCard news={news}/>

                </section>

                <section className='col-span-3'>
                    <RightAside/>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;