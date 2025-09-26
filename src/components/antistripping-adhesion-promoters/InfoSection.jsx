import Image from 'next/image';
import Link from 'next/link';

export default function InfoSection({
  title,
  paragraphs = [],
  imageSrc,
  imageAlt = '',
  reverse = false,
  brochureLink = '/Images/shanker-wire/products/products-brochure.pdf', // ✅ pass brochure link as prop
}) {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Image Section */}
        <div
          className={`w-full md:basis-[35%] ${
            reverse ? 'order-1 lg:order-2' : 'order-1 lg:order-2'
          }`}
        >
          <div className="relative w-full h-72 md:h-72 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>

        {/* Text Section */}
        <div
          className={`w-full md:basis-[65%] ${
            reverse ? 'order-2 lg:order-1' : 'order-2 lg:order-1'
          }`}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">{title}</h2>

          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-gray-600 text-lg mb-4 text-justify">
              {text}
            </p>
          ))}

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Request Quote */}
            <Link href="#quoteForm">
              <button className="bg-[#20598d] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer hover:bg-[#2a2d33]">
                Request a Quote
              </button>
            </Link>

            {/* Brochure Download */}
           <a
  href={brochureLink}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white border border-[#3b4047] text-[#3b4047] font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer hover:bg-gray-100"
>
  View Brochure
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
