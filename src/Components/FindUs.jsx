import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-bold'>Find Us On</h2>

            <div className="join join-vertical  w-full">
                <button className="btn join-item bg-base-100 justify-start hover:bg-base-200 "><FaFacebook size={17}></FaFacebook>Facebook</button>
                <button className="btn join-item bg-base-100 justify-start hover:bg-base-200"> <FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item bg-base-100 justify-start hover:bg-base-200"><FaInstagram></FaInstagram> Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;