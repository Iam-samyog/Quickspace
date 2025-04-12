import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
const BankingApp = () => {
  const [openIndex, setOpenIndex] = useState(3); // Set the fourth item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqItems = [
    {
      question: "Custom Edit Tool Application",
      answer:
        "Our edit tool allows you to customize features based on your specific needs. It’s designed to streamline your workflow and boost productivity.",
    },
    {
      question: "Built In Safety Chat Mode Enabled",
      answer:
        "The chat mode includes safety filters to prevent misuse and ensure a secure environment. It runs by default to protect users at all times.",
    },
    {
      question: "Foster Trust Builds System Always Open",
      answer:
        "We prioritize transparency and user control across all system interactions. This open approach helps build lasting trust with our users.",
    },
    {
      question: "Create Auto Layouts In App Interface",
      answer:
        "The auto layout tool quickly organizes your content into responsive, professional designs. It saves time and enhances the user experience effortlessly.",
    },
  ];

  return (
    <>
      <div className="container mx-auto  px-4 py-8 max-w-[1350px]">
        <div className="flex items-center space-between gap-4">
        <div className='relative  w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[700px] hidden md:block'>
            <div className='absolute top-5 left-24 twinkle-1 '>
    <img 
      src="/img/Graphs/Wallet Screen.png" 
      alt="Wallet Screen" 
      className=" md:max-w-[500px] lg:max-w-[700px] h-[700px] object-contain"
    />
  </div>
  <div className='absolute bottom-55 left-[400px] twinkle-2 '>
    <img 
      src="/img/Graphs/M widget.png" 
      alt="Wallet Screen 1" 
      className="h-auto max-w-[200px] md:max-w-[280px] lg:max-w-[350px] md:h-[350px] object-contain"
    />
  </div>
  <div className='absolute bottom-30 left-[400px] twinkle-3 '>
    <img 
      src="/img/Graphs/Group 2490.png" 
      alt="Group 2490" 
      className="max-w-[200px] md:max-w-[280px] lg:max-w-[360px] h-[250px] object-contain"
    />
  </div>
</div>
<div className="w-full lg:w-1/2">
            <div className="max-w-lg mx-auto p-4 bg-white secondary-font">
              <h1 className="text-3xl md:text-4xl primary-font font-bold text-gray-900 mb-2">
                Performance Is The Key To Most People Achieving A Better Future
              </h1>
              <p className="text-gray-600 mb-6">
                Empower your potential through smarter, faster solutions.
              </p>

              <div className="border-t border-gray-200">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b pb-4 border-gray-200">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex justify-between items-center w-full py-4 text-left"
                    >
                      <h3 className="text-lg md:text-xl font-medium text-gray-900 primary-font">
                        {item.question}
                      </h3>
                      {openIndex === index ? (
                        <Minus className="text-blue-600 flex-shrink-0" size={24} />
                      ) : (
                        <Plus className="text-blue-600 flex-shrink-0" size={24} />
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="pb-4 text-gray-600">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankingApp;
