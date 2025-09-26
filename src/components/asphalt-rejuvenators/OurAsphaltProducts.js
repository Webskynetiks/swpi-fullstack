import { FiDroplet, FiShield, FiZap, FiTool, FiGlobe, FiRefreshCcw } from 'react-icons/fi';

const products = [
  {
    title: 'Asphalt Rejuvenators',
    description:
      'Restore aged asphalt by replenishing lost oils and improving flexibility. Used in RAP, overlays, and pavement preservation.',
    icon: FiRefreshCcw,
    link: '/asphalt-rejuvenators',
  },
  {
    title: 'Antistripping Agents',
    description:
      'Prevent moisture damage and loss of adhesion between bitumen and aggregate. Essential for improving pavement durability.',
    icon: FiShield,
    link: '/antistripping-agents',
  },
  {
    title: 'Modified Binders',
    description:
      'Enhance elasticity and temperature resistance for better performance in high-stress roadways and extreme climates.',
    icon: FiZap,
    link: '/modified-binders',
  },
  {
    title: 'Bitumen Emulsions',
    description:
      'Water-based bitumen systems for tack coats, chip sealing, and cold-mix applications. Eco-friendly and easy to apply.',
    icon: FiDroplet,
    link: '/bitumen-emulsions',
  },
  {
    title: 'Sealants & Crack Fillers',
    description:
      'High-performance sealants that prevent water ingress and extend the life of asphalt surfaces by sealing cracks and joints.',
    icon: FiTool,
    link: '/sealants',
  },
  {
    title: 'Global Supply & R&D',
    description:
      'We manufacture and export our products to 25+ countries with in-house R&D and custom formulations available.',
    icon: FiGlobe,
    link: '/global-distribution',
  },
];

export default function OurAsphaltProducts() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Asphalt Products</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our range of high-performance bitumen additives and asphalt enhancement solutions
          used worldwide for road construction, recycling, and maintenance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ title, description, icon: Icon, link }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 text-gray-800 text-3xl">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800">{title}</h3>
              <p className="text-gray-600 text-sm mt-3 mb-5 text-justify">{description}</p>
              <div className="text-center">
                <a
                  href={link}
                  className="inline-block text-blue-600 font-semibold text-sm hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
