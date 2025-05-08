import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Registar = () => {
    const { setUser, createUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();
    const handleRegistar = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    // Profile updated!
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate("/auth/login")
                }).catch((error) => {
                    // An error occurred
                    setUser(user);
                    // console.log(error);
                });


            }).catch(error => {
                // console.log(error.message);
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-5 py-5 mt-10 place-self-center">
            <h1 className="text-xl font-bold text-center mt-2.5">Registar your account</h1>
            <div className="card-body">
                <form onSubmit={handleRegistar} className="fieldset">
                    <label className="label">name</label>
                    <input type="text" className="input" name='name' placeholder="Your name" />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name='photo' placeholder="Enter your image Link" />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <div className=''>
                        <input type="password" className="input" name='password' placeholder="Password" />

                    </div>
                    <label className="label">
                        <input type="checkbox" name='terms' defaultChecked className="checkbox mt-1.5" />
                        Accept our Terms and Condition
                    </label>

                    <input className='btn btn-neutral mt-4' type="submit" value="Submit" />
                </form>
                <p className='mt-3'>already have an account? Please <Link className='text-blue-500 underline' to={"/auth/login"}>Login</Link></p>
            </div>

        </div>
    );
};

export default Registar;