import Image from 'next/image';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-white ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h2 className="text-lg font-bold text-green-600 mb-2">About Dune Spot Web Solutions</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Expert Digital Services for Modern Businesses</h1>
          <p className="text-gray-600 mb-6">
            At Dune Spot Web Solutions, we're passionate about helping businesses thrive online. Since our founding, we’ve been at the forefront of digital innovation, constantly adapting to the ever-changing landscape of the internet. Our team of skilled professionals combines creativity with technical expertise to deliver solutions that drive real results for our clients.
          </p>
          <ul className="list-none text-gray-600 mb-6">
            <li className="flex items-center mb-2">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              From eye-catching websites to powerful marketing campaigns
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              From SEO strategies that boost visibility to user-friendly mobile apps
            </li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-white text-gray-800 border border-yellow-500 px-6 py-2 rounded hover:bg-yellow-100 transition">
              Take The First Step
            </button>
            <button className="bg-white text-gray-800 border border-green-500 px-6 py-2 rounded hover:bg-green-100 transition">
              Explore Our Solutions
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/burj.png"
            alt="Burj Al Arab background"
            width={700}
            height={700}
            className='h-screen w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
