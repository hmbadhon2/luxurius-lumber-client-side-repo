
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingProduct from '../BookingProduct/BookingProduct';
import ProductDetailsCard from './ProductDetailsCard';


const ProductDetails = () => {

    const [bookingProduct, setBookingProduct] = useState(null)
    const products = useLoaderData()
   
    console.log(products)

    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6  mt-32 max-w-screen-lg	 mx-auto'>
            

            {
                products.map( product => <ProductDetailsCard
                    key={product._id}
                    product={product}
                    setBookingProduct = {setBookingProduct}
                >
                </ProductDetailsCard>
               )
            }

            {
                bookingProduct &&
               <BookingProduct
               bookingProduct ={bookingProduct}
               setBookingProduct ={setBookingProduct}
               ></BookingProduct>
            }
        </div>
    );
};

export default ProductDetails;