// components/about/QualityAccreditation.js
'use client';

import {
  FaBalanceScale,
  FaGlobe,
  FaFlask,
  FaShieldAlt,
} from 'react-icons/fa';

const qualityItems = [
  {
    icon: <FaBalanceScale className="text-[#20598d] text-5xl mb-4" />,
    title: 'OIML Standards Compliance',
    description:
      'All our weights are manufactured in strict compliance with OIML R-111 and R-47, ensuring global accuracy and consistency.',
  },
  {
    icon: <FaShieldAlt className="text-[#20598d] text-5xl mb-4" />,
    title: 'NABL Accredited Laboratory',
    description:
      'Our calibration laboratory is NABL-accredited under ISO/IEC 17025:2017, guaranteeing traceability, reliability, and accuracy.',
  },
  {
    icon: <FaFlask className="text-[#20598d] text-5xl mb-4" />,
    title: 'Rigorous In-House Testing',
    description:
      'Every product undergoes strict in-house testing with advanced equipment to ensure long-lasting precision and durability.',
  },
  {
    icon: <FaGlobe className="text-[#20598d] text-5xl mb-4" />,
    title: 'International Recognition',
    description:
      'SWPI has been recognized globally for its precision engineering and contributions to international metrology standards.',
  },
];

export default function QualityAccreditation() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#3b4047] mb-3">Quality & Accreditation</h2>
        <div className="w-20 h-1 bg-[#20598d] mx-auto mb-10" />
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Backed by international standards, accreditations, and rigorous testing, we are
          committed to delivering accuracy, reliability, and world-class quality in every product.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-left border-2 border-gray-600 hover:scale-102 cursor-pointer"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2 text-center">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
