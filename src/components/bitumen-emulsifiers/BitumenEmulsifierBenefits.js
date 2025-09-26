import { FiSettings, FiTrendingUp, FiDroplet, FiWind, FiGlobe, FiClock } from 'react-icons/fi';

const benefits = [
  {
    icon: FiSettings,
    title: 'Improved Mixing Efficiency',
    description:
      'Bitumen emulsifiers help produce stable emulsions that mix uniformly with aggregates at lower temperatures, reducing energy use and equipment wear.',
  },
  {
    icon: FiTrendingUp,
    title: 'Enhanced Adhesion & Performance',
    description:
      'They promote better bonding between bitumen and aggregates, resulting in stronger, more durable road layers even under high stress conditions.',
  },
  {
    icon: FiDroplet,
    title: 'Cold Application Compatibility',
    description:
      'Enables cold mix asphalt production, making it suitable for patchwork, rural roads, and maintenance in areas without access to hot mix plants.',
  },
  {
    icon: FiWind,
    title: 'Faster Setting Times',
    description:
      'Specialized emulsifiers allow for controlled breaking and setting of emulsions, enabling quicker construction and reopening of roads.',
  },
  {
    icon: FiGlobe,
    title: 'Eco-Friendly Process',
    description:
      'Lower production temperatures mean reduced emissions and fuel consumption, making emulsified bitumen a greener paving solution.',
  },
  {
    icon: FiClock,
    title: 'All-Weather Usability',
    description:
      'Can be applied in cooler or moist climates, extending the construction season and enabling road repairs in challenging environments.',
  },
];

export default function BitumenEmulsifierBenefits() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Bitumen Emulsifiers</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Bitumen emulsifiers play a key role in modern road construction by enabling cold
          application, improving adhesion, and promoting cost-efficient and eco-friendly asphalt
          mixes.
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
