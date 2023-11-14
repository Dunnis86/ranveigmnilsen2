import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';


export default function GalleryModal({ currentIndex, gallery, isOpen, onClose }) {
  const [index, setIndex] = useState(currentIndex);

  // Handlers for swipeable
  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => (i < gallery.length - 1 ? i + 1 : i)),
    onSwipedRight: () => setIndex((i) => (i > 0 ? i - 1 : i)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      } else if (e.key === 'ArrowRight') {
        setIndex((prevIndex) => (prevIndex < gallery.length - 1 ? prevIndex + 1 : prevIndex));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gallery.length]);

  // Handle outside click
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modalBackdrop') {
      onClose();
    }
  };

  if (!isOpen) return null;

  const item = gallery[index];

  return (
    <div id="modalBackdrop" {...handlers} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOutsideClick}>
      <div className="relative bg-white p-5 rounded-lg max-w-3xl max-h-full overflow-y-auto">
        <button className="absolute top-0 right-0 text-3xl p-4" onClick={onClose}>&times;</button>
        <div className="flex justify-center items-center space-x-4">
          <button className="hidden sm:inline-block text-4xl p-4 disabled:opacity-50" onClick={() => setIndex(index - 1)} disabled={index === 0}>&lt;</button>
          <Image
            src={item.image}
            alt={item.name}
            width={800}
            height={600}
            layout="intrinsic"
            className="rounded-lg"
          />
          <button className="hidden sm:inline-block text-4xl p-4 disabled:opacity-50" onClick={() => setIndex(index + 1)} disabled={index === gallery.length - 1}>&gt;</button>
        </div>
        <h2>{item.name}</h2>
        {/* Image navigation dots */}
        <div className="flex justify-center mt-4">
          {gallery.map((_, idx) => (
            <span
              key={idx}
              className={`inline-block h-2 w-2 mx-1 rounded-full ${index === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        {/* Additional gallery item info */}
      </div>
    </div>
  );
}

