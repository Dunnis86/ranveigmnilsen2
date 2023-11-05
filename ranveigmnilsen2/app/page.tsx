
"use client"
import Container from '../components/Container';
import GalleryGrid from '../components/GalleryGrid';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { getGallery } from "@/sanity/sanity-utils";


export default async function Home () {
  const gallery = await getGallery();

  return (
    <div>
      <Navbar/>
      <GalleryGrid/>
    </div>
  )
}


  


