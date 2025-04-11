const StatsCard = () => {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left Section - Text Content */}
          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-700 to-blue-600 text-white md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              We Help To Grow<br />Your Business
            </h1>
            <p className="text-blue-100 mb-6 text-sm md:text-base">
              Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis augue dolor mollis suscipit erat libero fermentum.
            </p>
            <button className="px-5 py-2 bg-white text-blue-600 font-medium rounded-md text-sm hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
  
          {/* Right Section - Stats */}
          <div className="p-6 md:p-8 md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">142</p>
                <p className="text-gray-600 text-sm">New Features</p>
              </div>
  
              {/* Stat 2 */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">28k</p>
                <p className="text-gray-600 text-sm">APP Download</p>
              </div>
  
              {/* Stat 3 */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">53M</p>
                <p className="text-gray-600 text-sm">Active Users</p>
              </div>
  
              {/* Stat 4 */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">90%</p>
                <p className="text-gray-600 text-sm">Positive Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsCard;