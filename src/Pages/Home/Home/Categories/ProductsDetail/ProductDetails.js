import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ProductDetails = () => {


    const products = useLoaderData()

    
    return (
        <div>
            <h1> This is product details page {products.length}</h1>
        </div>
    );
};

export default ProductDetails;