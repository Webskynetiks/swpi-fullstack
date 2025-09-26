import { useState, useEffect } from 'react';
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { toast, Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    address: '',
    message: '',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log('📤 Sending form data:', formData);

    try {
      await window.Email.send({
        Host: 'smtp.elasticemail.com',
        Port: 2525,
        Username: '',
        Password: '0034F7862CA6D48C01DD459871E657D48E23',
        To: '',
        From: '',
        Subject: `Contact Request from ${formData.name}`,
        Body: `
          <strong>Name:</strong> ${formData.name}<br/>
          <strong>Email:</strong> ${formData.email}<br/>
          <strong>Mobile:</strong> ${formData.mobile}<br/>
          <strong>Company:</strong> ${formData.company}<br/>
          <strong>Address:</strong> ${formData.address}<br/>
          <strong>Message:</strong> ${formData.message}<br/>
          <strong>Page URL:</strong> ${window.location.href}
        `,
      });

      toast.success('Request sent successfully!', {
        duration: 4000,
        style: { background: '#4caf50', color: 'white' },
      });

      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        address: '',
        message: '',
      });
    } catch (error) {
      console.error('❌ Email send failed:', error);
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        style: { background: '#f44336', color: 'white' },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border- border-gray-100">
            <h1 className="text-xl text-center md:text-4xl font-bold text-[#3b4047] mb-8 underline">
              Contact Us
            </h1>

            {/* Call Us Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#3b4047] mb-4">Call Us</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <FiPhone className="text-[#3b4047] text-lg" />
                  <span>+91 7488789887</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-[#3b4047] text-lg" />
                  <span>+91 9386142223</span>
                </div>
              </div>
            </div>

            {/* Email Us Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#3b4047] mb-4">Email Us</h2>
              <div className="space-y-3 text-gray-700">
               
                <div className="flex items-center gap-2">
                  <FiMail className="text-[#3b4047] text-lg" />
                  <a href="mailto:swpi@weights-swpi.com" className="hover:underline">
                    swpi@weights-swpi.com
                  </a>
                </div>
              </div>
            </div>

            {/* Our Address Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#3b4047] mb-4">Our Address</h2>
              <div className="text-gray-700">Kalirekha, DEOGHAR – 814112 INDIA</div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="0 p-2 md:p-8 rounded-lg">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-[#3b4047] text-center">GET IN TOUCH</h2>
            </div>

            <div className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black"
                />
              </div>

              {/* Mobile and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black"
                />
              </div>

              {/* Address Field */}
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black"
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical text-black"
              ></textarea>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#3b4047] text-white font-semibold py-3 px-6 rounded-md hover:ring-gray-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
