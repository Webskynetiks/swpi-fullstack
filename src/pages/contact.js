import ContactSupport from '@/components/contact-page/Contactsupport';
import Layout from '@/layout/Layout';
import Image from 'next/image';
import Head from 'next/head';

export default function ContactSection() {
  return (
    <Layout>
     
      <div className="relative w-full h-[100px] md:h-[370px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Images/contact-banner.webp"
          fill
          className="object-cover"
          alt="Contact Banner"
        />

        {/* Black Overlay Layer */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 z-20">
          <div className="max-w-2xl text-white space-y-4">
            {/* Example Text */}
            {/* <h2 className="text-2xl md:text-5xl font-bold">Contact Us</h2>
      <p className="text-sm md:text-base">
        Let’s build something extraordinary together.
      </p> */}
          </div>
        </div>
      </div>

      <ContactSupport />
    </Layout>
  );
}
