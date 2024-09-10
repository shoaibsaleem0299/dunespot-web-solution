import Image from 'next/image';
import React from 'react';


const WhatWeDoSection = () => {
  return (
    <div className='whatwedosection  text-center bg-gray-100'>
      <h2 className='text-xl md:text-3xl font-semibold text-green-800 py-5'>WHAT WE DO</h2>
      <h1 className='text-2xl md:text-4xl font-bold text-green-900 pb-2'>POWERING YOUR DIGITAL SUCCESS</h1>
      <hr className='my-4 w-1/2 mx-auto' />
      <p className='text-gray-700 max-w-xl mx-auto mb-10 py-2'>Dune Spot Web Solutions offers a full range of online services to boost your business.
        From website creation to marketing strategies, we provide the tools you need to succeed
        in today’s digital world. Let us help you stand out and reach your target audience effectively.</p>
      <h1 className='text-2xl md:text-4xl font-bold text-green-900 pb-2'>EXPLORE OUR EXPERTISE</h1>
      <hr className='my-4 w-1/2 mx-auto' />
      <div className="hex-wrap">
        <div className="hex web-dev">
            <div className="icon">
                <i className="fa fa-laptop"></i>
            </div>
            <div className="ribbon">Web Development</div>
        </div>
        <div className="hex mobile-app">
            <div className="icon">
                <i className="fa fa-mobile"></i>
            </div>
            <div className="ribbon">Mobile App Development</div>
        </div>
        <div className="hex seo">
            <div className="icon">
                <i className="fa fa-search"></i>
            </div>
            <div className="ribbon">SEO</div>
        </div>
        <div className="hex ui-ux">
            <div className="icon">
                <i className="fa fa-paint-brush"></i>
            </div>
            <div className="ribbon">UI/UX Design</div>
        </div>
        <div className="hex e-commerce">
            <div className="icon">
                <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="ribbon">E-Commerce</div>
        </div>
        <div className="hex digital-marketing">
            <div className="icon">
                <i className="fa fa-bullhorn"></i>
            </div>
            <div className="ribbon">Digital Marketing</div>
        </div>
        <div className="hex content-writing">
            <div className="icon">
                <i className="fa fa-pencil-alt"></i>
            </div>
            <div className="ribbon">Content Writing</div>
        </div>
        <div className="hex cloud-solutions">
            <div className="icon">
                <i className="fa fa-cloud"></i>
            </div>
            <div className="ribbon">Cloud Solutions</div>
        </div>
        <div className="hex data-analytics">
            <div className="icon">
                <i className="fa fa-chart-line"></i>
            </div>
            <div className="ribbon">Data Analytics</div>
        </div>
        <div className="hex tech-support">
            <div className="icon">
                <i className="fa fa-headset"></i>
            </div>
            <div className="ribbon">Tech Support</div>
        </div>
    </div>

    </div>
  );
};

export default WhatWeDoSection;
