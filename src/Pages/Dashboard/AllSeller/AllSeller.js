import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const {data:allSellers =[], refetch} = useQuery({
        queryKey:['allSeller'],
        queryFn: ()=> fetch('http://localhost:5000/allSellers')
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            return data;
        })

        
    })

    const handleUserDelete = id =>{
        fetch(`http://localhost:5000/users/${id}`,{
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

    const handleVerify = id =>{
        fetch(`http://localhost:5000/allSeller/${id}`,{
            method:'PUT' 
         })
         .then(res => res.json())
         .then(data=> {
             if(data.modifiedCount){
                 toast.error(' User verified successfully')
                 refetch()
             }
             console.log(data)
         })
         .catch(err =>console.error(err))
    }
    return (
        <div>

            <h2 className='text-center text-primary font-extrabold text-4xl mt-6'> All Seller Here</h2>
           
           <div className="overflow-x-auto">
  <table className="table table-zebra lg:max-w-4xl w-full mt-16">

    <thead className='font-semibold'>
      <tr>
        <th>Sr</th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete user</th>
        <th>Seller's Status</th>
      </tr>
    </thead>
    <tbody className=' text-primary '>
    {allSellers.map((seller,i) => <tr 
        key={seller._id}>

        <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td><button className='btn btn-xs bg-red-500 rounded-md' onClick={()=> handleUserDelete(seller._id)}> Delete</button></td>
        <td>

            {
                !seller.role &&
                 <button className='btn btn-xs bg-red-500 rounded-md' onClick={()=> handleVerify(seller._id)}> Verify</button>
            
               
            }

            {
                seller.role &&
                <span className='text-success'> Verified </span>
            }
            </td>
      </tr> )}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSeller;