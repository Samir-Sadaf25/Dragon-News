import React from 'react';
import swinmmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playImg from '../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 w-fit'>
            <h3 className='mb-5 font-bold text-xl'>Q-Zone</h3>
            <div className='space-y-5'>
                <img src={swinmmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;