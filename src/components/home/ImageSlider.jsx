import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sliderImages = [
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-7-1.jpg",
  
  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-8-1.jpg",
   
  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-9-1.jpg",
  
  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-3-4.jpg",
   
  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-4-2.jpg",
  
  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-5-2.jpg",

  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-6-2.jpg",
  
  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-1-5.jpg",
  
  },
  {
    src: "https://weights-swpi.com/wp-content/uploads/2023/10/weights-slider-2-2.jpg",
   
  },
];

const ImageSlider = () => {
  return (
    <div className="w-full mx-auto mt-[10vh] lg:mt-[15vh]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[28vh] md:h-[75vh]">
              <img
                src={item.src}
                title={item.title}
                alt={item.alt}
                fetchpriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/30 bg-opacity-40"></div>
              {/* Caption Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
