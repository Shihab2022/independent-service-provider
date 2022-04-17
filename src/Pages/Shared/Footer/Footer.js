import React from 'react';
import headerLogo from '../../../Images/headerLogo.png'
import { FaFacebook,FaPinterestP,FaLinkedinIn,FaDribbble,FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="lg:px-32 sm:px-10 px-5 bg-zinc-800">
            <footer className="text-white body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <img src={headerLogo} alt="" />
     
    </div>
    <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2014 Kubb. All rights reserved.
    
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <button className="border-yellow-600 border-2 p-2 hover:bg-slate-50 hover:text-zinc-800">
       <FaTwitter/>
      </button>
      <button className="border-yellow-600 border-2 p-2 ml-4 hover:bg-slate-50 hover:text-zinc-800 ">
     <FaLinkedinIn/>
      </button>
      <button className="border-yellow-600 border-2 p-2 ml-4 hover:bg-slate-50 hover:text-zinc-800 ">
        <FaPinterestP/>
      </button>
      <button className="border-yellow-600 border-2 p-2 ml-4 hover:bg-slate-50 hover:text-zinc-800 ">
      <FaFacebook/>
      </button>
      <button className="border-yellow-600 border-2 p-2 ml-4 hover:bg-slate-50 hover:text-zinc-800 ">
      <FaDribbble/>
      </button>
    </span>
  </div>
</footer>
        </div>
    );
};

export default Footer;