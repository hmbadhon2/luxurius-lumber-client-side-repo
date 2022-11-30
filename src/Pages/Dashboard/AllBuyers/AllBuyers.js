import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const {data:allBuyers =[], refetch} = useQuery({
        queryKey:['allBuyers'],
        queryFn: ()=> fetch('https://luxurious-lumber-server.vercel.app/allBuyers')
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            return data;
        })

        
    })

    const handleUserDelete = id =>{
        fetch(`https://luxurious-lumber-server.vercel.app/users/${id}`,{
           method:'DELETE' 
        })
        .then(res => res.json())
        .then(data=> {
            if(data.deletedCount){
                toast.error(' User deleted successfully')
                refetch()
            }
            console.log(data)
        })
        .catch(err =>console.error(err))
        
    }
    

    return (
        <div>

            <h2 className='text-center text-primary font-extrabold text-4xl mt-6'> All Buyers Here</h2>
           
           <div className="overflow-x-auto">
  <table className="table table-zebra lg:max-w-4xl w-full mt-16">

    <thead className='font-semibold'>
      <tr>
        <th>Sr</th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete user</th>
      </tr>
    </thead>
    <tbody className=' text-primary '>
    {allBuyers.map((seller,i) => <tr 
        key={seller._id}>

        <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td><button className='btn btn-xs bg-red-500 rounded-md' onClick={()=> handleUserDelete(seller._id)}> Delete</button></td>
      </tr> )}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;