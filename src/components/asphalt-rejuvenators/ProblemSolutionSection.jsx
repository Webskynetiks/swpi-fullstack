import { FiAlertCircle, FiZap } from 'react-icons/fi';

export default function ProblemSolutionCards({
  problemTitle,
  problemText,
  solutionTitle,
  solutionText,
}) {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Problem Card */}
        <div className="bg-[#f3f4f6] border border-red-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center mb-3 text-[#3b4047] font-semibold text-lg">
            <FiAlertCircle className="w-6 h-6 mr-2" />
            {problemTitle}
          </div>
          <p className="text-gray-700 text-base leading-relaxed">{problemText}</p>
        </div>

        {/* Solution Card */}
        <div className="bg-[#f3f4f6] border border-green-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center mb-3 text-[#3b4047] font-semibold text-lg">
            <FiZap className="w-6 h-6 mr-2" />
            {solutionTitle}
          </div>
          <p className="text-gray-700 text-base leading-relaxed">{solutionText}</p>
        </div>
      </div>
    </section>
  );
}
