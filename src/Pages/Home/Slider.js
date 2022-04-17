import React from 'react';
import slider from '../../Images/slider.jpg'
const Slider = () => {
    return (
        <div className="relative">
            <div>
            <img src={slider} alt="" />
            </div>
            <div className="absolute text-center md:top-[50%] md:right-[35%] top-[15%] right-[20%] text-white ">
            <h1 className="md:text-6xl text-2xl font-mono font-bold">JONATHAN KUBB</h1> 
            <h1 className="md:text-4xl text-xl font-bold">PHOTOGRAPHY</h1>
            <p className="md:text-2xl">Based in New York since 2015</p>
            
            </div>
        </div>
    );
};

export default Slider;