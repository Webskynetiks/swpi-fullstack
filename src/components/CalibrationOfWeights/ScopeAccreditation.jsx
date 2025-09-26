'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation'; 
const certificates = [
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-one.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-two.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-three.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-four.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-five.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-six.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-seven.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-eight.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-nine.webp',
  },
  {
    src: '/Images/shanker-wire/Scope-of-Accreditation/page-ten.webp',
  },
];

export default function ScopeAccreditation() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="px-4 lg:px-10 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Scope of Accreditation
</h2>

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
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-auto flex flex-col overflow-hidden rounded-lg shadow-md border border-gray-300 bg-white cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelectedImage(cert.src)}
              >
                <div className="h-[85%] w-full">
                  <img
                    src={cert.src}
                    // alt={cert.title}
                    className="w-full h-full object-contain p-4"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 text-sm font-semibold rounded">
                    {cert.title}
                  </div> */}
                </div>
                {/* <div className="h-[15%] w-full bg-[#7e7e7e] flex items-center justify-center">
                  <p className="text-white font-semibold text-md">{cert.title}</p>
                </div> */}
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
  );
}
