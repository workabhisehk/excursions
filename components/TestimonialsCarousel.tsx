'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  avatar?: string;
  text: string;
  tour: string;
  date: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          key={currentIndex}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-500"
        >
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-elevated rounded-lg p-4 sm:p-6 bg-card"
            >
              <div className="mb-4">
                <div className="flex text-gold-accent mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                {testimonial.avatar && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mb-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-sm sm:text-base text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12">
        <button
          onClick={goToPrevious}
          className="p-2 sm:p-3 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation"
          aria-label="Previous testimonials"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-accent'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 sm:p-3 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation"
          aria-label="Next testimonials"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

