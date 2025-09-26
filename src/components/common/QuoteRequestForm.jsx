'use client';

import { useEffect, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { Toaster, toast } from 'react-hot-toast';

export default function QuoteRequestForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await window.Email.send({
        Host: 'smtp.elasticemail.com',
        Port: 2525,
        Username: '',
        Password: '0034F7862CA6D48C01DD459871E657D48E23',
        To: '',
        From: '',
        Subject: `Quote Request from ${form.name}`,
        Body: `
          <strong>Name:</strong> ${form.name}<br/>
          <strong>Email:</strong> ${form.email}<br/>
          <strong>Phone:</strong> ${form.phone}<br/>
          <strong>Company:</strong> ${form.company}<br/>
          <strong>Address:</strong> ${form.address}<br/>
          <strong>Message:</strong> ${form.message}<br/>
          <strong>Page URL:</strong> ${window.location.href}
        `,
      });

      toast.success('Request sent successfully!', {
        duration: 4000,
        style: { background: '#4caf50', color: 'white' },
      });

      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        message: '',
      });
    } catch (err) {
      console.error('Email sending failed:', err);
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        style: { background: '#f44336', color: 'white' },
      });
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-100 py-12 px-4" id="quoteForm">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* LEFT: Info Section */}
        <div className="bg-[#f5f7fa] p-2 lg:p-10 flex flex-col justify-center">
          <h2 className=" text-xl lg:text-3xl font-bold text-[#3b4047] mb-4 text-center">
            Request a Quote & Get Expert Guidance
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Have questions or need a custom solution? Our experts are here to help you choose the
            right product for your project. Fill out the form, and we will get back to you promptly
            with a tailored quote.
          </p>

          <ul className="mt-6 space-y-4 text-gray-800">
            <li className="flex items-start gap-3">
              <BsCheckCircleFill className="text-[#3b4047] mt-1" size={20} />
              <span>Premium Quality Products</span>
            </li>
            <li className="flex items-start gap-3">
              <BsCheckCircleFill className="text-[#3b4047] mt-1" size={20} />
              <span>Custom Solutions for Your Industry</span>
            </li>
            <li className="flex items-start gap-3">
              <BsCheckCircleFill className="text-[#3b4047] mt-1" size={20} />
              <span>Fast Response & Expert Support</span>
            </li>
          </ul>
        </div>

        {/* RIGHT: Form Section */}
        <div className="  p-4 lg:p-10 bg-white ">
          <h2 className="text-center text-2xl font-semibold text-[#3b4047] mb-6">
            Request a Product Quote
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="border border-gray-300 rounded px-4 py-3 w-full text-black bg-white"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Id"
                type="email"
                required
                className="border border-gray-300 rounded px-4 py-3 w-full text-black bg-white"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="border border-gray-300 rounded px-4 py-3 w-full text-black bg-white"
              />
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="border border-gray-300 rounded px-4 py-3 w-full text-black bg-white"
              />
            </div>

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="border border-gray-300 rounded px-4 py-3 w-full text-black bg-white"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="border border-gray-300 rounded px-4 py-3 w-full text-black bg-white"
            />

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#20598d] hover:bg-[#2c3033] text-white font-semibold px-8 py-3 rounded shadow transition"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
