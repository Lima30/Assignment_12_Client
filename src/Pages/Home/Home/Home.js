import React from 'react';
import Footer from '../../Footer/Footer';
import Review from '../../Review/Review';
import ReviewShow from '../../ReviewShow/ReviewShow';

import Banner from '../Banner/Banner';
import Distance from '../Distance/Distance';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">


            <br />
            <Banner></Banner>
            <br />
            <Services></Services>
            <br />

            <br />
            <Distance></Distance>
            <br />
            <br />


            <ReviewShow></ReviewShow>
        </div>
    );
};

export default Home;