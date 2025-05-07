import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
    
    const {id} = useParams();
    const data = useLoaderData();
    const [news,setNews] = useState([]);
    useEffect(() =>{
        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails);
     },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5 w-11/12 mx-auto py-10'>
                <section className='col-span-9 '>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;