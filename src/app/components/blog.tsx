import Image from 'next/image';
import React from 'react';

const TransformSection: React.FC = () => {
  return (
    <div className="relative bg-white py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="relative w-full lg:w-2/5 text-white">
        <div className="bg-green-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">TRANSFORM YOUR DIGITAL PRESENCE</h2>
          <p className="text-lg lg:text-xl mb-8">Boost Your Business Online</p>
          <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800">
            Explore Our Solutions
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-8 lg:mt-0 w-full lg:w-3/5 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="icon mb-4"></div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-md">Read more</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="icon mb-4"></div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-md">Read more</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="icon mb-4"></div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-md">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default TransformSection;
