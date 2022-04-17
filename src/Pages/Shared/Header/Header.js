import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../Images/headerLogo.png'
import CustomLink from '../../Login/CustomLink/CustomLink';
const Header = () => {
    return (
        <div className="sticky top-0 " >
         <div className="text-white  bg-zinc-800  ">
  <div className="container mx-auto md:px-28  flex flex-wrap  p-5 flex-col md:flex-row items-center">
  <img src={ headerLogo} alt="" />
    <nav className="md:ml-auto  flex flex-wrap items-center font-mono md:text-xl  justify-center">
      <CustomLink to='/'  className="mr-5 hover:text-amber-500">Home</CustomLink>
      <CustomLink to='/checkOut' className="mr-5 hover:text-amber-500">Check Out</CustomLink>
      <CustomLink to='/blog' className="mr-5 hover:text-amber-500">Blogs</CustomLink>
      <CustomLink to='/about' className="mr-5 hover:text-amber-500">About</CustomLink>
      <Link to='/login' className='px-6 text-black py-2 rounded-full md:mr-5 bg-amber-300'>Login</Link>
    </nav>

  </div>
</div>
        </div>
    );
};

export default Header;