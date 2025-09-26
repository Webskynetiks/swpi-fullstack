import AboutSection from '@/components/about-page/AboutSection';
import CommitmentToFuture from '@/components/about-page/CommitmentToFuture';
import LeadershipLegacy from '@/components/about-page/LeadershipLegacy';
import ClientLogoSlider from '@/components/about-page/Ourclients';
import QualityAccreditation from '@/components/about-page/Qualityaccreditation';
import WhatWeDo from '@/components/about-page/Whatwedo';
import Testimonials from '@/components/common/Testimonial';
import HeroSection from '@/components/home/Herosection';
import Layout from '@/layout/Layout';
import Head from 'next/head';

export default function Aboutus() {
  return (
    <>
      <Layout>
      

<HeroSection showButton={false} />
        <QualityAccreditation />
        <LeadershipLegacy/>
        {/* <CommitmentToFuture /> */}
        <Testimonials/>
      </Layout>
    </>
  );
}
