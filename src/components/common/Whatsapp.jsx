import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp() {
  return (
    <>
      <div className="fixed bottom-5 right-5 md:right-10 z-50">
        <a
          href="https://wa.me/+919386142223"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full inline-flex  items-center space-x-2 cursor-pointer z-50"
        >
          <FaWhatsapp size={45} />
        </a>
      </div>
    </>
  );
}

export default Whatsapp;
