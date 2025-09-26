"use client";

const countries = [
  "Canada","Namibia","Mozambique","Libya","Tanzania","Qatar","U.S.A.",
  "Mauritius","Jordan","Sweden","Kuwait","Switzerland","Malaysia","France",
  "Germany","Netherlands","New Zealand","Romania","Belgium","Australia","U.K.",
  "Singapore","South Africa","Ireland","Israel","Cyprus","Nepal","Bahrain","Oman",
  "Dubai","Philippines","Fiji","Saudi Arabia","Seychelles","Ghana","India",
  "Swaziland","Thailand","Kenya","Malawi"
];







export default function FindUsMarquee() {
  return (
    <section className="bg-[#20598d] text-white py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
           Global Presence, Local Trust
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-blue-100 mt-4 text-lg max-w-2xl mx-auto">
          Proudly serving customers across the world with accurate and durable weights
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-4">
          <div className="flex items-center animate-marquee">
            {countries.map((country, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 px-6 py-3 bg-white text-gray-800 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100"
              >
                {country}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {countries.map((country, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 mx-3 px-6 py-3 bg-white text-gray-800 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100"
              >
                {country}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
    
      </div>
    </section>
  );
}
