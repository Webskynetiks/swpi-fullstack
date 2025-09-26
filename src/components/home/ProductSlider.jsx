"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const products = [
    {
    title: "Test Weights  Rectangular Shape",
    description: "SWPI’s Model No. 187 Test Weights are manufactured in denominations from 500 kg to 1000 kg, making them highly reliable for the calibration of heavy-duty weighing machines. Constructed from high-quality pig iron with a smooth surface finish, these rectangular weights are easy to stack and ensure long-term calibration accuracy.",
    image: "/Images/shanker-wire/products/test-weight-rectangular-shape.png",
    link: "/products/test-weights"
  },
  {
    title: "Standard Weights (100 kg to 1000 kg)",
    description: "Our Standard Weights are designed in both rectangular and cylindrical shapes, available in denominations from 100 kg to 1000 kg. These weights are commonly used for calibration of industrial weighing machines, weighbridges, and large-scale instruments. Manufactured from durable cast iron and coated for corrosion resistance, they provide dependable accuracy in industrial applications.",
    image: "/Images/shanker-wire/products/standard-weights.png",
    link: "/products/standard-weights"
  },
  {
    title: "Slotted Weights with Hanger",
    description: "Our slotted weights with hanger are designed for easy stacking and accurate calibration in laboratory and industrial applications. Manufactured from premium materials, they ensure precision in weight testing and are available in a wide range of denominations from 100 g to 20 kg. Their hanger design makes them convenient for use in mechanical balances and other calibration setups.",
    image: "/Images/shanker-wire/products/slotted-weights.png",
    link: "/products/swpi-model-87-93-slotted-weights-with-hanger-100g-to-20kg-1n-to-200n"
  },
  {
    title: "Roller Weights",
    description: "Heavy-duty roller weights are built for applications requiring smooth movement and easy handling during calibration. With capacity options ranging from 200 kg to 500 kg, these weights are designed for rolling and lifting with minimal effort. Their rugged construction ensures long-term durability, making them suitable for demanding industrial environments.",
    image: "/Images/shanker-wire/products/roller-weights.png",
    link: "/products/swpi-model-168-170-roller-weights-lifting-rolling-200kg-500kg"
  },
  {
    title: "Cylindrical Weights Schengener States",
    description:"These precision cylindrical weights, ranging from 100 g to 10 kg, are crafted in compliance with international standards. They are ideal for laboratory calibration, research institutions, and industries that demand highly accurate measurements. The cylindrical shape ensures stable placement, and the polished finish enhances both durability and performance.",
    image: "/Images/shanker-wire/products/cylindrical-weights.png",
    link: "/products/model-no-swpi-171-176-cylindrical-weights-100g-to-10kg"
  },
  {
    title: "Test Weights Hexagonal Shape",
    description: "Our test weights provide reliable calibration solutions for a variety of weighing instruments. Available in denominations from 100 g to 20 kg, they are engineered to deliver consistent accuracy for commercial, laboratory, and industrial use. Their robust construction ensures resistance to corrosion and wear, guaranteeing long-term performance.",
    image: "/Images/shanker-wire/products/test-weight-hexagonal-shape.png",
    link: "/products/model-no-swpi-137-145-test-weights-100g-to-20kg"
  },
  {
    title: "Bell Weights",
    description: "Bell weights are designed with a traditional bell shape for easy handling and stacking. They are available in a wide range from 5 g to 500 g, making them suitable for precision calibration and trade verification. The durable finish ensures long-lasting usability while maintaining accurate weight standards.",
    image: "/Images/shanker-wire/products/bell-weights.webp",
    link: "/products/model-no-swpi-47-bell-weights-5g-to-500g"
  },
  {
    title: "Proportional Weights",
    description: "Our cast iron weights are manufactured with high-grade iron and are available in proportional ratios of 100:1 and 50:1. These weights are commonly used as counterpoise weights in platform scales and heavy-duty weighing machines. Finished with protective coating, they resist rust and corrosion, ensuring long-lasting performance even in rough environments.",
    image: "/Images/shanker-wire/products/proportional-weights.png",
    link: "/products/model-no-swpi-136-proportional-weights-ratio-100-1-and-50-1"
  },

 
  {
    title: "Avoirdupois Weights (1/4 lb to 56 lb)",
    description: "SWPI Avoirdupois Weights are manufactured as per traditional British measurement standards. Available in denominations ranging from 1/4 lb to 56 lb, they are ideal for trade verification and calibration. Made from high-quality cast iron with smooth finishing, these weights ensure accurate and reliable performance in industrial and commercial use.",
    image: "/Images/shanker-wire/products/avoirdupois-weights.png",
    link: "/products/avoirdupois-weights"
  }
];

export default function ProductSlider() {
  return (
    <section className="py-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#3b4047]">

            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
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
            style={{ paddingBottom: "20px" }}
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
                      className="inline-flex items-center bg-[#20598d] text-white px-4 py-3 rounded-xl font-semibold hover:from-primary/80 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
  );
}
