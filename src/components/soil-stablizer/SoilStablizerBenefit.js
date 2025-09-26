// ✅ Ensure ALL icons are imported as named imports
import { FiTrendingUp, FiZap, FiTool, FiClock, FiGlobe, FiShield } from 'react-icons/fi';

const benefits = [
  {
    icon: FiTrendingUp,
    title: 'Superior Strength',
    description:
      'Significantly enhances the load-bearing capacity of soil by up to 600% (CBR), ensuring high-performance support for heavy construction, industrial traffic, and long-lasting surface durability.',
  },
  {
    icon: FiZap,
    title: 'Eco-Friendly',
    description:
      'Crafted from non-toxic, biodegradable materials that are completely safe for surrounding vegetation, water bodies, and ecological systems—making it ideal for use in environmentally sensitive zones.',
  },
  {
    icon: FiTool,
    title: 'Easy Application',
    description:
      'Engineered for simplicity, OPAL-SS3 can be applied with standard construction equipment and integrates seamlessly with all soil types—clay, silt, loam, or sand—minimizing labor costs and time.',
  },
  {
    icon: FiClock,
    title: 'Long-Term Durability',
    description:
      'Withstands harsh environmental conditions such as heavy rainfall, heatwaves, freeze-thaw cycles, and UV exposure—delivering structural integrity and erosion control for over a decade.',
  },
  {
    icon: FiGlobe,
    title: 'Cost-Effective',
    description:
      'Reduces overall construction and maintenance expenses by up to 70% by eliminating the need for costly imported aggregates and frequent reapplication, ensuring economic efficiency.',
  },
  {
    icon: FiShield,
    title: 'Dust & Erosion Control',
    description:
      'Creates a hardened, concrete-like protective surface that prevents dust pollution and topsoil erosion, ensuring cleaner environments and safer work zones across construction and mining sites.',
  },
];

// ✅ Ensure default export
export default function OpalSS3Benefits() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Key Benefits of OPAL-SS3 Soil Stabilizer
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how OPAL-SS3 improves soil strength, sustainability, and long-term durability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }, idx) => (
            <div key={idx}>
              {typeof Icon === 'undefined' ? (
                <p className="text-red-600">⚠️ Icon not defined for: {title}</p>
              ) : (
                <div className="bg-gray-50 rounded-3xl shadow-md p-8 text-center hover:shadow-lg transition duration-300 border-2 border-gray-200 hover:scale-105">
                  <div className="mx-auto mb-5 flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full text-[40px] text-[#3b4047]">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    {description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
