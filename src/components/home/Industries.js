'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // ✅ Import Autoplay
import 'swiper/css';
import 'swiper/css/navigation'; // ✅ Optional: for arrows

const opusIndustries = [
  {
    name: 'Calibration Laboratories',
    image: 'Images/shanker-wire/industries/calibration-laboratory.webp',
  },
  {
    name: 'Manufacturing & Industrial ',
    image: 'Images/shanker-wire/industries/manufacturing-and-Industrial.webp',
  },
  {
    name: 'Government Industry',
    image: 'Images/shanker-wire/industries/Government.webp',
  },
  {
    name: 'Educational & Research Industry',
    image: 'Images/shanker-wire/industries/educational-and-research-industry.webp',
  },
  {
    name: 'Logistics& Warehousing',
    image: 'Images/shanker-wire/industries/logistics-and-warehousing.webp',
  },

];

export default function OpusIndustriesSlider() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#3b4047]">Industries We Serve</h2>

        <Swiper
          modules={[Navigation, Autoplay]} // ✅ Add Autoplay module
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {opusIndustries.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-60 border border-gray-800">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 text-sm font-semibold">
                  {item.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
