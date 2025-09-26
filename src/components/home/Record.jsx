import Image from 'next/image';

export default function OurRecords() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image with custom shape */}
        <div className="relative w-full h-full">
          <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] border-8 border-white shadow-xl">
            <Image
              src="https://varrenyam.com/static/media/Group%20159.1ed6131b843b358758588c534d7f3b97.svg" // replace with your image path
              alt="Team celebrating success"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Records List */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
            Our Records
          </h2>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Raised Fund',
                desc: 'Successfully secured Rs 5,000 crore from banks, financial institutions, NBFCs, and private equity to date.',
              },
              {
                number: '2',
                title: 'Restructured Debt',
                desc: 'Restructured debt amounting to INR 1 lakh Cr since VCPL’s inception.',
              },
              {
                number: '3',
                title: 'Ticket Services',
                desc: 'Serving a diverse clientele with ticket sizes from INR 50 Cr to INR 10,000 Cr, covering SMEs and large corporations.',
              },
              {
                number: '4',
                title: 'CIRP Resolution',
                desc: "Resolved over 2 lacs crores in lenders' dues under the Bankruptcy Code (IBC).",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="text-4xl font-bold text-gray-700">{item.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
