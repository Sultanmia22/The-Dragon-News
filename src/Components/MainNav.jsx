import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/user.png'
const MainNav = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-5'>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Career</NavLink>
            </div>
            <div className='flex items-center gap-2 my-4'>
                <img src={userImg} alt="" />
                <button className='btn bg-primary text-base-100 '>Login</button>
            </div>
        </div>
    );
};

export default MainNav;