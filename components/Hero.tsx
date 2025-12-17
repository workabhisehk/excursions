'use client';

import { useState } from 'react';
import CTAButton from './CTAButton';
import Image from 'next/image';
import Link from 'next/link';
import citiesData from '@/data/cities.json';

export default function Hero() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const activeCities = citiesData.cities.filter(city => city.status === 'active');

  return (
    <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
          alt="Cocktail bar interior with people enjoying drinks"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        {/* Main Headline - Eventbrite Style */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8 leading-tight">
          <span className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            MAKE YOUR NIGHT
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            UNFORGETTABLE
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-white/95 font-medium drop-shadow-lg">
          Premium Cocktail Tours in America's Best Cities
        </p>
        
        {/* Location Selector */}
        <div className="mb-6 sm:mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-white rounded-lg text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] text-base"
            >
              <option value="">Select a City</option>
              {activeCities.map(city => (
                <option key={city.slug} value={city.slug}>
                  {city.name}, {city.state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Primary CTA Button - Eventbrite Style */}
        <div className="mb-4 sm:mb-6">
          {selectedCity ? (
            <Link
              href={`/cities/${selectedCity}`}
              className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-white text-foreground rounded-full font-bold text-lg sm:text-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl min-h-[56px] flex items-center justify-center"
            >
              Book Tour Now →
            </Link>
          ) : (
            <Link
              href="/calendar"
              className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-white text-foreground rounded-full font-bold text-lg sm:text-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl min-h-[56px] flex items-center justify-center"
            >
              Book Tour Now →
            </Link>
          )}
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-sm sm:text-base">
          <Link
            href="/cities"
            className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
          >
            Explore All Cities
          </Link>
          <span className="text-white/60 hidden sm:inline">•</span>
          <Link
            href="/calendar"
            className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
          >
            View Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}

