export default function TestimonialsSection() {
    const testimonials = [
      {
        id: 1,
        quote: "I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.",
        name: "Jenny Wilson",
        position: "Project Manager at Microsoft",
        image: "/api/placeholder/100/100"
      },
      {
        id: 2,
        quote: "I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content",
        name: "Robert Fox",
        position: "Founder at Brain.co",
        image: "/api/placeholder/100/100"
      },
      {
        id: 3,
        quote: "Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.",
        name: "Kristin Watson",
        position: "UX Designer at Google",
        image: "/api/placeholder/100/100"
      }
    ];
  
    return (
      <div className="max-w-[1350px] container  mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Quisque fermentum porta tincidunt. Interdum semper.
            <br />
            Pellentesque facilisis augue mollis suscipit.
          </p>
        </div>
  
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`flex flex-col items-center ${
                testimonial.id === 2 ? "bg-white shadow-lg rounded-lg p-8" : ""
              }`}
            >
              {/* Profile Image */}
              <div className="mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
  
              {/* Quote */}
              <blockquote className="text-center mb-6">
                <p className="text-lg text-gray-800">"{testimonial.quote}"</p>
              </blockquote>
  
              {/* Name and Position */}
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }