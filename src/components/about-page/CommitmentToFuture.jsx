export default function CommitmentToFuture() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#3b4047] mb-4">Commitment to the Future</h2>
        <div className="w-20 h-1 bg-[#3b4047] mx-auto mb-10" />

        {/* Feature Card */}
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 text-left">
          {/* Optional image */}
          <img
            src="/Images/commitments.webp"
            alt="Future Innovation"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-sm"
          />

          {/* Text Content */}
          <div className="flex-1">
            <p className="text-gray-700 text-lg mb-6">
              We continue to innovate with new technologies and products that increase road lifespan
              and reduce maintenance costs. Our dedicated R&D team is actively working on advanced
              construction and maintenance chemicals to meet the evolving needs of modern
              infrastructure.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#3b4047] p-4 rounded-lg shadow-sm">
              <p className="text-[#3b4047] font-semibold text-lg italic">
                “We believe in building roads — and trust — that last for generations.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
