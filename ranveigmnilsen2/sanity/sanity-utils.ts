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

