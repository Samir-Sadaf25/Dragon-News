import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import RightAsideBg from '../assets/bg.png'
const RightAside = () => {
    return (
        <div className='space-y-8'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <Qzone></Qzone>
           <div className='ml-3'>
              <img src={RightAsideBg} alt="" />
           </div>
        </div>
    );
};

export default RightAside;