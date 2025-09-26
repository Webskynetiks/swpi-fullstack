'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = ({ showButton = true }) => {
  return (
    <section className="bg-white py-2 lg:py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Images/logo.webp"
            alt="Business Meeting"
            width={600}
            height={400}
            className="rounded-md shadow-md object-cover w-full h-[14rem] lg:h-[30rem]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 mt-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            About SWPI (Shanker Wire Products Industries)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            Shanker Wire Products Industries (SWPI), established in 1961, is a trusted manufacturer of precision test weights, standard weights, and calibrated weights. With a NABL-accredited calibration laboratory and full compliance with OIML international standards, we deliver exceptional accuracy across a wide range from 1 mg to 1000 kg. Our commitment to quality and innovation has earned us recognition at national and international levels, making SWPI a preferred choice for industries across India and around the world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            Backed by decades of expertise and traceability to BIPM, Paris, we ensure every weight meets the highest global standards. From laboratory precision weights to heavy industrial capacities, our products are designed for accuracy, reliability, and long-lasting performance. At SWPI, Accuracy in Weighing Systems throughout the world is not just a motto—it’s our promise to every customer we serve.
          </p>

          {/* Conditionally render button */}
          {showButton && (
            <div className="w-full md:w-1/2 mt-4">
              <Link
                href="/about"
                className="inline-block bg-[#2E2E2E] hover:scale-105 text-white px-4 py-2 rounded shadow-md transition"
              >
                Read More...
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
