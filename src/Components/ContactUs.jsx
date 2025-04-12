import { useState } from 'react';

export default function ContactUs() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Text and form */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">
            Ready To Use Our App<br />
            With No Hidden Malware
          </h1>
          <p className="text-gray-600 mb-10 max-w-md">
            Etiam euismod volutpat lacus fringilla henr. Mauris lobortis purus velit quis. Nunc mollis venenatis metus nec aliquet.
          </p>
          
          <div className="w-full max-w-md">
            <div className="bg-gray-50 rounded-lg p-2 flex mb-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-transparent outline-none px-4 py-2 text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p className="text-sm text-gray-500">
              Already a member? <a href="#" className="text-blue-600 font-medium">Sign In</a>
            </p>
          </div>
        </div>
        
        {/* Right side - App Screenshots */}
        <div className="lg:w-1/2 relative">
          {/* Yellow decorative curves */}
          <div className="absolute top-0 right-0 w-64 h-64">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-yellow-400">
              <path d="M10,50 Q30,5 50,50 T90,50" strokeWidth="1" className="opacity-80" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-yellow-400">
              <path d="M10,50 Q30,95 50,50 T90,50" strokeWidth="1" className="opacity-80" />
            </svg>
          </div>
          
          {/* Blue circle background */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="bg-blue-600 rounded-full w-96 h-96 flex items-center justify-center">
              {/* App screenshots mockup */}
              <div className="relative w-4/5 h-4/5">
                {/* Graph chart */}
                <div className="absolute top-0 left-0 bg-white rounded-lg shadow-lg p-3 w-full">
                  <div className="h-36">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>07:00</span>
                      <span>10:00</span>
                      <span>13:00</span>
                    </div>
                    <div className="h-20 relative mt-4">
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
                      <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gray-200"></div>
                      <div className="absolute bottom-2/4 left-0 right-0 h-px bg-gray-200"></div>
                      <div className="absolute bottom-3/4 left-0 right-0 h-px bg-gray-200"></div>
                      <div className="absolute bottom-full left-0 right-0 h-px bg-gray-200"></div>
                      
                      {/* Blue line chart */}
                      <svg viewBox="0 0 100 30" className="absolute inset-0 w-full h-full">
                        <path d="M0,25 L10,20 L20,15 L30,5 L40,10 L50,8 L60,15 L70,15 L80,20 L90,22 L100,15" 
                          fill="none" stroke="blue" strokeWidth="1.5" className="text-blue-500" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-3">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                    </div>
                  </div>
                </div>
                
                {/* Timer card */}
                <div className="absolute top-5 right-5 bg-white rounded-lg shadow-lg p-3 w-32">
                  <div className="text-xs text-gray-500 mb-1">Time Duration</div>
                  <div className="font-bold text-2xl">1.46<span className="text-sm text-gray-400">h</span></div>
                </div>
                
                {/* Todo list card */}
                <div className="absolute top-1/2 right-0 bg-white rounded-lg shadow-lg p-3 w-40">
                  <div className="text-xs text-gray-500 mb-1">Scheduled time for work</div>
                  <div className="mt-2">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                      <div>
                        <div className="text-xs font-medium">Project Management</div>
                        <div className="text-xs text-gray-400">Today 12:30-15:30</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 rounded-full bg-blue-600 mr-2"></div>
                      <div>
                        <div className="text-xs font-medium">Source Analysis</div>
                        <div className="text-xs text-gray-400">Today 14:00-15:00</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                      <div>
                        <div className="text-xs font-medium">Onboarding Design</div>
                        <div className="text-xs text-gray-400">Today 15:30-16:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats card */}
                <div className="absolute bottom-10 left-10 bg-white rounded-lg shadow-lg p-3 w-36">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm">To-Do List</div>
                    <div className="bg-green-100 text-green-600 text-xs py-1 px-2 rounded">Completed</div>
                  </div>
                  <div className="text-4xl font-bold">12</div>
                </div>
                
                {/* Task list card */}
                <div className="absolute bottom-24 left-0 bg-white rounded-lg shadow-lg p-3 w-32">
                  <div className="text-xs font-medium mb-2">To-Do List</div>
                  <div className="mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="text-xs">Creating wireframe</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="text-xs">Working on UI kit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}