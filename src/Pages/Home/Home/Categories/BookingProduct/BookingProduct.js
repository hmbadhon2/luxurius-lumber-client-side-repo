import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../Context/AuthProvider';

const BookingProduct = ({bookingProduct,setBookingProduct}) => {
  const {user} = useContext(AuthContext)
  const {name,sellPrice,image} =bookingProduct;

  const handleBooking = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const location = form.location.value;
    const phone = form.phone.value;
    console.log(name,email,productName,productPrice,location,phone)

    const bookings ={
      title:productName,
      price:productPrice,
      image,
      email:email
    }
    console.log(bookings)
    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookings)
    })
    .then(res =>res.json())
    .then(data =>{
      
      console.log(data)
      setBookingProduct(null)
      if(data.acknowledged){
        toast.success('Your booking is confirmed')
      }
    
      else{
        toast.error(data.message)
      }
    })
    .catch(err =>console.error(err))
    
  }

    return (
        <div>
          
    <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
     <div className="modal-box">
     <h3 className="font-bold text-lg">{name}</h3>

      <form onSubmit={handleBooking} >
        
     <input type="text" name='name' disabled defaultValue={user?.displayName} placeholder="Your Name" className="input  input-bordered mt-6 w-full" />
   <input type="email" disabled defaultValue={user?.email} name='email' placeholder="Your email" className="input mt-6 input-bordered w-full" />

   <div className='grid grid-cols-1 lg:grid-cols-2 justify-around gap-3'> 
      <input type="text" disabled defaultValue={name} name='productName'      placeholder="Product Name" className="input mt-6 input-bordered w-full" />
       <input type="text" disabled defaultValue={sellPrice} name='productPrice' placeholder="Product Name" className="input mt-6 input-bordered w-full" />

   </div>

   <div className='grid grid-cols-1 lg:grid-cols-2 justify-around gap-3'>
   <input type="text" name='phone' placeholder="Your phone number" className="input  input-bordered mt-6 w-full" />
   <input type="text" name='location' placeholder="Meeting Location" className="input  input-bordered mt-6 w-full" />
   </div>

     <input type="submit" value="Submit" className='w-full btn mt-6 btn-primary' />

      </form>

  </div>
</div>
        </div>
    );
};

export default BookingProduct;