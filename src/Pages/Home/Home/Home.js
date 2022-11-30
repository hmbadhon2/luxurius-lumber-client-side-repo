import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Features from './Feature/Features';
import useTitle from '../../../Hook/Title/useTitle'


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Features></Features>
        </div>
    );
};

export default Home;