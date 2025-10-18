import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
           <img src={logo} alt="" />
           <p className='text-[#706F6F] my-3'>Journalism Without Fear or Favour</p>
           <p className='font-semibold'> {format(new Date(),'EEEE, MMMM MM, yyyy')} </p>
        </div>
    );
};

export default Header;