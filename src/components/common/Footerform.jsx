'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaCommentDots,
  FaPaperPlane,
  FaHeadset,
} from 'react-icons/fa';

const QuoteFormModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  // Load SMTP.js script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

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
        Subject: `Request from ${formData.name}`,
        Body: `
          <strong>Name:</strong> ${formData.name}<br/>
          <strong>Email:</strong> ${formData.email}<br/>
          <strong>Mobile:</strong> ${formData.mobile}<br/>
          <strong>Service:</strong> ${formData.service}<br/>
          <strong>Message:</strong> ${formData.message}<br/>
          <strong>Page URL:</strong> ${window.location.href}
        `,
      });

      toast.success(' Request sent successfully!', {
        duration: 4000,
        style: { background: '#4caf50', color: 'white' },
      });

      setFormData({
        name: '',
        email: '',
        mobile: '',
        service: '',
        message: '',
      });

      // Optionally close modal after short delay
      setTimeout(() => {
        onClose();
      }, 2000);
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
    <div className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-sm relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
        >
          ×
        </button>

        {/* Heading */}
        <div className="flex items-center mb-6">
          <FaHeadset className="text-[#3b4047] text-2xl mr-2" />
          <h2 className="text-xl font-bold text-[#3b4047]">Get in Touch</h2>
        </div>

        {/* Toast */}
        <Toaster position="top-center" reverseOrder={false} />

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#015790] text-black"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#015790] text-black"
            />
          </div>

          {/* Mobile */}
          <div className="relative">
            <FaPhone className="absolute top-3 left-3 text-gray-400" />
            <input
              id="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#015790] text-black"
            />
          </div>

          {/* Service */}
          <div className="relative">
            <FaBriefcase className="absolute top-3 left-3 text-gray-400" />
            <select
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 border rounded  focus:outline-none focus:ring-2 focus:ring-[#015790] text-black"
            >
              <option value="">Select a service</option>
              <option>Antistripping Agents</option>
              <option>Asphalt Rejuvenators</option>
              <option>Warm Mix Additives</option>
              <option>Thermoplastic Road Marking Paint</option>
              <option>Bitumen Emulsifiers</option>
              <option>Soil Stabilizers</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your message"
              className="w-full pl-10 pr-3 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#015790] text-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#3b4047] hover:bg-[#013f66] text-white font-semibold py-2 rounded transition"
          >
            {loading ? 'Sending...' : 'Submit Request'} <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteFormModal;
