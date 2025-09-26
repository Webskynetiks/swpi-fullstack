const scopes = [
  {
    range: "1 mg to 200 g",
    classType: "F1 Class Precision Weights",
    desc: "Ideal for laboratory use and pharmaceutical testing requiring high accuracy.",
  },
  {
    range: "500 g to 50 kg",
    classType: "M1 Class Standard Weights",
    desc: "Used for industrial weighing scales and commercial balance calibration.",
  },
  {
    range: "100 kg to 1000 kg",
    classType: "M1 Class High-Capacity Weights",
    desc: "Heavy-duty calibration for industries and weighbridge applications.",
    special: true,
  },
];

export default function CalibrationScope() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Scope of Calibration</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {scopes.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${
                item.special ? "border-2 border-blue-600 bg-blue-50" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold">{item.range}</h3>
              <p className="text-blue-600 font-medium">{item.classType}</p>
              <p className="mt-2 text-gray-600">{item.desc}</p>
              {item.special && (
                <span className="inline-block mt-4 px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
                  Special Feature
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
