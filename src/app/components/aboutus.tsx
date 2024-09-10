import Image from 'next/image';
import React from 'react';

const AboutSection: React.FC = () => {
  return (

    <div className='about-section px-8 pt-10 flex flex-row flex-wrap w-full'>
      <div className='about-left w-1/2' >
        <div className='z-0 absolute -left-[22%]'>
          <Image
            className='py-6 opacity-100'
            src="/images/map-bg.png"
            alt="map background"
            width={1100}
            height={1100}
          />
        </div>
        <div className='z-10'>
          <Image
            className='relative bottom-16 left-4'
            src="/images/about-text.png"
            alt="map background"
            width={600}
            height={100}
          />
          <div className='relative bottom-48 left-10'>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Expert Digital Services for Modern Businesses</h1>
            <p className="text-gray-600 mb-6">
              At Dune Spot Web Solutions, we're passionate about helping businesses thrive online. Since our founding, we’ve been at the forefront of digital innovation, constantly adapting to the ever-changing landscape of the internet. Our team of skilled professionals combines creativity with technical expertise to deliver solutions that drive real results for our clients.
            </p>
            <ul className="list-none text-gray-600 mb-6">
              <li className="flex items-center mb-2">
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={50}
                  height={50}
                />
                From eye-catching websites to powerful marketing campaigns
              </li>
              <li className="flex items-center">
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={50}
                  height={50}
                />
                From SEO strategies that boost visibility to user-friendly mobile apps
              </li>
            </ul>
            <div className='flex p-4 '>
              <button className="relative px-2 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  Take The First Step
                </span>
              </button>
              <button className="relative px-2 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300  focus:ring-4 focus:outline-none focus:ring-lime-200 ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                  Explore Our Solutions
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className= 'about-right w-1/2'>
        <Image
          className='lg:absolute lg:-right-[15%] '
          src="/images/burj.png"
          alt="arrow"
          width={1000}
          height={1000}
        />
      </div>
    </div>
    
  );
};

export default AboutSection;
