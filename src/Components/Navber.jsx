import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userPic from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navber = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert("Logout successfully")
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return (
        // <div className=''>
        <div className='navbar'>
            <div className='navbar-start'>
                {
                    user && <h3>{user.email}</h3>
                }
            </div>
            <div className='navbar-center flex gap-2.5  text-accent'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Career"}>Career</NavLink>
            </div>
            <div className='navbar-end flex gap-1.5'>
                <img src={userPic} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary'>Logout</button> : <Link to={"/auth/login"}><button className='btn btn-primary'>Login</button></Link>
                }
            </div>
        </div>
        // </div>
    );
};

export default Navber;