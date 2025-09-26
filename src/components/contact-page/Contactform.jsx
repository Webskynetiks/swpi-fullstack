'use client';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = e => {
    const { placeholder, value } = e.target;
    const keyMap = {
      'Your Name *': 'name',
      'Your Email *': 'email',
      'Your Number *': 'mobile',
      'Subject *': 'subject',
      'Message *': 'message',
    };
    const key = keyMap[placeholder];
    if (key) {
      setFormData(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await window.Email.send({
        Host: 'smtp.elasticemail.com',
        Port: 2525,
        Username: 'sales@skynetiks.com',
        Password: 'A67B232604CAF3ECE4584F9DE30A17054104',
        To: 'sales@skynetiks.com',
        From: 'sales@skynetiks.com',
        Subject: `New Contact from ${formData.name}`,
        Body: `
          <strong>Name:</strong> ${formData.name}<br/>
          <strong>Email:</strong> ${formData.email}<br/>
          <strong>Mobile:</strong> ${formData.mobile}<br/>
          <strong>Subject:</strong> ${formData.subject}<br/>
          <strong>Message:</strong> ${formData.message}<br/>
          <strong>Page URL:</strong> ${window.location.href}
        `,
      });

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error('Error:', err);
      toast.error('Failed to send. Try again later.');
    }
    setLoading(false);
  };

  return (
    <section className="mb-4 px-4 lg:px-20">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6 text-center ">Get In Touch</h2>
          <form className="space-y-4 text-black" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-3 rounded-lg bg-white border border-gray-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full p-3 rounded-lg bg-white border border-gray-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Number *"
                className="w-full p-3 rounded-lg bg-white border border-gray-300"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Subject *"
                className="w-full p-3 rounded-lg bg-white border border-gray-300"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              placeholder="Message *"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 h-32"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="text-white font-bold py-3 px-6 rounded-lg bg-orange-600 hover:bg-orange-700"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6 text-center ">Our Offices</h2>
          <div className="space-y-6 text-black">
            {[
              {
                title: 'India Office',
                address: `B-609,610 Logix Technova, Sector-132\nNoida, UP 201304, India`,
              },
              {
                title: 'USA Office',
                address: `456 Digital Avenue, Tech Park\nSan Francisco, CA 94103`,
              },
              {
                title: 'Dubai Office',
                address: `DSO-IFZA-19577, IFZA Properties\nDubai Silicon Oasis, Dubai, UAE`,
              },
            ].map((office, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl p-3 flex items-start space-x-4 shadow-sm hover:shadow-lg transition"
              >
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{office.title}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
