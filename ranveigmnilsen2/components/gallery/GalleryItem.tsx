import useSWR from 'swr';
import GalleryModal from './GalleryModal';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GalleryItem() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: galleryItem, error } = useSWR(slug ? `/gallery/${slug}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!galleryItem) return <div>Loading...</div>;

  // Only show modal if gallery item exists
  const showModal = galleryItem && slug;

  return showModal ? (
    <GalleryModal galleryItem={galleryItem} onClose={() => router.push('/')} />
  ) : null;
}
