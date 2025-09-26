'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const groupedTestimonials = [
  {
    service: 'Restructuring & Debt Solutions',
    testimonials: [
      {
        name: 'Manish Kumar',
        title: 'CEO, TechBridge',
        quote:
          'Their cloud consulting services helped us design a scalable and cost-effective architecture.',
        image: 'https://randomuser.me/api/portraits/men/40.jpg',
      },
      {
        name: 'Neelam Saxena',
        title: 'Operations Manager, CloudWave',
        quote: 'The team is highly responsive and delivered our cloud projects on time and budget.',
        image: 'https://randomuser.me/api/portraits/women/27.jpg',
      },
    ],
  },
  {
    service: 'Debt Syndication & Funding Facilitation',
    testimonials: [
      {
        name: 'Suresh Iyer',
        title: 'IT Consultant, BizCloud',
        quote:
          'Their end-to-end cloud solutions made a huge difference in our operational efficiency.',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
      },
      {
        name: 'Anjali Rao',
        title: 'Product Manager, CloudNexus',
        quote:
          'Seamless integration with AWS and Azure platforms helped us scale quickly and efficiently.',
        image: 'https://randomuser.me/api/portraits/women/29.jpg',
      },
    ],
  },
  {
    service: 'Mergers & Acquisitions Advisory',
    testimonials: [
      {
        name: 'Amit Verma',
        title: 'CEO, CloudTech India',
        quote:
          'Business on Cloud transformed our online strategy with precision. They’re brilliant with tech and marketing!',
        image: 'https://randomuser.me/api/portraits/men/50.jpg',
      },
      {
        name: 'Sonal Kapoor',
        title: 'Strategist, GrowthHive',
        quote:
          'Professional, punctual, and performance-driven — exactly what we needed for scaling fast.',
        image: 'https://randomuser.me/api/portraits/women/21.jpg',
      },
    ],
  },
  {
    service: 'Insolvency Services & Advisory',
    testimonials: [
      {
        name: 'Vikram Patel',
        title: 'Founder, SecureCloud',
        quote:
          'Their cloud security solutions gave us peace of mind and helped meet compliance requirements.',
        image: 'https://randomuser.me/api/portraits/men/60.jpg',
      },
    ],
  },
];

export default function TestimonialSlider() {
  return (
    <>
      {groupedTestimonials.map((group, i) => (
        <section
          key={i}
          className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 sm:px-12 lg:px-24"
        >
          <div className="max-w-8xl mx-auto text-center mb-12">
            <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-3">
              What Our Clients Say — {group.service}
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Trusted by business leaders across India in {group.service}.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-8xl mx-auto"
          >
            {group.testimonials.map(({ name, title, quote, image }, idx) => (
              <SwiperSlide key={idx} className="h-full">
                <div className="cursor-pointer flex flex-col justify-between bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full border-2 border-black/70">
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src={image}
                      alt={name}
                      className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-md object-cover"
                    />
                    <div className="text-left">
                      <p className="text-xl font-semibold text-gray-900">{name}</p>
                      <p className="text-sm text-[#1daae2] font-medium">{title}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic text-base leading-relaxed border-t border-gray-200 pt-4 pb-10">
                    “{quote}”
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </>
  );
}
