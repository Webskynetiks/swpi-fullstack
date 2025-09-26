"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="relative bg-gray-100 py-16 text-white overflow-hidden border border-gray-300
                 bg-[url('/Images/shanker-wire/products/best-weights-and-callabration-company-india.webp')] bg-cover bg-center bg-fixed"
    >
      {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Looking for{" "}
           
              NABL Certified Calibration Weights ?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 font-bold">
            Get in touch with our expert team today and ensure precision,
            compliance, and global standards for your weighing needs.
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-[#20598d]  rounded-2xl shadow-lg  font-bold
                         transition-all duration-300 bg-white hover:bg-gray-200 cursor-pointer"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
