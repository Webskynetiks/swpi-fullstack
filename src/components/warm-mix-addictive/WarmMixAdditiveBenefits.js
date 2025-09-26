import {
  FiThermometer,
  FiTrendingDown,
  FiZap,
  FiCloudRain,
  FiClock,
  FiGlobe,
} from 'react-icons/fi';

const benefits = [
  {
    icon: FiThermometer,
    title: 'Lower Mixing & Compaction Temperatures',
    description:
      'Warm mix additives allow asphalt to be produced and compacted at temperatures 20–40°C lower than hot mix asphalt, reducing fuel consumption and emissions.',
  },
  {
    icon: FiTrendingDown,
    title: 'Reduced Energy Consumption',
    description:
      'By enabling lower production temperatures, these additives help save significant energy during asphalt mixing and paving processes.',
  },
  {
    icon: FiZap,
    title: 'Improved Workability',
    description:
      'Enhanced lubrication improves aggregate coating and workability, especially useful during long hauls, night paving, and cooler weather.',
  },
  {
    icon: FiCloudRain,
    title: 'Extended Paving Season',
    description:
      'Warm mix technology allows paving in colder climates and shoulder seasons when hot mix would be impractical, increasing operational flexibility.',
  },
  {
    icon: FiClock,
    title: 'Faster Project Turnaround',
    description:
      'Quicker compaction and improved traffic readiness allow projects to be completed sooner, reducing road closures and user delays.',
  },
  {
    icon: FiGlobe,
    title: 'Eco-Friendly & Low Emissions',
    description:
      'Lower temperatures reduce fumes, greenhouse gas emissions, and worker exposure to pollutants, making WMA a sustainable paving solution.',
  },
];

export default function WarmMixAdditiveBenefits() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Warm Mix Additives</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore how warm mix asphalt additives reduce energy usage, enhance workability, and
          promote eco-friendly, cost-effective road construction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 text-3xl bg-gray-200 text-gray-700 rounded-full">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm text-justify leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
