import '@/styles/globals.css';
import 'react-quill/dist/quill.snow.css';
import '@/styles/quill-custom.css';
import { Roboto, Poppins } from 'next/font/google';
import { Mulish } from 'next/font/google';
import { Oswald } from 'next/font/google';
import { useEffect } from 'react';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

// Load Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

// Load Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

//Loda Oswald font
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   document.body.style.fontFamily = `"Segoe UI", system-ui, sans-serif`;
  // }, []);

  return (
    <main
      className={`${roboto.variable} ${poppins.variable} ${mulish.variable} ${oswald.variable} `}
    >
      <Component {...pageProps} />
    </main>
  );
}
