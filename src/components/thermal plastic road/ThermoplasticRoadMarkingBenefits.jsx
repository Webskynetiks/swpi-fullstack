import { FiShield, FiDroplet, FiSun, FiTruck, FiWatch, FiEye } from 'react-icons/fi';

const benefits = [
  {
    icon: FiShield,
    title: 'Durability & Long Life',
    description:
      'Thermoplastic paint forms a tough, long-lasting coating that withstands heavy traffic and extreme environmental conditions, reducing maintenance frequency.',
  },
  {
    icon: FiDroplet,
    title: 'Water & Chemical Resistance',
    description:
      'Its hydrophobic and chemical-resistant properties make it ideal for roads exposed to rain, oil spills, and fuel drips, ensuring lasting visibility.',
  },
  {
    icon: FiSun,
    title: 'High Reflectivity & UV Stability',
    description:
      'Incorporated glass beads and UV-resistant pigments ensure exceptional night-time visibility and color retention even under harsh sunlight.',
  },
  {
    icon: FiTruck,
    title: 'Rapid Drying & Traffic Readiness',
    description:
      'Dries quickly after application, allowing roads to reopen faster with minimal disruption to traffic flow and safety operations.',
  },
  {
    icon: FiWatch,
    title: 'Cost-Effective Over Time',
    description:
      'Though the initial cost is higher than regular paint, its superior performance and lifespan make it a cost-effective choice long term.',
  },
  {
    icon: FiEye,
    title: 'Enhanced Safety & Clarity',
    description:
      'Improves road user safety with clear, skid-resistant lines that remain visible in wet, dark, or foggy conditions.',
  },
];

export default function ThermoplasticRoadMarkingBenefits() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Benefits of Thermoplastic Road Marking Paint
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Thermoplastic paint offers unmatched performance for road markings, combining durability,
          visibility, and safety in a single high-performance solution.
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
