import React from "react";
import about1 from "../../Images/about1.jpg";
const AboutMe = () => {
  return (
    <div className="md:px-10 bg-lime-50">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-3/5 w-full">
              <div className="h-full flex justify-between p-8 rounded">
                <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-42 md:w-2/5  w-5/6 mb-10 md:mb-0">
                    <p className="md:pb-5 pb-2 ml-2 md:ml-5 text-xl font-semibold ">
                      A LITTLE ABOUT ME
                    </p>
                    <img
                      className="object-cover object-center md:h-[50%] rounded"
                      alt="hero"
                      src={about1}
                    />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="text-xl mb-3 font-semibold">
                    I am highly acclaimed professional photography.
                    </h1>
                    <p className=" leading-relaxed">
                    I have been supporting producing commercial photography content across a wide range of sectors of the product advertising industry for nearly four decades successfully defying all commercial sectors. My work includes food and drinks photography, jewellery , fashion, beauty, cosmetics, artworks, electronic equipment as well as shooting special effects and projects including dynamic high speed action shots such liquid pours, water splashes, bubbles, powder explosions, ink spreads, in-camera effects and optics such as light reflections and refractions. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-2/5  w-full">
              <div className="h-full  py-8 rounded">
                <h1 className="my-8 text-xl font-semibold">MY SKILLS</h1>
            
                <div class="mb-2 text-base font-medium">Photoshop - 90%</div>
                <div class="w-full mb-5 bg-gray-300 rounded-md h-4">
                  <div
                    class="bg-gray-600 h-4  rounded-md"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <div class="mb-2 text-base font-medium ">Final Cut - 80%</div>
                <div class="w-full mb-5 bg-gray-200 rounded-md h-4">
                  <div
                    class="bg-blue-600 rounded-md h-4"
                    style={{ width: "80%" }}
                  ></div>
                </div>

                <div class="mb-2 text-base font-medium ">Studio Photography 85%</div>
                <div class="w-full mb-5 bg-gray-200 rounded-md h-4">
                  <div
                    class="bg-rose-600 rounded-md h-4"
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <div class="mb-2 text-base font-medium ">
                Motion Video 75%
                </div>
                <div class="w-full mb-5 bg-gray-200 rounded-md h-4">
                  <div
                    class="bg-green-600 rounded-md h-4"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
