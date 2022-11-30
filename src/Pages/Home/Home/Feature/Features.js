import React from 'react';
import { HiLibrary } from "react-icons/hi";
const Features = () => {


  const fetauresData = [
        {
            id:1,
            title:'FreeShipping',
            'Description':'We offer free shipping to customers on various festivals so stay with us before you go anywhere else'
        },
        {
            id:2,
            title:'Security Payments',
            'Description':'We use advanced technology for money transactions so your money is safe'  
        },
        {
            id:3,
            title:'14 Days Returns',
            Description:'If there is a problem with the product you bought, you can return it within 14 days'  
        },
        {
            id:4,
            title:'24/7 Days Returns',
            Description:'Our 24 hour communication system is available for any of your queries'   
        },
         ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 max-w-screen-lg mx-auto gap-6 mt-32  '>
            {
                fetauresData.map((feature,i) => 
                <div className="card card-compact text-center justify-center align-center  bg-base-100 shadow-xl  "
                key={i}
                >
                <figure className='text-5xl'><HiLibrary></HiLibrary></figure>
                <div className="card-body text-center d-flex mx-auto">
                  <h2 className="card-title ">{feature.title}</h2>
                  <p>{feature.Description}</p>
                 
                </div>
              </div> )
            }
        </div>
    );
};

export default Features;