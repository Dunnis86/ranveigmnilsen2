import React, { useState, useEffect } from 'react';
import GalleryGrid from '../GalleryGrid';
import GalleryModal from './GalleryModal';
import { getGallery } from '@/sanity/sanity-utils';

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    async function loadGallery() {
      const items = await getGallery();
      setGallery(items);
    }

    loadGallery();
  }, []);

  const handleImageClick = (slug) => {
    const item = gallery.find((item) => item.slug === slug);
    setModalItem(item);
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <>
      <GalleryGrid gallery={gallery} onImageClick={handleImageClick} />
      {modalItem && <GalleryModal galleryItem={modalItem} onClose={handleCloseModal} />}
    </>
  );
};

export default GalleryPage;
