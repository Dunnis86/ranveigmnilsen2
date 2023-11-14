"use client"

// GalleryGrid.tsx

import Image from 'next/image';
import { useState } from 'react';
import GalleryModal from './gallery/GalleryModal';

export default function GalleryGrid({ gallery }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4">
      {gallery.map((item, index) => (
        <div key={item._id} className="relative mb-4">
          {/* Make this div clickable and have it open the modal */}
          <div onClick={() => openModal(index)} className="cursor-pointer">
            <Image
              src={item.image}
              alt={item.name}
              layout="responsive"
              width={400} // Use the actual aspect ratio of your images
              height={300} // Use the actual aspect ratio of your images
              className="w-full rounded-md"
              priority={index < 10} // Optionally prioritize the first 10 images
            />
          </div>
          {/* Overlay content goes here if needed */}
        </div>
      ))}

      {modalIsOpen && (
        <GalleryModal
          currentIndex={currentIndex}
          gallery={gallery}
          isOpen={modalIsOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}


