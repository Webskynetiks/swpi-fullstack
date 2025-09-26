'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // ✅ Import Autoplay
import 'swiper/css';
import 'swiper/css/navigation';

const opusIndustries = [
  {
    name: 'IRCON International',
    image: '/Images/clients/ircon.webp',
  },
  {
    name: 'National Highway Authority of India',
    image: '/Images/clients/national-highway-authority-of-india.webp',
  },
  {
    name: 'NBCC (India) Limited',
    image: '/Images/clients/nbcc.webp',
  },
  {
    name: 'Public Works Departments (PWD)',
    image: '/Images/clients/public-work-department.png',
  },
  {
    name: 'Steel Authority of India Limited (SAIL)',
    image: '/Images/clients/steel-authority-of-india-limited.webp',
  },
  {
    name: 'NCC Limited',
    image: '/Images/clients/ncc.webp',
  },
  {
    name: 'Airport Authority of India',
    image: '/Images/aai.webp',
  },
  {
    name: 'Border Roads Organisation',
    image: '/Images/clients/bro.png',
  },
  {
    name: 'DLF Limited',
    image: '/Images/clients/dlf.webp',
  },
  {
    name: 'International Exports',
    image: '/Images/clients/international-exports.png',
  },
];

export default function ClientLogoSlider() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-black">Our Clients</h2>

        <Swiper
          modules={[Navigation, Autoplay]} // ✅ Add Autoplay module
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{
            delay: 2500, // Delay between slides in ms
            disableOnInteraction: false, // Keep autoplay running after manual swipe
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {opusIndustries.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-60">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 bg-opacity-60 text-white py-2 text-sm font-semibold">
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
