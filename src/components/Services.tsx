import { Users, TrendingUp, MessageSquare, BarChart, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      name: "Social Media Management",
      description: "Complete handling of your social media presence across all major platforms.",
      icon: Users
    },
    {
      name: "Content Strategy",
      description: "Develop engaging content strategies that resonate with your target audience.",
      icon: TrendingUp
    },
    {
      name: "Community Management",
      description: "Build and nurture your online community through active engagement.",
      icon: MessageSquare
    },
    {
      name: "Analytics & Reporting",
      description: "Detailed insights and reports to track your social media performance.",
      icon: BarChart
    }
  ];

  return (
    <section className="py-12 bg-white flex flex-col items-center justify-center gap-8" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive social media solutions for your growth
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className={`${index === 1 || index === 3 ? 'bg-purple-100': 'bg-gray-50'}  rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-purple-600`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-8 w-8 text-purple-600" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-gray-500">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <a className='rounded-lg px-3 py-2 border border-purple-500 flex gap-2 hover:bg-purple-50 text-purple-500 font-semibold' href="/services">View All Services <ArrowRight /></a>
    </section>
  );
}