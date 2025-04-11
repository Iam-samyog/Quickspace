const StatsCard = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Section - Text Content */}
            <div className="p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                We Help To Grow <br /> Your Business
              </h1>
              <p className="text-blue-100 text-lg mb-8 sm:mb-10 lg:mb-12">
                Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue dolor mollis suscipit erat libero fermentum.
              </p>
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300">
                Learn More
              </button>
            </div>
  
            {/* Right Section - Stats Grid */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {/* Stat 1 */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">142</p>
                  <p className="text-gray-600 font-medium">New Features</p>
                </div>
  
                {/* Stat 2 */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">28k</p>
                  <p className="text-gray-600 font-medium">APP Download</p>
                </div>
  
                {/* Stat 3 */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">53M</p>
                  <p className="text-gray-600 font-medium">Active Users</p>
                </div>
  
                {/* Stat 4 */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">90%</p>
                  <p className="text-gray-600 font-medium">Positive Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsCard;