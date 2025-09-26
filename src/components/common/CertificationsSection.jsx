"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    name: "OIML Certified",
    img: "/Images/shanker-wire/international-organization-of-legal-metrology.png",
    alt: "OIML Certified Manufacturer",
    link: "/08.7.23-article-printed-in-OIML.pdf",
  },
  {
    name: "NABL Accredited",
    img: "/Images/shanker-wire/national-accreditation-board-for-Testing-and-calibration-laboratories.png",
    alt: "NABL Accredited Laboratory",
    link: "/NABL.pdf",
  },
  {
    name: "Indian Foundry Association",
    img: "/Images/shanker-wire/ifa.webp",
    alt: "Indian Foundry Association Member",
    link: "https://www.ifa.org.in/",
  },
  {
    name: "EEPC India",
    img: "/Images/shanker-wire/eepc.webp",
    alt: "EEPC India Member Exporter",
    link: "https://www.eepcindia.org/",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b4047] mb-8">
          We Are Certified & Accredited By
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.img}
                  alt={cert.alt}
                  title={cert.name}
                  className="h-50 object-contain border border-gray-300 p-2 bg-white rounded-lg shadow-md"
                />
              </a>
              {/* Title under image */}
              <span className="mt-2 text-sm font-medium text-gray-700">
                {cert.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
