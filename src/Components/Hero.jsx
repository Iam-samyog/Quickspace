// import React from "react";

// const Hero = () => {
//   return (
//     <>
//       <div className="container mx-auto max-w-[1250px] overflow-x-hidden">
//         {/* Left section of the hero */}
//         <section className=" px-4 py-16 flex flex-col md:flex-row items-center">
//           {/* Left side - Text Content */}
//         <div className="w-full md:w-1/2 pr-8 relative">
//             <div className="absolute left-32 -top-7 w-full h-full  float-up">
//               <img src="/img/Icons/Ellipse 95.png" alt="Ellipse" />
//             </div>
//             <div className="absolute left-110 -top-16 w-full h-full  float-down">
//               <img src="/img/Icons/Vector.png" alt="Vector" />
//             </div>

//             <h1 className="text-[70px] leading-[80px] primary-font font-bold text-gray-900 mb-2 tracking-[-5px]">
//               Smart-Thinking & Innovative Solution.
//             </h1>

//             <p className="secondary-color secondary-font font-normal leading-[28px] text-[16px] mb-8">
//               QuickSpace is your all-in-one solution for creating stunning,
//               responsive websites effortlessly. Build, launch, and manage your
//               digital presence.
//             </p>

//             <div className="flex flex-col secondary-font text-[16px] font-bold sm:flex-row gap-4">
//               <button className="bg-[#3921F5] text-white px-8 py-4 rounded-lg hover:bg-black transition-colors duration-300 cursor-pointer">
//                 Discover More
//               </button>
//               <button className="flex items-center border border-gray-300 text-gray-800 px-8 py-4 rounded-lg hover:bg-black  hover:text-[#3921F5] transition-colors duration-300 cursor-pointer">
//                 Explore Service
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="flex flex-col text-[16px] secondary-font sm:flex-row mt-10 gap-2 sm:gap-3">
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-blue-700 mr-2"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="text-[#141F39]">Get 15 days free trial</span>
//               </div>
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-blue-700 mr-2"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="text-[#141F39]">
//                   No credit card is required
//                 </span>
//               </div>
//               <div className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-blue-700 mr-2"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="text-[#141F39]">Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//            {/* Right section - Images */}
//            <div className="w-full md:w-1/2 relative">
//             <div className="absolute -top-[250px] md:-top-[310px] -left-5 z-2 w-[250px] h-[220px] sm:w-[300px] sm:h-[240px]">
//               <img src='/public/img/Graphs/Card 01.png' className="object-contain" alt="Card 1" />
//             </div>
//             <div className="absolute -bottom-[50px] left-[250px] z-1 w-[300px] h-[280px] sm:w-[316px] sm:h-[300px]">
//               <img src='/public/img/Graphs/Card 02.png' className="object-contain" alt="Card 2" />
//             </div>
//             <div className="absolute -bottom-[200px] left-[100px] w-[350px] h-[350px] sm:w-[353px] sm:h-[353.97px]">
//               <img src='/public/img/Graphs/Card 03.png' className="object-contain" alt="Card 3" />
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto max-w-[1250px] overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 py-8 md:py-9 lg:py-12 flex flex-col md:flex-row items-center">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-6 lg:pr-8 relative mb-16 md:mb-0">
          <div className="absolute left-1/4 -top-7 float-up hidden md:block">
            <img src="/img/Icons/Ellipse 95.png" alt="Ellipse" className="w-8 md:w-10" />
          </div>
          <div className="absolute right-1/4 -top-16 float-down hidden md:block">
            <img src="/img/Icons/Vector.png" alt="Vector" className="w-12 md:w-16" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[70px] leading-tight md:leading-tight lg:leading-[80px] primary-font font-bold text-gray-900 mb-3 md:mb-2 tracking-tight md:tracking-[-3px] lg:tracking-[-5px]">
            Smart-Thinking & Innovative Solution.
          </h1>

          <p className="secondary-color secondary-font font-normal leading-normal md:leading-[28px] text-base mb-6 md:mb-8">
            QuickSpace is your all-in-one solution for creating stunning,
            responsive websites effortlessly. Build, launch, and manage your
            digital presence.
          </p>

          <div className="flex flex-col sm:flex-row secondary-font text-base font-bold gap-3 md:gap-4">
            <button className="bg-[#3921F5] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-black transition-colors duration-300 cursor-pointer">
              Discover More
            </button>
            <button className="flex items-center justify-center sm:justify-start border border-gray-300 text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-200 hover:text-black transition-colors duration-300 cursor-pointer">
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

          <div className="flex flex-col text-sm sm:text-base secondary-font sm:flex-row mt-8 md:mt-10 gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-blue-700 mr-2"
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
                className="h-4 w-4 md:h-5 md:w-5 text-blue-700 mr-2"
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
                className="h-4 w-4 md:h-5 md:w-5 text-blue-700 mr-2"
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

        {/* Right section - Images */}
        <div className="w-full md:w-1/2 relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
  <div className="">
    <img 
      src='/public/img/Graphs/Card 01.png' 
      className="object-contain absolute top-0 md:-top-2 lg:-top-8 xl:-top-10 left-0 md:-left-2 z-10 w-[280px] h-[180px] sm:w-[220px] sm:h-[180px] md:w-[250px] md:h-[220px] lg:w-[340px] lg:h-[280px] twinkle-1 " 
      alt="Card 1" 
    />
  </div>
  <div className="">
    <img 
      src='/public/img/Graphs/Card 02.png' 
      className="object-contain absolute bottom-[140px] sm:bottom-[140px] md:bottom-48 right-15 sm:right-[130px] md:left-[180px] lg:left-[250px] z-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[230px] md:w-[280px] md:h-[260px] lg:w-[316px] lg:h-[300px] twinkle-2" 
      alt="Card 2" 
    />
  </div>
  <div className="">
    <img 
      src='/public/img/Graphs/Card 03.png' 
      className="object-contain absolute -bottom-2 sm:bottom-1 md:-bottom-2 lg:bottom-0 left-20 sm:left-20 md:left-24 z-0 w-[240px] h-[280px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[353px] lg:h-[353px] twinkle-3" 
      alt="Card 3" 
    />
  </div>
</div>

      </section>
    </div>
  );
};

export default Hero;