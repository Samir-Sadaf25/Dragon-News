import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 max-w-sm w-full shrink-0 shadow-2xl mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mt-5">Login now!</h1>
            <div className="card-body">
                <form  className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div ><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className='mt-3'>Don't have an account? Please <Link className='text-blue-500 underline' to={"/auth/registar"}>SignUp</Link></p>
            </div>

        </div>
    );
};

export default Login;