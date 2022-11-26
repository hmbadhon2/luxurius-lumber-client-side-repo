import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProduct = () => {

    const {data:products=[]} =useQuery({
        queryKey:['products'],
        queryFn: ()=> fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
    })
    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Product Status</th>
       
      </tr>
    </thead>
    <tbody>
   {
        products.map((product,i) => <tr
        key={product._id}
        product={product}
        
        >
            <td>{i+1} </td>
            <td>
             {product.name}
              
            </td>
            <td>{product.sellPrice}</td>
            <th>
              <button className="btn btn-ghost btn-xs">Available</button>
            </th>
          </tr>)
   }
     
    
      
    </tbody>
   
    
  </table>
</div>
    );
};

export default MyProduct;