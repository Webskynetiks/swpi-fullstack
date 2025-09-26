'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation'; 

export default function CertificatesStandards() {
      const [selectedImage, setSelectedImage] = useState(null);

      const certificates = [
  {
    src: '/Images/shanker-wire/calibration-certificate-for-weighing-scale-balance/certi1.webp',
  },
  {
    src: '/Images/shanker-wire/calibration-certificate-for-weighing-scale-balance/certi2.webp',
  },
  {
    src: '/Images/shanker-wire/calibration-certificate-for-weighing-scale-balance/certi3.webp',
  },

];
  return (
    <>
    <section className="  px-6 lg:px-20 ">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold  pt-8">        Calibration Certificate for Weighing Scale and Balance
</h2>
   
        <p></p>


  
      </div>
      
    </section>

        <section className=" bg-gray-50">
      <div className="px-4 lg:px-10 mx-auto text-center">
      

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
            1024: { slidesPerView: 3 },
          }}
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-auto flex flex-col overflow-hidden rounded-lg shadow-md border border-gray-300 bg-white cursor-pointer hover:shadow-xl transition "
                onClick={() => setSelectedImage(cert.src)}
              >
                <div className="h-[85%] w-full">
                  <img
                    src={cert.src}
                    // alt={cert.title}
                    className="w-full h-full object-contain p-4"
                  />
               
                </div>
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
              <img src={selectedImage} alt="Full Certificate" className="rounded-lg" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>

    </>
  );
}
