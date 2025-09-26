export default function Introduction({ paragraph, paragraphTwo }) {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
      <h2 className="text-2xl font-bold mb-4">Introduction</h2>
      
      <p className="text-lg leading-relaxed mb-4">
        {paragraph}
      </p>
      
      <p className="text-lg leading-relaxed">
        {paragraphTwo}
      </p>
    </section>
  );
}
