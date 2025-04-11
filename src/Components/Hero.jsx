import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1250px] overflow-x-hidden">
        {/* Left section of the hero */}
        <section className=" px-4 py-16 flex flex-col md:flex-row items-center">
          {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 pr-8 relative">
            <div className="absolute left-32 -top-7 w-full h-full  float-up">
              <img src="/img/Icons/Ellipse 95.png" alt="Ellipse" />
            </div>
            <div className="absolute left-110 -top-16 w-full h-full  float-down">
              <img src="/img/Icons/Vector.png" alt="Vector" />
            </div>

            <h1 className="text-[70px] leading-[80px] primary-font font-bold text-gray-900 mb-2 tracking-[-5px]">
              Smart-Thinking & Innovative Solution.
            </h1>

            <p className="secondary-color secondary-font font-normal leading-[28px] text-[16px] mb-8">
              QuickSpace is your all-in-one solution for creating stunning,
              responsive websites effortlessly. Build, launch, and manage your
              digital presence.
            </p>

            <div className="flex flex-col secondary-font text-[16px] font-bold sm:flex-row gap-4">
              <button className="bg-[#3921F5] text-white px-8 py-4 rounded-lg hover:bg-black transition-colors duration-300 cursor-pointer">
                Discover More
              </button>
              <button className="flex items-center border border-gray-300 text-gray-800 px-8 py-4 rounded-lg hover:bg-black  hover:text-[#3921F5] transition-colors duration-300 cursor-pointer">
                Explore Service
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col text-[16px] secondary-font sm:flex-row mt-10 gap-2 sm:gap-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#141F39]">Get 15 days free trial</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#141F39]">
                  No credit card is required
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-700 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#141F39]">Cancel anytime</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 pr-8 relative">
            
          </div>
          
        </section>
      </div>
    </>
  );
};

export default Hero;
