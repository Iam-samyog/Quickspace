import { useState } from 'react';
import { Home, CreditCard, Wallet, User, ChevronLeft, ChevronRight, Plus, HelpCircle } from 'lucide-react';

export default function BankingApp() {
  const [showHelp, setShowHelp] = useState(false);
  
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 p-4 font-sans">
      <div className="flex w-full max-w-5xl">
        {/* Left Side - Mobile App UI */}
        <div className="w-1/2 p-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto">
            {/* Status Bar */}
            <div className="bg-white p-2 flex justify-between items-center">
              <div className="text-xs font-medium">9:41</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 flex items-center">
                  <div className="w-full h-2 bg-black rounded-full"></div>
                </div>
                <div className="text-xs font-medium">100%</div>
              </div>
            </div>
            
            {/* Header */}
            <div className="p-4 flex items-center">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
              <div className="flex-1 text-center font-medium">Transaction</div>
            </div>
            
            {/* Card Section */}
            <div className="px-4 flex">
              <div className="bg-blue-900 rounded-l-lg p-3 flex flex-col justify-between">
                <div className="w-6 h-6 bg-blue-800 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-700 rounded"></div>
                </div>
                <div className="w-6 h-6 bg-blue-800 rounded"></div>
              </div>
              
              <div className="bg-gray-800 flex-1 p-3 flex flex-col justify-between">
                <div className="text-xs text-gray-400">Credit Card</div>
                <div>
                  <div className="text-white font-mono text-xs my-1">5678 4578 9715 4713</div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>12/28</span>
                    <span>JAMIE LOPEZ</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-500 rounded-r-lg p-3 flex flex-col justify-between items-end">
                <div className="text-xs text-white font-medium">Platinum</div>
                <div className="text-white font-medium">+3.4%</div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="p-4 flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="text-white text-lg">$</div>
                </div>
                <div className="text-xs mt-1">Withdraw</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <div className="text-white text-lg">↑</div>
                </div>
                <div className="text-xs mt-1">Transfer</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="text-white text-lg">+</div>
                </div>
                <div className="text-xs mt-1">Deposit</div>
              </div>
            </div>
            
            {/* Analytics Section */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium">Analytics</div>
                <div className="text-xs text-gray-500">January 2023</div>
              </div>
              
              <div className="relative h-40 flex justify-center items-center">
                <div className="w-32 h-32 rounded-full border-8 border-gray-200 relative">
                  <div className="absolute inset-0 border-8 border-blue-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
                  <div className="absolute inset-0 border-8 border-red-400 rounded-full" style={{ clipPath: 'polygon(50% 50%, 0% 0%, 50% 0%)' }}></div>
                  <div className="absolute inset-0 border-8 border-green-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 0% 0%, 0% 100%, 30% 100%)' }}></div>
                </div>
                <ChevronLeft className="absolute left-0 w-5 h-5 text-gray-700" />
                <ChevronRight className="absolute right-0 w-5 h-5 text-gray-700" />
              </div>
              
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <div className="text-sm flex-1">Expenses</div>
                  <div className="text-sm">46%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <div className="text-sm flex-1">Income</div>
                  <div className="text-sm">52%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <div className="text-sm flex-1">Savings</div>
                  <div className="text-sm">48%</div>
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation */}
            <div className="flex border-t">
              <div className="flex-1 py-3 flex flex-col items-center">
                <Home className="w-5 h-5 text-gray-400" />
                <div className="text-xs text-gray-400 mt-1">Home</div>
              </div>
              <div className="flex-1 py-3 flex flex-col items-center border-t-2 border-indigo-500">
                <CreditCard className="w-5 h-5 text-indigo-500" />
                <div className="text-xs text-indigo-500 mt-1">Transaction</div>
              </div>
              <div className="flex-1 py-3 flex flex-col items-center">
                <Wallet className="w-5 h-5 text-gray-400" />
                <div className="text-xs text-gray-400 mt-1">Wallet</div>
              </div>
              <div className="flex-1 py-3 flex flex-col items-center">
                <User className="w-5 h-5 text-gray-400" />
                <div className="text-xs text-gray-400 mt-1">Profile</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Summary Section */}
        <div className="w-1/2 p-6">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Performance Is The Key To Most People Achieving A Better Future
              </h1>
              <p className="text-gray-600">
                Etiam euismod odio euismod lacus fringilla hendrer.
              </p>
            </div>
            
            {/* Cashback Card */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 relative">
              <div className="text-sm text-gray-600 mb-1">Total cashback</div>
              <div className="flex items-baseline mb-2">
                <div className="text-xl font-bold">$1,531</div>
                <div className="text-xs text-green-500 ml-2">+5.4%</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">1</div>
                <div className="w-6 h-6 rounded-full bg-red-400 flex items-center justify-center text-white text-xs ml-1">2</div>
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs ml-1">3</div>
                <div className="ml-2 h-1 flex-1 bg-purple-100 rounded-full">
                  <div className="h-1 w-1/3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Spent Card */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="mb-2">
                <div className="text-3xl font-bold">$328</div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Spent this month</span>
                  <span className="text-green-500 ml-2">34%</span>
                  <span className="text-green-500">↑</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm">All Spent Summary</div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            {/* Feature List */}
            <div className="space-y-1">
              <div className="border-b border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <div className="font-medium">Custom Edit Tool Application</div>
                  <button className="text-indigo-600 font-bold text-xl" onClick={toggleHelp}>+</button>
                </div>
                {showHelp && (
                  <div className="mt-2 text-sm text-gray-600">
                    This feature allows you to customize your financial tools and applications according to your preferences.
                  </div>
                )}
              </div>
              
              <div className="border-b border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <div className="font-medium">Built In Safty Chat Mode Enabled</div>
                  <button className="text-indigo-600 font-bold text-xl" onClick={toggleHelp}>+</button>
                </div>
                {showHelp && (
                  <div className="mt-2 text-sm text-gray-600">
                    Secure communication channel for discussing sensitive financial information with customer support.
                  </div>
                )}
              </div>
              
              <div className="border-b border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <div className="font-medium">Foster Trust Builds System Always Open</div>
                  <button className="text-indigo-600 font-bold text-xl" onClick={toggleHelp}>+</button>
                </div>
                {showHelp && (
                  <div className="mt-2 text-sm text-gray-600">
                    Our trust building system is available 24/7 to help you verify transactions and manage account security.
                  </div>
                )}
              </div>
              
              <div className="border-b border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <div className="font-medium">Create Auto Layouts In App Interface</div>
                  <button className="text-indigo-600 font-bold text-xl" onClick={toggleHelp}>-</button>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}