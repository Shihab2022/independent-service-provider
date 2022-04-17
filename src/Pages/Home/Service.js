import React from 'react';
import useServiceData from '../../hook/Data';
import ServiceDetails from './ServiceDetails';

const Service = () => {
    const [serviceData]=useServiceData()
    console.log(serviceData)
    return (
        <div className="bg-emerald-50">
            <section className="text-gray-600 md:pb-0 pb-10 body-font">
  <div className="container lg:px-5  lg:py-14  mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="md:text-4xl text-2xl title-font mb-4 text-gray-900 ">Hello! I'm Jonathon Kubb, a professional Photographer.</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Based in New York, I specialize in landscape, advertorial and conceptual photography.</p>

      <h1 className='mt-5 text-4xl  font-bold underline hover:text-yellow-500 text-red-700'>My Service</h1>
    </div>
  <div className='grid md:grid-cols-2 lg:px-28 md:px-2 px-5  lg:gap-10 gap-5'>
  {
       serviceData.map(data =>  <ServiceDetails data={data} kay={data.id}></ServiceDetails>)
       
   }
 
  </div>
  </div>
</section>
        </div>
    );
};

export default Service;
