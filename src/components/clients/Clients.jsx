import Image from 'next/image';

const clients = [
  {
    name: 'DLF Limited',
    logo: '/Images/clients/dlf.webp',
  },
  {
    name: 'IRCON International',
    logo: '/Images/clients/ircon.webp',
  },
  {
    name: 'National Highway Authority of India',
    logo: '/Images/clients/national-highway-authority-of-india.webp',
  },
  {
    name: 'NBCC (India) Limited',
    logo: '/Images/clients/nbcc.webp',
  },
  {
    name: 'Public Works Departments (PWD)',
    logo: '/Images/clients/public-work-department.png',
  },
  {
    name: 'Steel Authority of India Limited (SAIL)',
    logo: '/Images/clients/steel-authority-of-india-limited.webp',
  },
  {
    name: 'NCC Limited',
    logo: '/Images/clients/ncc.webp',
  },
  {
    name: 'Airport Authority of India',
    logo: '/Images/clients/airport-authority-of-india.webp',
  },
  {
    name: 'Border Roads Organisation',
    logo: '/Images/clients/border-roads-organisation.webp',
  },
  {
    name: 'International Exports',
    logo: '/Images/clients/international-exports.png',
  },
];

export default function ClientLogos() {
  return (
    <section className="py-8 px-6  lg:px-12">
      <div className="mt-6 text-center">
        <h3 className=" text-2xl lg:text-4xl font-semibold text-gray-800 mt-4  mb-8">
          Clients We Served
        </h3>
        {/* <p className="text-gray-600 mt-1 text-2xl mb-6">Trusted by over 50+ businesses worldwide</p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-full h-52 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-gray-700"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={80}
              className="h-36 mb-2"
            />
            <p className="text-sm text-center font-medium text-gray-700">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
