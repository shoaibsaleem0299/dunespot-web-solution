import React from 'react';

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="relative bg-white py-20 px-6 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5 z-0">
        <img
          src="/images/map-bg.png" // replace with the correct path
          alt="Background Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h2 className="text-green-700 font-bold text-xl">WHAT WE DO</h2>
        <h3 className="text-green-900 font-bold text-4xl mt-4 mb-6">
          POWERING YOUR DIGITAL SUCCESS
        </h3>
        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          Dune Spot Web Solutions offers a full range of online services to boost your business.
          From website creation to marketing strategies, we provide the tools you need to succeed
          in today’s digital world. Let us help you stand out and reach your target audience effectively.
        </p>
        <h4 className="text-green-800 font-bold text-3xl mb-10">EXPLORE OUR EXPERTISE</h4>

        {/* Hexagon Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          <HexagonCard text="GRAPHIC DESIGNING" />
          <HexagonCard text="WEBSITE DEVELOPMENT" />
          <HexagonCard text="DIGITAL MARKETING" />
          <HexagonCard text="SEARCH ENGINE OPTIMIZATION" />
          <HexagonCard text="APP DEVELOPMENT" />
          <HexagonCard text="PPC OR GOOGLE ADS" />
          <HexagonCard text="UI/UX DESIGNING" />
          <HexagonCard text="CONTENT WRITING" />
        </div>
      </div>
    </div>
  );
};

const HexagonCard: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative w-40 h-40">
    <div className="hexagon w-full h-full bg-green-700 text-white font-bold flex items-center justify-center text-center">
      {text}
    </div>
  </div>
);

export default WhatWeDoSection;
