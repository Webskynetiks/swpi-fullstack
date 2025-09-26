export default function ApplicationsList() {
  const industries = [
    "Pharmaceutical & Research Laboratories",
    "Food & Beverages Industry",
    "Manufacturing & Production Units",
    "Transport & Logistics (Weighbridges)",
    "Government & Legal Metrology Compliance",
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center">Applications of Calibration Services</h2>
      <ul className="list-disc list-inside space-y-3 text-lg">
        {industries.map((industry, i) => (
          <li key={i}>{industry}</li>
        ))}
      </ul>
    </section>
  );
}
