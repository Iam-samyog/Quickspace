import React from 'react';

export default function BusinessGrow() {
    const cardData = [
        {
          icon:'img/Icons/Icon.png',
          title: "Active User Analytics",
          description: "Class aptent taciti sociosqu litora torquen conubia nostram.",
        },
        {
          icon:'img/Icons/Icon (1).png',
          title: "Smart Coding Development",
          description: "Morbi eget aliquet finibus, best condimentum aliquet quam.",
        },
        {
          icon: 'img/Icons/Icon (2).png',
          title: "User Friendly Interface",
          description: "Quisque magna, sollicitudin vitae, lobortis feugiat arcu.",
        },
      ];
   
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
       
     
        {cardData.map((cardDatas)=>(
 <div className="bg-white shadow-lg rounded-lg p-8 flex-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
 <div className=" mb-6">
 <img src={cardDatas.icon} alt="" />
 </div>
 <h2 className="text-xl font-bold text-gray-800 mb-4 primary-font">{cardDatas.title}</h2>
 <p className="text-gray-500">
  {cardDatas.description}
 </p>
</div>
           
        ))}
       
       </div>
      

      {/* Team Members Section */}
      <div className="text-center secondary-font">
        <p className="text-gray-600">
          Approx <span className="text-indigo-500 text-2xl font-bold px-1">875+</span> team members ready to online support for you
        </p>
      </div>
    </div>
    
  );
}