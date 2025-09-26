import HeroSection from '@/components/home/Herosection';
import ImageSlider from '@/components/home/ImageSlider';
import Layout from '@/layout/Layout';
import WhyChooseUsSection from '@/components/home/Servicesection';
import IndustriesWeServeSection from '@/components/home/Industries';
import CertificateSlider from '@/components/home/Certifications';
import ClientLogoSlider from '@/components/about-page/Ourclients';
import WhatWeDo from '@/components/about-page/Whatwedo';
import Head from 'next/head';
import Testimonials from '@/components/common/Testimonial';
import CertificationsSection from '@/components/common/CertificationsSection';
import CallToAction from '@/components/common/CallToAction';
import ProductSlider from '@/components/home/ProductSlider';
import Cities from '@/components/home/Cities';

function index() {
  return (
    <Layout>
  
      <ImageSlider />
      <HeroSection />
        <ProductSlider/>
      <WhyChooseUsSection />
       <Testimonials/>
      <CertificateSlider />
      <IndustriesWeServeSection />
     
      <Cities/>
      <CertificationsSection/>
      <CallToAction/>
    
      
    </Layout>
  );
}

export default index;
