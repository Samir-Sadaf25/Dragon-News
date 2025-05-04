import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then(res => res.json());
const Categories = () => {
    
    const categories = use(categoryPromise);
    //  console.log(categories)
    return (
        <div>
            <h3 className='text-center font-bold text-accent text-xl'>All category</h3>
            <div className='grid grid-cols-1 gap-2 mt-4'>
                {
                    categories.map(category => <NavLink className="btn  bg-base-100 hover:bg-base-200 border-0 font-semibold text-accent" key={category.id} to={`/category/${category.id}`}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;