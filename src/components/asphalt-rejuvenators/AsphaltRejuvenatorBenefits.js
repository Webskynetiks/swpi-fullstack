import { FiRefreshCcw, FiClock, FiDroplet, FiTool, FiTrendingUp, FiShield } from 'react-icons/fi';

const benefits = [
  {
    icon: FiRefreshCcw,
    title: 'Restores Aged Asphalt',
    description:
      'Rejuvenators penetrate the asphalt surface to replenish lost oils and restore the original flexibility and binding strength of oxidized asphalt.',
  },
  {
    icon: FiClock,
    title: 'Extends Pavement Life',
    description:
      'By reversing oxidation and improving durability, rejuvenators can extend pavement lifespan by 3–5 years or more—delaying major resurfacing costs.',
  },
  {
    icon: FiDroplet,
    title: 'Improves Moisture Resistance',
    description:
      'Enhanced binder chemistry increases resistance to water infiltration, reducing the risk of stripping, raveling, and premature damage.',
  },
  {
    icon: FiTool,
    title: 'Cost-Effective Maintenance',
    description:
      'Rejuvenation is significantly cheaper than full reconstruction and helps reduce long-term maintenance and repair budgets.',
  },
  {
    icon: FiTrendingUp,
    title: 'Boosts RAP Performance',
    description:
      'Ideal for Reclaimed Asphalt Pavement (RAP), rejuvenators improve workability and performance of recycled asphalt mixtures.',
  },
  {
    icon: FiShield,
    title: 'Eco-Friendly Preservation',
    description:
      'Using rejuvenators supports sustainability by reducing the need for new raw materials and extending the life of existing infrastructure.',
  },
];

export default function AsphaltRejuvenatorBenefits() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Asphalt Rejuvenators</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover how asphalt rejuvenators improve the performance, sustainability, and longevity
          of your pavements through advanced chemical restoration.
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
              <p className="text-gray-600 text-sm leading-relaxed text-justify">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
