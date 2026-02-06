"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart, X } from "lucide-react"

const photos = [
  {
    src: "/photos/Photo1.jpg",
    alt: "Mirror selfie together",
    caption: "Shopping dates are the best dates",
  },
  {
    src: "/photos/Photo2.jpg",
    alt: "Kiss on the bridge",
    caption: "That perfect moment on the bridge",
  },
  {
    src: "/photos/Photo3.jpg",
    alt: "Dressed up together",
    caption: "Looking our best, side by side",
  },
  {
    src: "/photos/Photo4.jpg",
    alt: "Sunset selfies together",
    caption: "Golden hour with my favorite person",
  },
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section className="px-4 py-20" id="gallery">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <Heart className="h-8 w-8 fill-primary text-primary" aria-hidden="true" />
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Moments Together
          </h2>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            A collection of memories that make my heart smile
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedPhoto(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label={`View ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-card/90 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-card-foreground">{photo.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-4 top-4 rounded-full bg-card/90 p-2 text-card-foreground backdrop-blur-sm transition-colors hover:bg-card"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[85vh] max-w-3xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              width={800}
              height={1067}
              className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-card/90 p-4 backdrop-blur-sm">
              <p className="text-center text-sm font-medium text-card-foreground">
                {photos[selectedPhoto].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
