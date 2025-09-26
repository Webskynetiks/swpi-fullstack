'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Anti-Stripping Agents',
    image: '/Images/anti-stripping-agents.webp',
    description:
      'Our premium anti-stripping agent, SUPER-BOND XS, is a bitumen additive designed to significantly improve the bond between aggregates and asphalt binder. It prevents moisture-induced damage, enhances pavement durability, and reduces stripping in all climate conditions. Ideal for highway and heavy-duty road construction.',
    href: '/antistripping-adhesion-promoters',
  },
  {
    title: 'Bitumen Emulsifiers',
    image: '/Images/bitumen-emulsifiers-what-we-do.webp',
    description:
      'Our advanced bitumen emulsifiers improve the stability, performance, and ease of application of bituminous emulsions. They ensure better coating of aggregates, improve penetration, and enhance adhesion—perfect for cold mix asphalt, surface dressing, and tack coat applications.',
    href: '/bitumen-emulsifiers',
  },
  {
    title: 'Asphalt Rejuvenators',
    image: 'Images/asphalt-rejuvenators-what-we-do.webp',
    description:
      'Our asphalt rejuvenators are engineered to restore the essential oils lost during the aging process of asphalt pavements. They penetrate deep into oxidized surfaces, rejuvenating the binder, improving flexibility, and extending pavement life. Ideal for maintenance and recycling projects.',
    href: '/asphalt-rejuvenators',
  },
  {
    title: 'Warm Mix Additives',
    image: '/Images/warm-mix-additives.webp',
    description:
      'Our environmentally friendly warm mix additives reduce asphalt production and paving temperatures by up to 40°C. This results in lower fuel consumption, reduced emissions, and improved workability. Ideal for sustainable road construction and green infrastructure projects.',
    href: '/warm-mix-additives',
  },
  {
    title: 'Thermoplastic Road Marking Paints',
    image: '/Images/tpmr.webp',
    description:
      'We offer top-grade thermoplastic road marking paints designed for long-lasting visibility and durability under heavy traffic. Formulated for highways, urban roads, and airport runways, our paints ensure superior reflectivity, skid resistance, and weather resilience.',
    href: '/thermoplastic-road-marking-paint',
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20 rounded-2xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#3b4047] mb-4">What We Do</h2>
        <div className="w-20 h-1 bg-[#3b4047] mb-10" />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <div className="mt-auto">
                  <Link
                    href={item.href}
                    className="inline-block text-[#3b4047] hover:text-white border border-[#3b4047] hover:bg-black/80  px-4 py-2 rounded-md transition-colors text-sm font-medium hover:scale-105"
                  >
                    Read More..
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
