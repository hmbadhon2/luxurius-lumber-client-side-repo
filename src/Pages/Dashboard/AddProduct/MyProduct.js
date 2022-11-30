import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProduct = () => {

  const {user} = useContext(AuthContext)
    const {data:products=[]} =useQuery({
        queryKey:['products'],
        queryFn: ()=> fetch(`https://luxurious-lumber-server.vercel.app/products?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
          
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
        <th>Advertised</th>
       
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
              {
                 !product.paid &&
              
                 <button className="btn btn-error btn-xs">Available</button>
              }
             
                {
                                 product.paid &&
                               <span className='text-error'> Sold </span> 
                }

            </th>
            <th>
              <button className="btn btn-primary btn-xs">Advertised</button>

            </th>
          </tr>)
   }
     
    
      
    </tbody>
   
    
  </table>
</div>
    );
};

export default MyProduct;