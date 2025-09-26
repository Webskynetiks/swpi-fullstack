// components/ImageSlider.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  {
    src: '/Images/slider/banner.jpg', // gray version
    alt: 'Anti Stripping Agents | Soil Stabilizers | Rejuvenators Banner',
  },
];

export default function ImageSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[140px] sm:h-[140px] md:h-[300px] lg:h-[400px] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
