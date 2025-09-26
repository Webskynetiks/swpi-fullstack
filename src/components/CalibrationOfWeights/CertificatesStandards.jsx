'use client';
import { FaBalanceScale } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-900/80 to-blue-600/80 text-white py-16 px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/weights-bg.jpg')" }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
      
      <div className="relative max-w-4xl mx-auto">
        <FaBalanceScale className="mx-auto text-5xl mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold">Calibration of Weights</h1>
        <p className="mt-4 text-lg md:text-xl">
          NABL Accredited Laboratory for Precision & High-Capacity Weight Calibration
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold shadow-lg hover:bg-gray-100">
          Request Calibration Service
        </button>
      </div>
    </section>
  );
}
