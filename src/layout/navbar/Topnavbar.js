'use client';

import { Mail, Phone, FileText } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="hidden lg:block bg-[#20598d] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-2">
        {/* Left side: Contact Info */}
        <div className="flex flex-wrap items-center space-x-4 text-white text-sm">
          <div className="flex items-center space-x-1">
            <Mail size={14} />
            <a href="mailto:swpi@weights-swpi.com" className="hover:underline">
              swpi@weights-swpi.com
            </a>
          </div>

          <div className="flex items-center space-x-1 border-l border-white pl-4">
            <Phone size={14} />
            <a href="tel:+91 7488789887" className="hover:underline">
              +91 7488789887
            </a>
          </div>

          <div className="flex items-center space-x-1 border-l border-white pl-4">
            <Phone size={14} />
            <a href="tel:+91 9386142223" className="hover:underline">
              +91 9386142223
            </a>
          </div>
        </div>

        {/* Right side: Download Brochure Button */}
        <div>
          <a
            href="/Images/shanker-wire/products/products-brochure.pdf" // change this path to your actual brochure file
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#fff] text-black/85 px-4 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            <FileText size={16} />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
