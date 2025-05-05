import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto'>
                <Navber></Navber>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;