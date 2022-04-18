import React from 'react';
import AboutMe from './AboutMe';
import Service from './Service';
import Slider from './Slider';

const HomePage = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <AboutMe></AboutMe>
        </div>
    );
};

export default HomePage;