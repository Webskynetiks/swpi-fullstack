// components/WhyChooseUsSection.jsx

import {
  FaAward,
  FaFlask,
  FaGlobe,
  FaCheckCircle,
  FaWarehouse,
  FaUsers,
  FaIndustry,
  FaShieldAlt,
  FaRegClock,
} from 'react-icons/fa';

const reasons = [
  {
    icon: <FaAward className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: '60+ Years of Expertise',
    description:
      'Since 1961, SWPI has been exclusively dedicated to designing and manufacturing precision test and standard weights. Our six decades of consistent innovation and craftsmanship make us one of the world’s most trusted providers of calibration solutions.',
  },
  {
    icon: <FaShieldAlt className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'NABL Accredited Calibration',
    description:
      'Our calibration laboratory is accredited by NABL under ISO/IEC 17025:2017, ensuring every weight is verified to meet stringent global standards. This accreditation guarantees traceability, reliability, and accuracy in all our calibration services.',
  },
  {
    icon: <FaCheckCircle className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'International Standards Compliance',
    description:
      'All our weights are manufactured in compliance with OIML R-111 and R-47 standards. By strictly following international metrology regulations, we ensure that every product meets global requirements for accuracy and consistency.',
  },
  {
    icon: <FaFlask className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'Precision Engineering & Recognition',
    description:
      'Our attention to detail—from material quality and surface finish to dimensional accuracy—has earned us international recognition. SWPI’s contributions were acknowledged by OIML in 1973 for excellence in precision engineering.',
  },
  {
    icon: <FaWarehouse className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'Wide Product Range',
    description:
      'We offer a comprehensive range of weights from 100 g to 1000 kg in diverse forms including hexagonal, rectangular, cylindrical, slotted, and roller weights. This versatility makes our products suitable for industries, calibration labs, and government institutions worldwide.',
  },
  {
    icon: <FaGlobe className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'Global Reach & Trust',
    description:
      'SWPI exports precision weights to over 42 countries including the USA, Germany, Australia, and the Middle East. Our global footprint is a testament to the reliability, trust, and credibility that customers across the world place in our products.',
  },
  {
    icon: <FaUsers className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'Respected by the Metrology Community',
    description:
      'SWPI is not just a manufacturer but a contributor to the global metrology ecosystem. We have provided technical input to improve OIML guidelines (R-47 and R-52), and our work was recognized at the 44th CIML Meeting in Mombasa, 2009.',
  },
  {
    icon: <FaIndustry className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'Diverse Industry Applications',
    description:
      'Our products are trusted across sectors including research labs, industrial calibration centers, pharmaceutical companies, government departments, and educational institutions, ensuring accuracy in every critical application.',
  },
  {
    icon: <FaRegClock className="text-[#20598d] w-12 h-12 mx-auto mb-4" />,
    title: 'Commitment to Long-Term Quality',
    description:
      'Every product undergoes rigorous inspection and quality checks to ensure lasting precision and durability. We remain committed to continuous improvement, adapting to new technologies while upholding traditional craftsmanship.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b4047] mb-2">Why Choose Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover why SWPI has been a globally trusted name in precision weights and calibration
          solutions for more than 60 years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white border border-[#20598d] p-6 text-center shadow-sm hover:shadow-md transition"
          >
            {reason.icon}
            <h3 className="font-bold text-lg text-gray-800 mb-2">{reason.title}</h3>
            <p className="text-base text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
