import React, { useEffect, useState } from 'react';
import {useStripe,useElements,CardElement} from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = ({booking}) => {
   
   const {price,email,title, _id} = booking; 
   const stripe = useStripe();
   const elements = useElements()
   const [cardError, setCardError] = useState('')
   const [clientSecret, setClientSecret] = useState('')
   const [success, setSuccess]=useState('')
   const [transactionId,setTransactionId] = useState('')
   const [processing, setProcessing] =useState(false)



   useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({price})
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
   },[price])

    const handleSubmit = async(e)=>{

        e.preventDefault();
        if(!stripe  || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });


          if(error){
            console.log(error)
            setCardError(error.message)
          }
          else{
            setCardError('')
          }

          setProcessing(true)
          setSuccess('')
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                email,
              
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message)
            return;
          }

          if(paymentIntent.status ==="succeeded"){
            toast.success('Congrats your payment is completed')
            setSuccess('Congrats your payment is completed')
            setTransactionId(paymentIntent.id)
            const payment= {
              price,
              transactionId:paymentIntent.id,
              bookingId:_id,
              email
            }
            fetch('http://localhost:5000/payments',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(payment)
            })
            .then(res =>res.json())
            .then(data =>{
              if(data.insertedId){
                toast.success('Congrats your payment is completed')
                setSuccess('Congrats your payment is completed')
                setProcessing(false)
              }
              console.log(data)
              
            })
           
          }
        
          console.log('payment -intent', paymentIntent)


    }
    
    return (
       <>
       
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn-primary btn-sm mt-6 rounded-md' type="submit" disabled={!stripe || !clientSecret || processing }>
        Pay
      </button>

      
    </form>

    <p className="text-red-500">{cardError}</p> 
    <p className="text-red-500">{success}</p> 


       </>
    );
};

export default CheckoutForm;