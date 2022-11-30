import React from 'react';
import BannerItem from './BannerItem/BannerItem';
import banner1 from '../../../../assets/banner1.webp'
import banner2 from '../../../../assets/banner2.webp'
import banner3 from '../../../../assets/banner3.webp'


const bannerData = [
    {
      image:banner1,
      pre:6,
      id:1,
      next:2
    },
    {
      image:banner2,
      pre:1,
      id:2,
      next:3
    },
   
    {
      image:banner3,
      pre:2,
      id:3,
      next:1
    },
   
  ]
const Banner = () => {
    return (
        <div className="carousel h- w-full ">
  

        {
          bannerData.map(slide => <BannerItem
          key = {slide.id}
          slide = {slide}
          ></BannerItem>)
        }
        
         
         
        </div>
    );
};

export default Banner;