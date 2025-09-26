// components/products/OpalSS3Applications.js

import { FaRoad, FaMountain, FaTools, FaTree, FaWind, FaTruck } from 'react-icons/fa';

export default function OpalSS3Applications() {
  const applications = [
    { icon: <FaRoad className="text-[#3b4047] text-4xl mb-3" />, label: 'Unpaved and rural roads' },
    {
      icon: <FaTruck className="text-[#3b4047] text-4xl mb-3" />,
      label: 'Haul roads for mining and construction',
    },
    {
      icon: <FaTree className="text-[#3b4047] text-4xl mb-3" />,
      label: 'Remote access routes and forest trails',
    },
    {
      icon: <FaMountain className="text-[#3b4047] text-4xl mb-3" />,
      label: 'Erosion control in sloped or flood-prone areas',
    },
    {
      icon: <FaWind className="text-[#3b4047] text-4xl mb-3" />,
      label: 'Dust suppression in dry, windy zones',
    },
    {
      icon: <FaTools className="text-[#3b4047] text-4xl mb-3" />,
      label: 'Temporary roadways at construction and infrastructure sites',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Ideal Applications of <span className="text-[#3b4047]">OPAL-SS3</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-[#f3f4f6] border  hover:shadow-xl transition rounded-2xl p-8 text-center flex flex-col items-center justify-center"
            >
              {app.icon}
              <p className="text-lg text-gray-800 font-semibold leading-snug mt-2">{app.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
