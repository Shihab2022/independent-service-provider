import React from 'react';
import headerLogo from '../../../Images/headerLogo.png'
const Header = () => {
    return (
        <div className="sticky top-0 " >
         <div className="text-white  bg-zinc-800  ">
  <div className="container mx-auto md:px-28  flex flex-wrap  p-5 flex-col md:flex-row items-center">
  <img src={ headerLogo} alt="" />
    <nav className="md:ml-auto  flex flex-wrap items-center font-mono md:text-xl  justify-center">
      <button className="mr-5 hover:text-amber-500">Home</button>
      <button className="mr-5 hover:text-amber-500">Check Out</button>
      <button className="mr-5 hover:text-amber-500">Blogs</button>
      <button className="mr-5 hover:text-amber-500">About</button>
      <button className='px-6 text-black py-2 rounded-full md:mr-5 bg-amber-300'>Login</button>
    </nav>

  </div>
</div>
        </div>
    );
};

export default Header;