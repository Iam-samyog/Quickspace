import React from 'react';

export default function BusinessGrow() {
  return (
    <div className="w-full max-w-[1250px] secondary-font  mx-auto px-4 py-12 bg-white text-center">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 primary-font">How To Grow Your Business</h1>
      <p className="text-gray-600 max-w-lg mx-auto mb-16">
        Class aptent taciti sociosqu ad litora torquen conubia nostramase
        inceptos himenaeo. Phasellus metus nisi euismod eget lorem.
      </p>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">
        {/* Analytics Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex-1 flex flex-col items-center">
          <div className="text-indigo-600 mb-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M15 20 H65" stroke="currentColor" strokeWidth="2" />
              <circle cx="25" cy="35" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M30 50 L40 40 L50 45 L60 30" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M30 50 L20 50" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 primary-font">Active User Analytics</h2>
          <p className="text-gray-500">
            Class aptent taciti sociosqu litora torquen conubia nostram.
          </p>
        </div>

        {/* Coding Development Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex-1 flex flex-col items-center">
          <div className="text-red-400 mb-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M15 20 H65" stroke="currentColor" strokeWidth="2" />
              <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" />
              <circle cx="30" cy="20" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" />
              <path d="M25 40 L15 50 L25 60" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M45 40 L55 50 L45 60" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="65" cy="55" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M65 51 V59" stroke="currentColor" strokeWidth="2" />
              <path d="M61 55 H69" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4  primary-font">Smart Coding Development</h2>
          <p className="text-gray-500">
            Morbi eget aliquet finibus, best condimentum aliquet quam.
          </p>
        </div>

        {/* User Interface Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex-1 flex flex-col items-center">
          <div className="text-green-500 mb-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="10" width="40" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="25" y="20" width="30" height="10" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="25" y="35" width="30" height="5" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="25" y="45" width="20" height="5" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="25" y="55" width="15" height="5" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="58" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M50 56 V60" stroke="currentColor" strokeWidth="2" />
              <path d="M48 58 H52" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4  primary-font">User Friendly Interface</h2>
          <p className="text-gray-500">
            Quisque magna, sollicitudin vitae, lobortis feugiat arcu.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="text-center">
        <p className="text-gray-600">
          Approx <span className="text-indigo-500 text-2xl font-bold">875+</span> team members ready to online support for you
        </p>
      </div>
    </div>
  );
}