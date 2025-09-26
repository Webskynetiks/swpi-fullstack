import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/blog', label: 'Blogs' },
    { href: '/faq', label: 'Faq' },
    { href: '/Images/shanker-wire/products/products-brochure.pdf', label: 'Download Brochure' },
  
  ];

  const productLinks = [
    { href: '/products/test-weights', label: 'Test Weights' },
    { href: '/products/standard-weights', label: 'Standard Weights' },
    { href: '/products/swpi-model-87-93-slotted-weights-with-hanger-100g-to-20kg-1n-to-200n', label: 'Slotted Weights With Hanger' },
    { href: '/products/swpi-model-168-170-roller-weights-lifting-rolling-200kg-500kg', label: 'Roller Weights' },
    { href: '/products/model-no-swpi-171-176-cylindrical-weights-100g-to-10kg', label: 'Cylindrical Weights as per Schengener States' },
    { href: '/products/model-no-swpi-137-145-test-weights-100g-to-20kg', label: 'Test Weight as per  OIML R-52 Hexagonal Shape' },
    { href: '/products/avoirdupois-weights', label: 'Avoirdupois Weights' },
    { href: '/products/model-no-swpi-47-bell-weights-5g-to-500g', label: 'Bell Weights' },
    { href: '/products/model-no-swpi-136-proportional-weights-ratio-100-1-and-50-1', label: 'Proportional Weights' },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt className="text-white" />, text: '91 9386142223' },
    { icon: <FaPhoneAlt className="text-white" />, text: '91 7488789887' },
    { icon: <FaEnvelope className="text-white" />, text: 'swpi@weights-swpi.com' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/TestWeights/', icon: <FaFacebookF /> },
    { href: 'https://www.linkedin.com/company/shanker-wire-products-industries', icon: <FaLinkedinIn /> },
    { href: 'https://www.instagram.com/shankerwireproductsindustries/', icon: <FaInstagram /> },
  ];

  return (
    <footer className="bg-[#20598d] text-white pt-12 pb-6 relative z-40-45 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="font-bold">Shanker Wire Products Industries</h2>
          <p className="mt-4 text-sm text-white">
            SWPI delivers world-class weighing and precision solutions with a legacy of trust, innovation, and accuracy for industries worldwide
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-1 lg:ml-20">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            {quickLinks.map(link => (
              <li key={link.href} className="hover:underline">
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-white">
            {productLinks.map(link => (
              <li key={link.href} className="hover:underline">
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item.icon} {item.text}
              </li>
            ))}
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#20598d] transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white pt-4 text-sm text-white bg-[#20598d] z-45">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 text-center md:text-left z-30">
            © {new Date().getFullYear()} Shanker Wire Products Industries All rights reserved.
          </div>
          <div className="text-center md:text-right z-30">
            Developed by{' '}
            <a
              href="https://skynetiks.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white hover:underline"
            >
              Skynetiks Technologies Pvt. Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
