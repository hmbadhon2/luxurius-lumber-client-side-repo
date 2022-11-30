import React from 'react';
import { useEffect, useState } from "react"

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://luxurious-lumber-server.vercel.app/user/buyer/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsBuyer(data.isBuyer);
            setIsBuyerLoading(false)
        })
    }, [email])

    return [isBuyer, isBuyerLoading];
};

export default useBuyer;