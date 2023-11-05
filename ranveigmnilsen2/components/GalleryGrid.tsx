import { getGallery } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function GalleryGrid() {

    const gallery = await getGallery();
    
    return (
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {gallery.map((i) => (
            <div key={i._id} className="grid gap-3">
                <Image src={i.image} alt={i.name} width={400} height={600}/>
            </div>))}
        </div>
        </div>
    )};





//
//    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//      {gallery.map((i) => (
//        <div key={i._id} className="flex flex-col">
//          <Image src={i.image} alt={i.name || 'Artwork image'} className="w-full h-auto object-cover rounded-lg shadow-md" />
//          <h2 className="mt-2 text-lg text-center font-semibold">{i.name}</h2>
//        </div>
//      ))}
//    </div>
//  </div>
