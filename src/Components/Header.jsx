import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    const currentDate =format(new Date(), 'EEEE,MMMM d,yyyy')
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-3 mt-5'>
                <img className='w-[471px] h-[60px]' src={logo} alt="" />
                <p className='text-gray-500'>Journalism Without Fear or Favour</p>
                <p className='text-accent'>{currentDate}</p>
            </div>
        </div>
    );
};

export default Header;