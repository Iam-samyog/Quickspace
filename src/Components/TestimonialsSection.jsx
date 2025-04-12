export default function TestimonialsSection() {
    const testimonials = [
      {
        id: 1,
        quote: "I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.",
        name: "Jenny Wilson",
        position: "Project Manager at Microsoft",
        image: "/img/Testimonial/Image (2).png"
      },
      {
        id: 2,
        quote: "I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content",
        name: "Robert Fox",
        position: "Founder at Brain.co",
        image: "/img/Testimonial/Image (1).png"
      },
      {
        id: 3,
        quote: "Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.",
        name: "Kristin Watson",
        position: "UX Designer at Google",
        image: "/img/Testimonial/Image.png"
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 secondary-font">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 primary-font">What People Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
          "Hear From Those Who’ve Experienced the Difference."


          </p>
        </div>
  
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`flex flex-col items-center p-6 rounded-lg
                ${testimonial.id === 2 ? "bg-white shadow-lg" : ""}
                transform transition-all duration-300 ease-in-out cursor-pointer
                hover:scale-105 hover:-translate-y-2 hover:shadow-xl active:scale-100 active:translate-y-0
              `}
            >
              {/* Profile Image with hover effect */}
              <div className="mb-6 group">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>
  
              {/* Quote */}
              <blockquote className="text-center mb-6">
                <p className="text-lg text-gray-800">"{testimonial.quote}"</p>
              </blockquote>
  
              {/* Name and Position */}
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-900 transition-colors duration-300 group-hover:text-blue-600">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }