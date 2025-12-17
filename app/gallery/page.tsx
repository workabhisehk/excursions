'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

// Gallery images with diverse cocktail/bar images
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80&fit=crop&crop=center', alt: 'Cocktail tour in Dallas', city: 'Dallas' },
  { id: 2, src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80&fit=crop&crop=center', alt: 'Mixology experience', city: 'Fort Worth' },
  { id: 3, src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80&fit=crop&crop=center', alt: 'Bar hopping tour', city: 'Dallas' },
  { id: 4, src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80&fit=crop&crop=center', alt: 'Cocktail tasting', city: 'Fort Worth' },
  { id: 5, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop&crop=center', alt: 'Group tour experience', city: 'Dallas' },
  { id: 6, src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80&fit=crop&crop=center', alt: 'Craft cocktails', city: 'Fort Worth' },
  { id: 7, src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80&fit=crop&crop=center', alt: 'Bar interior', city: 'Dallas' },
  { id: 8, src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80&fit=crop&crop=center', alt: 'Cocktail presentation', city: 'Fort Worth' },
  { id: 9, src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80&fit=crop&crop=center', alt: 'Tour group', city: 'Dallas' },
  { id: 10, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop&crop=center', alt: 'Cocktail bar atmosphere', city: 'Fort Worth' },
  { id: 11, src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80&fit=crop&crop=center', alt: 'Mixology demonstration', city: 'Dallas' },
  { id: 12, src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80&fit=crop&crop=center', alt: 'Evening cocktail tour', city: 'Fort Worth' },
];

const galleryVideos = [
  { id: 1, title: 'Dallas Cocktail Tour Highlights', embedId: 'dQw4w9WgXcQ' },
  { id: 2, title: 'Fort Worth Mixology Experience', embedId: 'dQw4w9WgXcQ' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const filteredImages = selectedCity === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.city === selectedCity);

  const cities = ['all', ...Array.from(new Set(galleryImages.map(img => img.city)))];

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            GALLERY
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Explore photos and videos from our cocktail tours. See the amazing experiences 
            our guests have enjoyed in Dallas, Fort Worth, and beyond.
          </p>
        </div>

        {/* City Filter */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center mb-8 sm:mb-12">
          <label className="font-semibold text-sm sm:text-base whitespace-nowrap">Filter by City:</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2.5 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base min-h-[44px] touch-manipulation"
          >
            {cities.map(city => (
              <option key={city} value={city}>
                {city === 'all' ? 'All Cities' : city}
              </option>
            ))}
          </select>
        </div>

        {/* Image Gallery */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {galleryVideos.map((video) => (
              <div key={video.id} className="card-elevated rounded-lg overflow-hidden bg-card">
                <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-foreground/70">
                  <Image
                    src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1200&q=80&fit=crop&crop=center"
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-10 h-10 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-white font-semibold text-lg">{video.title}</p>
                      <p className="text-sm text-white/80 mt-2">
                        Click to watch video
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors"
                aria-label="Previous"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {selectedImage < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors"
                aria-label="Next"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

