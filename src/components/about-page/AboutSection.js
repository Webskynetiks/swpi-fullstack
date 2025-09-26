'use client';

const AboutSection = () => {
  return (
    <>
      {/* Our Story Section */}
      <section className="py-8 lg:py-16 mt-[5vh]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate__animated animate__fadeInLeft">
              <h2 className="text-xl md:2xl font-bold mb-6 font-poppins text-black">
                About Us – OPAL PAINTS PRODUCTS PVT. LTD
              </h2>

              <p className="text-black mb-2  text-justify">
                OPAL PAINTS PRODUCTS PVT. LTD. established in 1986, is a recognized leader in the
                field of anti-stripping agents and road construction chemicals in India. From the
                very beginning, our focus has been on delivering reliable, high-quality solutions
                that improve road durability and performance. Our flagship product, SUPER-BOND XS,
                was rigorously tested and approved by the Central Road Research Institute (CRRI),
                New Delhi, in our founding year — setting a strong foundation of trust and technical
                excellence. Again in 2006, the product met all 11 parameters under the updated IS
                14982:2001 standards, reaffirming our commitment to innovation and compliance.
              </p>
              <p className="text-black mb-2  text-justify">
                With decades of experience and a forward-looking approach, Opal Paints continues to
                serve the evolving needs of infrastructure development across the country. Our
                solutions are engineered for performance, sustainability, and cost-efficiency —
                making them the preferred choice for contractors, engineers, and public sector
                projects alike. Backed by research, driven by quality, and trusted nationwide, we
                remain committed to building a stronger future, one road at a time.
              </p>
            </div>
            <div className="md:w-1/2 animate__animated animate__fadeInRight">
              <img
                src="/Images/about-bitumen-image.webp"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
