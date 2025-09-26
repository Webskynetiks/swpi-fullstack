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
    title: " Rectangular Shape 100 kg to 1000 kg",
    description: "Rectangular standard weights designed in compliance with international calibration norms. Available in denominations from 100 kg to 1000 kg, these weights are widely used in industries, research labs, and calibration centers for large-scale testing and verification.",
    image: "/Images/shanker-wire/products/swpi-model-26-27a-standard-weights-rectangular-100kg-to-1000kg.webp",
    link: "/products/swpi-model-26-27a-standard-weights-rectangular-100kg-to-1000kg"
  },
  {
    title: "Cylindrical Weights  Suitable For Rolling",
    description: "Heavy-duty cylindrical weights designed for rolling, making them easy to move and handle during calibration. Available from 100 kg to 1000 kg, they are ideal for industries requiring reliable and portable large-scale testing solutions.",
    image: "/Images/shanker-wire/products/cylindrical-weights-rolling-100kg-to-1000kg.png",
    link: "/products/cylindrical-weights-rolling-100kg-to-1000kg"
  },
  {
    title: " Ⅰ  Shape Suitable for forklift & Crane lifting",
    description: "Specially designed test weights compatible with forklifts and cranes for effortless lifting and placement. Ranging from 100 kg to 1000 kg, these are suitable for heavy-duty calibration of weighing bridges, large industrial scales, and testing equipment.",
    image: "/Images/shanker-wire/products/standard-weights.png",
    link: "/products/swpi-model-26-27c-test-weights-forklift-crane-100kg-to-1000kg"
  },
  {
    title: "Cylindrical  with handle Suitable for  rolling and lifting",
    description: "Precision cylindrical weights designed for both lifting and rolling, offering flexibility in handling. With a capacity range of 100 kg to 1000 kg, these are perfect for industries that demand accurate yet practical calibration solutions.",
    image: "/Images/shanker-wire/products/swpi-model-26-27b-cylindrical-weights-lifting-rolling-100kg-to-1000kg.png",
    link: "/products/swpi-model-26-27b-cylindrical-weights-lifting-rolling-100kg-to-1000kg"
  },
  {
    title: "Fabricated  Suitable for lifting by forklift",
    description: "Fabricated standard weights designed for easy lifting by forklift, ensuring safe handling during industrial calibration. Built with durable materials, these weights provide long-lasting accuracy for heavy-duty applications.",
    image: "/Images/shanker-wire/products/fabricated-standard-weights-model-181-183.webp",
    link: "/products/fabricated-standard-weights-model-181-183"
  },
  {
    title: "Fabricated Suitable for stacking & lifting by forklift",
    description: "Reliable fabricated standard weights available in 100 kg to 1000 kg denominations. Specifically designed for forklift handling, these weights are suitable for large-scale calibration, testing, and certification of heavy weighing systems.",
    image: "https://weights-swpi.com/wp-content/uploads/2023/10/Fabricated-Standard-Weights1000kg-300x225.jpg",
    link: "/products/swpi-model-189-fabricated-standard-weights-forklift-100kg-to-1000kg"
  }
];



export default function StandardWeights() {
  return (
    <Layout>
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Our Standard Weights Products
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
