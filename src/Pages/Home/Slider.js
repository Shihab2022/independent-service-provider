import React from 'react';
import slider from '../../Images/slider.jpg'
const Slider = () => {
    return (
        <div className="relative">
            <div>
            <img src={slider} alt="" />
            </div>
            <div className="absolute text-center top-[50%] right-[40%] text-white ">
            <h1 className="text-6xl font-mono font-bold">JONATHAN KUBB</h1> 
            <h1 className="text-4xl  font-bold">PHOTOGRAPHY</h1>
            <p className="text-2xl">Based in New York since 2015</p>
            
            </div>
        </div>
    );
};

export default Slider;