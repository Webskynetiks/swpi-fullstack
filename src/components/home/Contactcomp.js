// components/ContactSection.js
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          We are <span className="text-blue-700">Here to Help You</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Reach out via email, phone, or visit us in person. We’re always here to support your
          financial journey.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <FaEnvelope className="text-blue-700 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Email Us</h3>
              <a href="mailto:md@varrenyam.com" className="text-gray-700 text-lg hover:underline ">
                md@varrenyam.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <FaPhoneAlt className="text-gray-700 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Call Us</h3>
              <a href="tel:+919599588308" className="text-gray-700 hover:underline text-lg mb-1">
                +91 9599588308
              </a>
              <a href="tel:+919958302198" className="text-gray-700 hover:underline text-lg">
                +91 9958302198
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <FaMapMarkerAlt className="text-blue-700 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Visit Us</h3>
              <p className="text-gray-700 text-lg text-center">
                Unit 408–409, 4th Floor, Enkay Centre, Wing A, Plot A, Vanijya Nikunj, Udyog Vihar,
                Phase V, Gurgaon, Haryana 122016
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
