export default function Testimonials() {
  const testimonials = [
    {
      name: "Ranjan Kumar",
      role: "Content Creator",
      image: "/ranjan.jpg",
      quote: "Grow-Key ने मेरी सोशल मीडिया उपस्थिति को पूरी तरह बदल दिया। उनकी रणनीतिक योजना ने मेरी फॉलोइंग को तेजी से बढ़ाने में मदद की।"
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      quote: "The team at Grow-Key understands social media inside out. They've helped our business reach new heights."
    }, 
    {
      name: "Emily Carter",
      role: "Freelance Photographer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      quote: "Grow-Key provided me with the tools and insights to showcase my work and attract more clients than ever before."
    },
    {
      name: "David Martinez",
      role: "E-commerce Entrepreneur",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200",
      quote: "Thanks to Grow-Key, my online store has seen a significant boost in engagement and sales. Their expertise is unmatched!"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`${index === 0 ? 'text-sm': ''} border-purple-500 border bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}