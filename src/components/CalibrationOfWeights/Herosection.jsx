'use client';
import { FaBalanceScale } from 'react-icons/fa';
import { useState } from 'react';
import QuoteFormModal from '../common/Footerform';

export default function HeroSection({ image, heading, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenQuoteForm = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        className="relative bg-gradient-to-r from-blue-900/80 to-blue-600/80 text-white py-16 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}

        <div className="relative max-w-4xl mx-auto">
          <FaBalanceScale className="mx-auto text-5xl mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold">{heading}</h1>
          <p className="mt-4 text-lg md:text-xl">{description}</p>
          <button
            onClick={handleOpenQuoteForm}
            className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold shadow-lg hover:bg-gray-100 z-50 cursor-pointer"
          >
            Request Calibration Service
          </button>
        </div>
      </section>

      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
