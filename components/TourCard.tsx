import Link from 'next/link';
import Image from 'next/image';
import { formatDate, formatTime } from '@/lib/utils';
import CTAButton from './CTAButton';

interface Tour {
  id: string;
  citySlug: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  eventbriteUrl: string;
  status: string;
}

interface TourCardProps {
  tour: Tour;
  cityName: string;
}

export default function TourCard({ tour, cityName }: TourCardProps) {
  const isAvailable = tour.status === 'available';
  
  return (
    <div className="card-elevated rounded-lg overflow-hidden bg-card">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={`https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80&fit=crop&crop=center`}
          alt={`${cityName} cocktail tour`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-xl sm:text-2xl text-card-foreground mb-1">
            {cityName} Tour
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {formatDate(tour.date)} at {formatTime(tour.time)}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto ${
            isAvailable
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {isAvailable ? 'Available' : 'Sold Out'}
        </span>
      </div>
      
      <div className="space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Duration: {tour.duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>${tour.price} per person</span>
        </div>
      </div>
      
      {isAvailable && tour.eventbriteUrl && (
        <CTAButton
          href={tour.eventbriteUrl}
          variant="primary"
          external
          className="w-full"
        >
          Book on Eventbrite
        </CTAButton>
      )}
      </div>
    </div>
  );
}

