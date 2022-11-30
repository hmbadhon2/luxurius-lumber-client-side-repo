import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const {image, id, pre, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img src={image} alt='' className="w-full rounded-lg" />
        </div>
      
        <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/4 text-white">
            <h1 className='text-6xl font-bold '>Buy old products <br/> at cheap prices without<br/> hesitation</h1>
          
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  w-2/5 left-24 top-1/2 text-white">
            <p className='text-xl'>You will find many products in the market but we are one step ahead in selling old products as well as new ones</p>
          
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2   left-24 top-3/4 text-white">
           
        <button className="btn btn-outline-white btn-warning">Show Product</button>
       
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
          <a href={`#slide${pre}`} className="btn btn-circle">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle ml-5">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;