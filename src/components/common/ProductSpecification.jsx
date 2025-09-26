'use client';

const ProductDetails = ({ title, description, specifications }) => {
  return (
    <section className="bg-white py-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Specifications Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
              <path fillRule="evenodd" d="M4.5 6.375A2.625 2.625 0 017.125 3.75h9.75a2.625 2.625 0 012.625 2.625v11.25a2.625 2.625 0 01-2.625 2.625h-9.75A2.625 2.625 0 014.5 17.625V6.375zm3.375.375a.75.75 0 000 1.5h8.25a.75.75 0 000-1.5h-8.25zM7.5 10.5a.75.75 0 01.75-.75h6.75a.75.75 0 010 1.5H8.25a.75.75 0 01-.75-.75zm0 3.375a.75.75 0 01.75-.75h6.75a.75.75 0 010 1.5H8.25a.75.75 0 01-.75-.75zm0 3.375a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
            Specifications
          </h3>

          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <tbody>
                {specifications.map((spec, index) => (
                  <tr
                    key={index}
                    className={`border-b last:border-b-0 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                  >
                    <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-800 border-r w-1/3 bg-gray-50">
                      {spec.label}
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
 
      </div>
    </section>
  );
};

export default ProductDetails;
