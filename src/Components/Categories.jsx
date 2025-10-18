import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json')
    .then(res => res.json())

const Categories = () => {
    const categories = use(categoriesPromise)
    return (
        <div>
            <h2 className='font-bold'> All Categories ({categories.length}) </h2>
            <div className=' ctg grid grid-cols-1 gap-3 mt-4 text-center'>
                {
                    categories.map(category =>

                        <NavLink to={`/category/${category.id}`} className={({ isActive, isPending }) =>
                           isActive ? " btn font-bold " : ""
                        } key={category.id}>{category.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;