import { useState } from 'react';

export default function ContactUs() {
  const [email, setEmail] = useState('');

  return (
    <div className="">
      <div className="container mx-auto max-w-[1250px] px-4 sm:px-6 py- md:py-16 flex flex-col lg:flex-row items-center secondary-font justify-center">
        {/* Left side - Text and form */}
        <div className="w-full lg:w-1/2 mb-8 md:mb-12 lg:mb-0 lg:pr-8 xl:pr-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl primary-font font-bold text-navy-900 mb-4">
            Ready To Use Our App With No Hidden Malware
          </h1>
          <p className="text-gray-600 mb-6 md:mb-10 max-w-md">
            Built for Trust — No Surprises Inside
          </p>  
          
          <div className="w-full max-w-md">
            <div className="bg-gray-50 rounded-lg p-2 flex mb-3 shadow">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-transparent outline-none px-4 py-2 text-gray-600 text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Already a member? <a href="#" className="text-[#5359FF] font-bold">Sign In</a>
            </p>
          </div>
        </div>
        
        {/* Right side - App Screenshots */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/img/Image (3).png" 
              className="twinkle-1 max-w-full sm:max-w-md md:max-w-lg lg:max-w-none"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}