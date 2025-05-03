import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Navber from '../Components/Navber';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto mt-5'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto mt-5 '>
                    <Navber></Navber>
                </section>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;