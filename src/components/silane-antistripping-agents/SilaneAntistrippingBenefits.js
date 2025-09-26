import { FiDroplet, FiShield, FiLink, FiFeather, FiCheckCircle, FiWind } from 'react-icons/fi';

const benefits = [
  {
    icon: FiShield,
    title: 'Superior Moisture Resistance',
    description:
      'Silane-based agents create a hydrophobic barrier that prevents water from disrupting the bitumen-aggregate bond, especially in wet or freeze-thaw environments.',
  },
  {
    icon: FiLink,
    title: 'Strong Aggregate Bonding',
    description:
      'They chemically bond with aggregate surfaces via siloxane linkages, forming a highly durable and stable interface resistant to stripping.',
  },
  {
    icon: FiDroplet,
    title: 'Ideal for Alkaline Aggregates',
    description:
      'Silane-based solutions are especially effective on alkaline materials like limestone and dolomite, where traditional agents may fail to perform consistently.',
  },
  {
    icon: FiWind,
    title: 'Performs in Harsh Environments',
    description:
      'Excellent resistance to water, chemicals, and pH fluctuations makes them ideal for roads in coastal, humid, or industrial zones.',
  },
  {
    icon: FiFeather,
    title: 'Low Dosage & Easy Mixing',
    description:
      'Silane agents work effectively at low concentrations and can be blended directly into the binder without affecting mix temperature or workability.',
  },
  {
    icon: FiCheckCircle,
    title: 'Long-Term Pavement Protection',
    description:
      'By preventing moisture-related failures, silane-based agents extend the life of pavements and reduce the frequency of costly repairs.',
  },
];

export default function SilaneAntistrippingBenefits() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Benefits of Silane-Based Antistripping Agents
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Silane-based antistripping agents offer advanced protection against moisture damage by
          chemically bonding with aggregates and forming a long-lasting hydrophobic barrier.
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
