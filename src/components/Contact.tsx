import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-12 bg-purple-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Ready to grow your social media presence? Reach out to us through any of these channels.
          </p>
        </div>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Box */}
          <div className="bg-white border border-purple-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
            <Mail className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <a href="mailto:maanavnova@gmail.com" className="text-purple-600 hover:text-purple-700 mt-2">
              maanavnova@gmail.com
            </a>
          </div>
          {/* Phone Box */}
          <div className="bg-purple-100 border border-purple-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
            <Phone className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <a href="tel:+919162100126" className="text-purple-600 hover:text-purple-700 mt-2">
              +91 91621 00126
            </a>
          </div>
          {/* Address Box */}
          <div className="bg-white border border-purple-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
            <MapPin className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Location</h3>
            <p className="text-gray-600 mt-2">Patna, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}