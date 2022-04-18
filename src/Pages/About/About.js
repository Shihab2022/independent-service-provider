import React from 'react';
import aboutMe from '../../Images/aboutMe.jpg'
const About = () => {
    return (
        <div>
 <section className="text-gray-600 bg-amber-100 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 shadow-lg object-cover object-center rounded" alt="hero" src={aboutMe}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MD : SHIHAB UDDIN</h1>
      <p className="mb-8 leading-relaxed">
        I am MD SHIHAB UDDIN . I want to become a full stack developer . I will hard work to achieve my goal . I will collect information from various resource for achieve my goal . I will complete programming hero " complete web developing course " properly . Then I will try to get an Internship . If I will get an internship I will continue my learning properly.
      </p>
  
    </div>
  </div>
</section>
        </div>
    );
};

export default About;