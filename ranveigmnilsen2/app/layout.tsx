import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

//Navbar URL: https://flowbite.com/docs/components/gallery/
//Framer motion video: https://www.youtube.com/watch?v=0GgwX0nfAb0 


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ranveig M Nilsen',
  description: 'ranveigmnilsen.com is a web gallery that display my art. ranveigmnilsen.com er et webgalleri som viser min kunst. Bildene er hovedsakelig malt med akrylmaling, og redskapene er pensel, palettkniv og skrape (bankkort). Maleprosessen starter med en ide eller et ønske om å formidle noe. Det kan bli figurativt eller abstrakt, noe jeg sjelden vet på forhånd.',
  keywords: 'abstrakt, figurativ, kunst, maleprosess, maling, maleri, akrylmaling, pensel, skrape, tanker, følelser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
