'use client';

import Image from 'next/image';
import { FaCheckCircle, FaCertificate, FaBalanceScale, FaGlobe } from 'react-icons/fa';

export default function CertificatesAndStandards() {
  const points = [
    {
      icon: <FaCheckCircle className="text-green-600 text-3xl" />,
      title: "Traceability",
      desc: "All calibration results are traceable to National and International Standards ensuring accuracy and reliability."
    },
    {
      icon: <FaBalanceScale className="text-blue-600 text-3xl" />,
      title: "NABL Compliance",
      desc: "Our laboratory strictly follows NABL guidelines for calibration of test weights and weighing balances."
    },
    {
      icon: <FaGlobe className="text-orange-600 text-3xl" />,
      title: "Global Standards",
      desc: "We adhere to OIML and ISO standards for calibration, trusted across industries worldwide."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Certificates & Standards
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Our calibration services guarantee compliance, trust, and traceability – ensuring your weights and balances meet the highest accuracy standards.
        </p>

        {/* Grid Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition border border-gray-500"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
