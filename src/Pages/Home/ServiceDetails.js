import React from 'react';

const ServiceDetails = ({data}) => {
    const {category,price,about,picture}=data
    console.log(data)
    return (
        <div>
          <div className="flex flex-wrap -m-4">
<div className="p-4">
  <div className="h-full  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-52 object-cover object-center sm:mb-0 mb-4" src={picture}/>
    <div className="flex-grow sm:pl-8">
      <h2 className="title-font text-3xl mb-3 font-mono font-bold text-gray-900">{category}</h2>
      <p className="mb-4">{about}</p>
      <p className=" text-xl"> </p>
      <p className="mb-4 text-xl">Per day : <span className="text-yellow-400 font-bold text-2xl">{price}</span></p>
    <button className='px-10 text-white text-xl py-2 hover:shadow-lg rounded-full md:mr-5 bg-amber-500'>Hire</button>
    </div>
  </div>
</div>


</div> 
        </div>
    );
};

export default ServiceDetails;