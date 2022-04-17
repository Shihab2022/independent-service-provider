import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../Images/headerLogo.png'
const Header = () => {
    return (
        <div className="sticky top-0 " >
         <div className="text-white  bg-zinc-800  ">
  <div className="container mx-auto md:px-28  flex flex-wrap  p-5 flex-col md:flex-row items-center">
  <img src={ headerLogo} alt="" />
    <nav className="md:ml-auto  flex flex-wrap items-center font-mono md:text-xl  justify-center">
      <Link to='/'  className="mr-5 hover:text-amber-500">Home</Link>
      <Link to='/checkOut' className="mr-5 hover:text-amber-500">Check Out</Link>
      <Link to='/blog' className="mr-5 hover:text-amber-500">Blogs</Link>
      <Link to='/about' className="mr-5 hover:text-amber-500">About</Link>
      <Link to='/login' className='px-6 text-black py-2 rounded-full md:mr-5 bg-amber-300'>Login</Link>
    </nav>

  </div>
</div>
        </div>
    );
};

export default Header;