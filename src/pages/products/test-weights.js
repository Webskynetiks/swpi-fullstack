"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Layout from "@/layout/Layout";

const products = [
  {
    title: "Cylindrical Shape 100g to 10kg",
    description: "High-precision cylindrical weights ranging from 100 g to 10 kg, manufactured to meet international calibration standards. Ideal for laboratories, industries, and research institutions requiring accurate mass measurement and verification.",
    image: "/Images/shanker-wire/products/cylindrical-weights-100g-to-10kg.png",
    link: "/products/cylindrical-weights-100g-to-10kg"
  },
  {
    title: "Rectangular Shape Adjusting Cavity on the Top",
    description: "Calibration weights designed with an adjusting cavity on the top for convenient adjustment and precise calibration. Suitable for professional labs and industries where accuracy and easy maintenance are essential.",
    image: "/Images/shanker-wire/products/test-weight-rectangular-shape.png",
    link: "/products/calibration-weights-adjusting-cavity-on-top"
  },
  {
    title: "Rectangular Shape Adjusting Cavity in the Handle",
    description: "Premium calibration weights featuring an adjusting cavity integrated in the handle, ensuring convenient handling while maintaining accuracy. Engineered for high-precision industrial and laboratory applications.",
    image: "/Images/shanker-wire/products/calibration-weights-adjusting-cavity-in-the-handle.png",
    link: "/products/calibration-weights-adjusting-cavity-in-the-handle"
  },
    {
    title: "Rectangular Shape Adjusting Cavity at the Bottom ",
    description: "These calibration weights come with a bottom cavity adjustment design, ranging from 5 kg to 50 kg. Built for industries and calibration centers demanding high-accuracy performance and durability.",
    image: "/Images/shanker-wire/products/swpi-model-1-4b-calibration-weights-bottom-cavity-5kg-to-50kg.png",
    link: "/products/swpi-model-1-4b-calibration-weights-bottom-cavity-5kg-to-50kg"
  },
  {
    title: "Hexagonal Shape 50g to 2kg As per  BIS",
    description: "Durable hexagonal-shaped test weights available from 50 g to 2 kg. These weights offer stable stacking, robust construction, and are widely used in commercial calibration and verification tasks.",
    image: "/Images/shanker-wire/products/swpi-model-52-56-test-weights-hexagonal-50g-to-2kg.png",
    link: "/products/swpi-model-52-56-test-weights-hexagonal-50g-to-2kg"
  },
  {
    title: "Hexagonal shape 5kg to 50kg As per  BIS",
    description: "Heavy-duty hexagonal test weights designed for accurate calibration from 5 kg to 50 kg. Ideal for industrial and commercial use, providing excellent durability and long-term performance.",
    image: "/Images/shanker-wire/products/swpi-model-48-51-test-weights-hexagonal-5kg-to-50kg.png",
    link: "/products/swpi-model-48-51-test-weights-hexagonal-5kg-to-50kg"
  },
  {
    title: "Hexagonal shape 100g to 2kg As per  B.O.T",
    description: "Precision-engineered hexagonal weights available in denominations from 100 g to 2 kg. Their compact design ensures easy stacking and reliable accuracy for laboratory calibration.",
    image: "/Images/shanker-wire/products/swpi-model-21-25-test-weights-hexagonal-100g-to-2kg.webp",
    link: "/products/swpi-model-21-25-test-weights-hexagonal-100g-to-2kg"
  },
  {
    title: "Rectangular Shape Adjusting cavity at the bottom 5 kg to 20 kg  As per  B.O.T",
    description: "Strong rectangular-shaped calibration weights with adjusting cavity at the bottom, available from 5 kg to 20 kg. Ideal for industrial calibration tasks requiring robust handling and precision.",
    image: "/Images/shanker-wire/products/swpi-model-18-20-test-weights-rectangular-5kg-to-20kg.png",
    link: "/products/swpi-model-18-20-test-weights-rectangular-5kg-to-20kg"
  },

  {
    title: "Rectangular shape 100 kg to 1000 kg as per  S.A.B.S",
    description: "Heavy-capacity rectangular test weights designed for large-scale industrial calibration. Available in 500 kg and 1000 kg models, these are essential for high-capacity weighing systems and platform scales.",
    image: "/Images/shanker-wire/products/swpi-model-187-test-weights-rectangular-500kg-to-1000kg.png",
    link: "/products/swpi-model-187-test-weights-rectangular-500kg-to-1000kg"
  },
];


export default function TestProducts() {
  return (
    <Layout>
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Test Weights Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Discover our comprehensive range of high-quality calibration weights and precision instruments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange to-lightpink mx-auto rounded-full"></div>
        </div>

        {/* Product Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation,  Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3500 }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            style={{ paddingBottom: "60px" }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1  overflow-hidden  border border-gray-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3
                      className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <a
                      href={product.link}
                      className="inline-flex items-center bg-gray-800 text-white px-4 py-3 rounded-xl font-semibold hover:from-primary/80 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      View Details
                      <MdKeyboardDoubleArrowRight size={24} />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </Layout>
  );
}
