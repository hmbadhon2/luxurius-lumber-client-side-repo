import React from 'react';

const ProductDetailsCard = ({product, setBookingProduct}) => {
    const {image,name,sellPrice,location,sellerName,originalPrice,uses,time} = product;
    return (
        <div 
        className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-primary">
           {name}
            <div className="badge bg-red-600 text-white">${sellPrice}</div>
          </h2>
          <div className='flex justify-between'>
            <h2 className='font-semibold text-primary'>Location: {location} </h2>
            <h2 className='font-semibold text-primary'>Seller: {sellerName} </h2>
           {
              // seller.verified &&
              <span> <div className="badge caret-blue-800"></div></span> 

           }
          </div>
          <p className='font-semibold text-primary'> Original Price:${originalPrice}</p>
          <div className="card-actions justify-end">
            <div className="badge bg-primary"> Use {uses}</div> 
            <div className="badge badge-outline">{time}</div>
          </div>
          <div className='mx-auto mt-3'>
          
                <label
                onClick={()=>setBookingProduct(product)}
                htmlFor="booking-modal" className="btn bg-primary gap-2">
                 Book Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
               </label>
        </div>
        </div>
      </div>
    );
};

export default ProductDetailsCard;