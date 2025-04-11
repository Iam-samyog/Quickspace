import React from 'react';

export default function StatsCard(){
  return (
    <div className="flex flex-col secondary-font py-[120px] items-center justify-center  bg-[#3921F5] text-white ">
      <div className="container mx-auto  max-w-[1350px] px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 primary-font">We Help To GrowYour Business</h1>
        
        <p className="max-w-3xl mx-auto text-lg mb-18 opacity-90">
        Quickspace is your all-in-one SaaS solution to build, launch, and manage your online presence effortlessly. From automation to analytics, we help you scale smarter and faster.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-[140px] lg:gap-[232px]">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 primary-font">142</h2>
            <p className="text-[16px]">New Features</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 primary-font">28k</h2>
            <p className="text-[16px]">APP Download</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 primary-font">53M</h2>
            <p className="text-[16px]">Active Users</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 primary-font">90%</h2>
            <p className="text-[16px]">Positive Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}