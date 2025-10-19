import React from 'react';
import MainNav from '../Components/MainNav';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <MainNav/>
            </header>

            <main className='w-11/12 mx-auto'>
                    <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayouts;