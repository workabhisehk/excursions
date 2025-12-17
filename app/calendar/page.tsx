import { Metadata } from 'next';
import CalendarComponent from '@/components/Calendar';
import citiesData from '@/data/cities.json';
import toursData from '@/data/tours.json';

export const metadata: Metadata = {
  title: 'Tour Calendar - Excursions by Casablanca Cocktails',
  description: 'View available tour dates and book your cocktail tour experience. Filter by city and see real-time availability.',
};

export default function CalendarPage() {
  const cities = citiesData.cities.map(city => ({
    slug: city.slug,
    name: city.name,
  }));
  const tours = toursData.tours;

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            TOUR CALENDAR
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Select a date to see available tours. Dates with tours are highlighted. 
            Click on any date to view tour details and book your spot.
          </p>
        </div>

        <CalendarComponent tours={tours} cities={cities} />
      </div>
    </div>
  );
}

