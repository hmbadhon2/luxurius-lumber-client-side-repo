import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
const {data:Categories=[]} = useQuery({
  queryKey:['Categories'],
  queryFn: ()=> fetch('https://luxurious-lumber-server.vercel.app/categories')
  .then(res => res.json())
})

  return (
   <section className='max-w-screen-lg mx-auto'>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-32 '>
      {
        Categories.map(category => <CategoriesCard
        key={category._id}
        category ={category}
        ></CategoriesCard> )
      }
     
    </div>
   </section>
  );
};

export default Categories;