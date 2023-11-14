import { createClient, groq } from "next-sanity";
import { Gallery } from "./types/Gallery";

const client = createClient({
    projectId: "x2eo8s32",
    dataset: "ranveigmnilsen2",
    apiVersion: "2023-10-08",
    useCdn: false
    });

export async function getGallery(): Promise<Gallery[]> { 
  return client.fetch(
    groq`*[_type == "gallery"]{ 
        _id,
        name,
        "slug": slug.current,
        "author": author,
        "description": description,
        "image": image.asset->url
      }`
  )
}

export async function fetchGalleryItem(slug) {
  const query = groq`*[_type == "gallery" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    "author": author,
    "description": description,
    "image": image.asset->url
  }`;
  console.log(query);
  try {
    const result = await client.fetch(query, { slug });
    if (!result) {
      console.error('No result for slug:', slug);
      throw new Error('Resource not found');
    }
    return result;
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
}

