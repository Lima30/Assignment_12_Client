import React from 'react';
import Footer from '../../Footer/Footer';
import Founder from '../../Founder/Founder';
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
            <Founder></Founder>
            <br />
            <br />

        </div>
    );
};

export default Home;