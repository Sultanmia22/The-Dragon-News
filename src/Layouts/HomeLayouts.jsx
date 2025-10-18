import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import MainNav from '../Components/MainNav';
import LeftAside from '../Components/HomeLayoutes/LeftAside';
import RightAside from '../Components/HomeLayoutes/RightAside';

const HomeLayouts = () => {
    return (
        <div>

            <header>
                <Header/>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews/>
                    <MainNav/>
                </section>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>

               <aside className='col-span-3'>
                 <LeftAside/>
               </aside>

                <section className="main col-span-6">
                    <Outlet/>
                </section>

                <aside className='col-span-3'>
                    <RightAside/>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayouts;