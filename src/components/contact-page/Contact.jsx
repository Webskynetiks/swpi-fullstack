import Particles from 'react-tsparticles';
import ParticleBackground from '../ParticleBackground';

export default function ContactUs() {
  return (
    <section className="relative py-8 mt-[12vh] bg-[#1daae2]">
      <ParticleBackground />
      <div className="absolute inset-x-0 top-0 h-80 bg-cover bg-center">
        <div className="absolute inset-0 "></div>
      </div>
      <div className="relative z-10 text-center text-white py-16">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </div>
      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-0px]">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-3xl mb-4" style={{ color: '#e42a69' }}>
            🗓️
          </div>
          <div class="contact-card  text-black">
            <div class="icon"></div>
            <h3>Schedule a Demo</h3>
            {/* <p>Meet with our expert team</p> */}
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Psy92dHly4HYWjb6hcj0MQ-sVUMNQugRZpNGv1yjGLrEFRY1-ogKDPF-gGoIYoQEZquL5iY65"
              target="_blank"
              class="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              Book a Demo
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-3xl mb-4" style={{ color: '#e42a69' }}>
            ✉️
          </div>
          <h3 className="font-semibold text-lg text-black">Email us</h3>
          <a
            href="mailto:sales@skynetiks.com"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 "
          >
            sales@skynetiks.com
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <div className="text-3xl mb-4" style={{ color: '#e42a69' }}>
            ⏰
          </div>
          <h3 className="font-semibold text-lg text-black">Business Hours</h3>
          <p className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 ">
            Monday -Friday{' '}
          </p>
          <p className="text-black"></p>
        </div>
        <div className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center bg-white">
          <div className="text-black text-3xl mb-4">📞</div>
          <h3 className="font-semibold text-lg text-black ">Call us</h3>
          <a
            href="tel: +91 9212378780"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            +91 9212378780
          </a>
        </div>
      </div>
    </section>
  );
}
