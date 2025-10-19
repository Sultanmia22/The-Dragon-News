import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
const MainNav = () => {
    const {user,logOut} = use(AuthContext)

    //! Handle Sign Out
    const handleSignOut = () => {
        logOut()
        .then(() => {
            toast.success('Sign Out Successfull')
        })
        .catch(() => {
            toast.error('Something was wrong . Please Try agian')
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Career</NavLink>
            </div>
            <div className='flex items-center gap-2 my-4'>
                <img src={userImg} alt="" />
                 {
                    user ? <Link onClick={handleSignOut} className='btn bg-primary text-base-100 '>Sign Out</Link> : <Link to='/auth/login' className='btn bg-primary text-base-100 '>Login</Link>
                 }
            </div>
        </div>
    );
};

export default MainNav;