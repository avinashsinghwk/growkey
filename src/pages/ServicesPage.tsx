import { Users, TrendingUp, MessageSquare, BarChart, Target, Award, Zap, Globe, Video } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      name: "Social Media Management",
      description: "Complete handling of your social media presence across all major platforms including content creation, scheduling, and engagement.",
      icon: Users,
      features: ["Content Calendar", "Post Creation", "Community Management", "Platform-specific Strategy"]
    },
    {
      name: "Content Strategy",
      description: "Develop engaging content strategies that resonate with your target audience and align with your business goals.",
      icon: TrendingUp,
      features: ["Audience Analysis", "Content Planning", "Brand Voice Development", "Trend Research"]
    },
    {
      name: "Performance Analytics",
      description: "Detailed insights and reports to track your social media performance and ROI across all platforms.",
      icon: BarChart,
      features: ["Custom Reports", "KPI Tracking", "Competitor Analysis", "Growth Metrics"]
    },
    {
      name: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message and reach new audiences.",
      icon: Target,
      features: ["Influencer Research", "Campaign Planning", "Performance Tracking", "ROI Analysis"]
    },
    {
      name: "Brand Development",
      description: "Build a strong and consistent brand presence across all social media platforms.",
      icon: Award,
      features: ["Brand Guidelines", "Visual Identity", "Tone of Voice", "Content Templates"]
    },
    {
      name: "Crisis Management",
      description: "Professional handling of social media crisis situations to protect your brand reputation.",
      icon: Zap,
      features: ["24/7 Monitoring", "Response Strategy", "Reputation Management", "Crisis Prevention"]
    },
    {
      name: "Social Media Advertising",
      description: "Strategic paid social campaigns to reach your target audience and achieve business objectives.",
      icon: Globe,
      features: ["Ad Strategy", "Campaign Setup", "Budget Management", "Performance Optimization"]
    },
    {
      name: "Community Engagement",
      description: "Build and nurture your online community through active engagement and relationship building.",
      icon: MessageSquare,
      features: ["Response Management", "Community Guidelines", "User Generated Content", "Engagement Campaigns"]
    },
    {
      name: "Video Marketing",
      description: "Create compelling video content to enhance brand storytelling and boost audience engagement.",
      icon: Video,
      features: ["Video Production", "Editing & Optimization", "Platform-Specific Formats", "Performance Analytics"]
    }

  ];

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive social media solutions tailored to your needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.name} className={`${index % 2 === 0 ? 'bg-white border border-purple-600' : 'bg-purple-100'} rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow`}>
                <Icon className="h-8 w-8 text-purple-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className='flex items-center justify-center mt-5'>
                  <button
                    className={`${index % 2 === 0
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-purple-200 hover:bg-purple-300 border border-purple-700 text-purple-600'}
    rounded-lg px-4 py-2 text-sm font-medium transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}