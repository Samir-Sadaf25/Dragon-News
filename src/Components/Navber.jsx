import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navber = () => {
    return (
        // <div className=''>
            <div className='navbar'>
                <div className='navbar-end flex gap-2.5  text-accent'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/About"}>About</NavLink>
                    <NavLink to={"/Career"}>Career</NavLink>
                </div>
                <div className='navbar-end flex gap-1.5'>
                    <img src={user} alt="" />
                    <button className='btn btn-primary'>Login</button>
                </div>
            </div>
        // </div>
    );
};

export default Navber;