import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Head from 'next/head';
import GetInTouchButton from '@/components/common/Getintouch';
import Whatsapp from '@/components/common/Whatsapp';


function Layout({ children }) {
  return (
    <div>
     

      {/* Page Layout */}
      <Navbar />
      <main>{children}</main>
      <Whatsapp/>
      {/* <TawkMessenger /> */}
      <GetInTouchButton />
      <Footer />
    </div>
  );
}

export default Layout;
