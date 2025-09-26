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
    title: "Avoirdupois Weights 1/4 to 4lb Model No. SWPI : 125-133",
    image: "/Images/shanker-wire/products/avoirdupois-weights.png",
    description: `Avoirdupois Weights are traditionally used in commercial and industrial applications for weighing heavy goods. 
    These weights are manufactured from high-quality cast iron, with precise calibration to ensure accurate measurement. 
    They come in different nominal values ranging from 7 lb to 56 lb, making them ideal for general trade and industrial use. 
    Each weight is designed with durability in mind, coated with protective paint to resist rusting and surface wear.`,
    link: "/products/avoirdupois-weights-model-no-swpi-125-133"
  },
  {
    title: "Avoirdupois Weights (7 lb to 56 lb) – Model No. SWPI-60-63",
    image: "/Images/shanker-wire/products/avoirdupois-weights-7-lb-to-56-lb-model-no-swpi-60-63.png",
    description: `Model No. SWPI-60-63 Avoirdupois Weights are specifically designed for accuracy and heavy-duty applications. 
    Manufactured in sizes ranging from 7 lb to 56 lb, they are widely used for calibration and verification of commercial weighing machines. 
    Made from premium cast iron with a strong finish, these weights ensure long-lasting performance and compliance with metrological standards. 
    Each piece is rigorously tested to maintain precise tolerances for industrial use.`,
    link: "/products/avoirdupois-weights-7-lb-to-56-lb-model-no-swpi-60-63"
  }
];



export default function AvoirdupoisWeights() {
  return (
    <Layout>
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Our Avoirdupois Weights  Products
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
