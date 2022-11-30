import React from 'react';
import { useLoaderData,  useNavigation,  } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log('for stripe',stripePromise)

const Payment = () => {

    const booking = useLoaderData()
    const navigation = useNavigation();
    if(navigation.state=== "loading"){
        return <Loading></Loading>
    }
    console.log(booking)

    return (
        <div className='mt-32'>
           
            <h3 className="text-3xl"> Payment for {booking.title}</h3>
            <p className='text-xl my-7'> Please pay <strong> ${booking.price}</strong> for your booking {booking.title}</p>


            <div>

            <Elements stripe={stripePromise}>
                <CheckoutForm
                booking = {booking}
                />
            </Elements>

            </div>

        </div>
    );
};

export default Payment;