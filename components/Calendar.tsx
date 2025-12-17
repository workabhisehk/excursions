'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatDate, formatTime } from '@/lib/utils';
import CTAButton from './CTAButton';
import './Calendar.css';

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

interface CalendarComponentProps {
  tours: Tour[];
  cities: Array<{ slug: string; name: string }>;
}

export default function CalendarComponent({ tours, cities }: CalendarComponentProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('all');

  // Filter tours by city
  const filteredTours = selectedCity === 'all'
    ? tours
    : tours.filter(tour => tour.citySlug === selectedCity);

  // Get tours for selected date
  const selectedDateTours = selectedDate
    ? filteredTours.filter(tour => {
        const tourDate = new Date(tour.date);
        return tourDate.toDateString() === selectedDate.toDateString();
      })
    : [];

  // Mark dates with tours
  const tileClassName = ({ date }: { date: Date }) => {
    const hasTour = filteredTours.some(tour => {
      const tourDate = new Date(tour.date);
      return tourDate.toDateString() === date.toDateString();
    });
    
    if (hasTour) {
      const tour = filteredTours.find(tour => {
        const tourDate = new Date(tour.date);
        return tourDate.toDateString() === date.toDateString();
      });
      
      if (tour?.status === 'available') {
        return 'has-tour available';
      } else if (tour?.status === 'sold-out') {
        return 'has-tour sold-out';
      }
      return 'has-tour';
    }
    
    return '';
  };

  const getCityName = (citySlug: string) => {
    const city = cities.find(c => c.slug === citySlug);
    return city?.name || citySlug;
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* City Filter */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-start sm:items-center">
        <label className="font-semibold text-sm sm:text-base whitespace-nowrap">Filter by City:</label>
        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setSelectedDate(null);
          }}
          className="w-full sm:w-auto px-4 py-2.5 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base min-h-[44px] touch-manipulation"
        >
          <option value="all">All Cities</option>
          {cities.map(city => (
            <option key={city.slug} value={city.slug}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {/* Calendar */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex-1 w-full">
          <Calendar
            onChange={(value) => setSelectedDate(value as Date)}
            value={selectedDate}
            tileClassName={tileClassName}
            minDate={new Date()}
            className="w-full"
          />
        </div>

        {/* Tour Details */}
        <div className="flex-1 w-full">
          {selectedDate ? (
            <div>
              <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">
                Tours on {formatDate(selectedDate.toISOString())}
              </h3>
              {selectedDateTours.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateTours.map(tour => (
                    <div key={tour.id} className="card-elevated rounded-lg p-4 sm:p-6 bg-card">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                        <div className="flex-1">
                          <h4 className="font-heading text-lg sm:text-xl mb-1">
                            {getCityName(tour.citySlug)} Tour
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {formatTime(tour.time)} • {tour.duration}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto ${
                            tour.status === 'available'
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                          }`}
                        >
                          {tour.status === 'available' ? 'Available' : 'Sold Out'}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <span className="text-base sm:text-lg font-semibold">${tour.price} per person</span>
                        {tour.status === 'available' && tour.eventbriteUrl && (
                          <CTAButton
                            href={tour.eventbriteUrl}
                            variant="primary"
                            external
                            className="w-full sm:w-auto"
                          >
                            Book Now
                          </CTAButton>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card-elevated rounded-lg p-4 sm:p-6 bg-card text-center">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    No tours available on this date.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="card-elevated rounded-lg p-4 sm:p-6 bg-card">
              <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">Select a Date</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Click on a date in the calendar to see available tours. 
                Dates with tours are highlighted in green.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

