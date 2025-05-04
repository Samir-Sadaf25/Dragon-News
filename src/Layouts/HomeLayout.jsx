import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Navber from '../Components/Navber';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';

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
            <main className='w-11/12 mx-auto my-5 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;