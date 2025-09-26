// components/about/LeadershipLegacy.js
'use client';

import { motion } from 'framer-motion';
import { FaFlag, FaAward, FaGlobe, FaHistory } from 'react-icons/fa';

const milestones = [
  {
    year: '1961',
    icon: <FaFlag className="text-[#20598d] text-4xl mb-3" />,
    title: 'Foundation',
    description:
      'SWPI was established, pioneering the manufacturing of precision test weights in India.',
  },
  {
    year: '1973',
    icon: <FaAward className="text-[#20598d] text-4xl mb-3" />,
    title: 'First OIML Recognition',
    description:
      'Earned international recognition from OIML, marking global acceptance of SWPI standards.',
  },
  {
    year: '1987',
    icon: <FaAward className="text-[#20598d] text-4xl mb-3" />,
    title: 'Second OIML Recognition',
    description:
      'Strengthened our reputation as a trusted global leader in metrology and calibration.',
  },
  {
    year: '2009',
    icon: <FaAward className="text-[#20598d] text-4xl mb-3" />,
    title: 'Third OIML Recognition',
    description:
      'Reinforced our commitment to accuracy, compliance, and international standards.',
  },
  {
    year: 'Today',
    icon: <FaGlobe className="text-[#20598d] text-4xl mb-3" />,
    title: 'Global Impact',
    description:
      'Serving industries worldwide with products traceable to BIPM, Paris, ensuring unmatched precision.',
  },
];

export default function LeadershipLegacy() {
  return (
    <section
      id="leadership-legacy"
      aria-labelledby="legacy-heading"
      className="bg-white py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="legacy-heading"
          className="text-4xl font-bold text-[#3b4047] mb-3"
        >
          Leadership & Legacy
        </h2>
        <div className="w-20 h-1 bg-[#20598d] mx-auto mb-10" />
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Since 1961, SWPI has led the way in precision engineering. Our legacy
          is defined by decades of expertise, international recognitions, and a
          lasting commitment to quality and trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform duration-300 text-left border border-gray-200 hover:border-[#20598d] hover:scale-105 cursor-pointer"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 text-center mb-1">
                {item.year} – {item.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
