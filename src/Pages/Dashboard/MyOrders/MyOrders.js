import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const {data:bookings=[]} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn: ()=>fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
    })

    return (
        <div>
               <div className="overflow-x-auto w-full">
                <table className="table w-full">
               
                  <thead>
                    <tr>

                      <th>Sr No</th>
                      <th>Product</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                   {
                     bookings.map((booking, i) =>  <tr
                     key={booking._id}

                     > 
                       <th>
                        {i+1}
                          </th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-circle w-12 h-12">
                                  <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                             
                            </div>
                          </td>
                          <td>
                           {booking.title}
                          </td>
                          <td>{booking.price}</td>
                          <td> {user?.email}</td>
                          <th>

                            {
                                booking.price && !booking.paid&&
                                <Link to={`/dashboard/payment/${booking._id}`}>  <button className="btn  btn-primary btn-xs">Pay</button></Link>
                            }
                            {
                               
                                booking.price && booking.paid &&
                                <span className='text-success'> Paid </span> 
                            }
                           
                          </th>
                        </tr>)
                   }
                  
                  </tbody>
                
              
                  
                </table>
              </div>
            
        </div>
    );
};

export default MyOrders;