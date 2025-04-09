export default function CaseStudies() {
  const cases = [
    {
      name: "Amazing-Anseen",
      description: "YouTube channel growth from scratch to 560K+ subscribers through strategic content planning and optimization.",
      youtubeId: "-TAd2oRCaEY"
    },
    {
      name: "Apareemita Humanitarians Association",
      description: "Increased social media visibility and engagement for Delhi-based NGO working with marginalized communities.",
      youtubeId: "qIxRklLWs-s"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" id="case-studies">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900">Case Studies & Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">See how we've helped our clients achieve remarkable growth</p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {cases.map((case_, index) => (
            <div
              key={case_.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-t-2xl"
                  src={`https://www.youtube.com/embed/${case_.youtubeId}`}
                  title={case_.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-purple-500">{case_.name}</h3>
                <p className="text-gray-600">{case_.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}