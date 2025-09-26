import { useState } from 'react';
import QuoteFormModal from './Footerform';

export default function GetInTouchButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenQuoteForm = e => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        <button
          onClick={handleOpenQuoteForm}
          className="bg-[#20598d] text-white text-md font-medium px-3 py-2 rounded-l-md shadow-md hover:bg-black/100 cursor-pointer transition"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Get in Touch
        </button>
      </div>
      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
