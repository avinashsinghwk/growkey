import { TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div id='hero' className="relative bg-purple-100 flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-purple-300 rounded-full opacity-50 animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-50 animate-float" />
      <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-float" />
      <div className="absolute hidden md:block bottom-1/3 right-1/4 w-20 h-20 bg-purple-500 rounded-full opacity-50 animate-float" />
      <div className="absolute top-1/2 left-1/5 w-14 h-14 bg-purple-300 rounded-full opacity-50 animate-float" />
      <div className="absolute top-20 right-40 w-10 h-10 bg-purple-300 rounded-full opacity-50 animate-float" />
      <div className="absolute hidden md:block top-3/4 left-40 w-16 h-16 bg-purple-500 rounded-full opacity-50 animate-float" />
      <div className="absolute top-1/3 right-1/6 w-14 h-14 bg-purple-300 rounded-full opacity-50 animate-float" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in animate-delay-100">
        <TrendingUp className="mx-auto h-16 w-16 text-purple-600 animate-scale-in" />
        <h1 className="my-4 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in animate-delay-200">
          Grow Your Social Media Presence
        </h1>
        <h2 className="mt-2 text-lg text-gray-700 animate-fade-in animate-delay-300">
          Elevate your influence with our expert strategies
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-fade-in animate-delay-300">
          We help content creators, businesses, and organizations excel across social media platforms through strategic management and consultancy.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 animate-fade-in animate-delay-300">
          <div className="rounded-md shadow">
            <a
              href="#contact"
              className="w-full mt-8 sm:mt-0 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10 animate-scale-in animate-delay-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
