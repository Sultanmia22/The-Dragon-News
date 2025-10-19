import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import MainNav from '../Components/MainNav';
import LeftAside from '../Components/HomeLayoutes/LeftAside';
import RightAside from '../Components/HomeLayoutes/RightAside';
import LoadingPage from '../Components/LoadingPage';

const HomeLayouts = () => {
    const {state} = useNavigation()
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

               <aside className='col-span-3 h-fit sticky top-0'>
                 <LeftAside/>
               </aside>

                <section className="main col-span-6">
                   {state == 'loading'? <LoadingPage/> :  <Outlet/>}
                </section>

                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside/>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayouts;