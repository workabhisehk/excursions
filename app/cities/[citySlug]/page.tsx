import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BarCard from '@/components/BarCard';
import TourCard from '@/components/TourCard';
import CTAButton from '@/components/CTAButton';
import BrochureViewer from '@/components/BrochureViewer';
import TourMap from '@/components/TourMap';
import citiesData from '@/data/cities.json';
import barsData from '@/data/bars.json';
import toursData from '@/data/tours.json';
import { formatDate } from '@/lib/utils';

interface CityPageProps {
  params: Promise<{ citySlug: string }>;
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = citiesData.cities.find(c => c.slug === citySlug);
  
  if (!city) {
    return {
      title: 'City Not Found - Excursions by Casablanca Cocktails',
    };
  }

  return {
    title: `${city.name} Cocktail Tour - Excursions by Casablanca Cocktails`,
    description: city.description,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { citySlug } = await params;
  const city = citiesData.cities.find(c => c.slug === citySlug);
  
  if (!city) {
    notFound();
  }

  const cityBars = barsData.bars
    .filter(bar => bar.citySlug === citySlug)
    .sort((a, b) => a.order - b.order);
  
  const cityTours = toursData.tours
    .filter(tour => tour.citySlug === citySlug)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const isActive = city.status === 'active';

  return (
    <div>
      {/* City Hero */}
      <section className="relative h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={city.featuredImage || `https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80`}
            alt={`${city.name} skyline`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-foreground/80" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-4">
            {city.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-2 text-primary-foreground/90">
            {city.state}
          </p>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/80 px-2">
            {city.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Upcoming Tours - Right after Hero */}
        {cityTours.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">Upcoming Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cityTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  cityName={city.name}
                />
              ))}
            </div>
          </section>
        )}

        {/* Brochure Section - Small */}
        {city.brochureUrl && (
          <section className="mb-8 sm:mb-12">
            <div className="card-elevated rounded-lg p-3 sm:p-4 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg sm:text-xl mb-1">Tour Brochure</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Download our detailed brochure with bar information and tour itinerary.
                </p>
              </div>
              <BrochureViewer brochureUrl={city.brochureUrl} cityName={city.name} />
            </div>
          </section>
        )}

        {/* Tour Map */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">Tour Route Map</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            See the journey from bar to bar on our {city.name} cocktail tour. 
            The map shows the route and order of stops.
          </p>
          <TourMap bars={cityBars} cityName={city.name} />
        </section>

        {/* Tour Schedule */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">Tour Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="card-elevated rounded-lg p-4 sm:p-6 bg-card">
              <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">When We Tour</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">
                <strong>Frequency:</strong> {city.tourFrequency}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">
                <strong>Time:</strong> {city.tourTime}
              </p>
              {isActive && city.nextTourDate && (
                <p className="text-sm sm:text-base text-muted-foreground">
                  <strong>Next Tour:</strong> {formatDate(city.nextTourDate)}
                </p>
              )}
            </div>
            
            <div className="card-elevated rounded-lg p-4 sm:p-6 bg-card">
              <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">Tour Details</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>• Duration: 4 hours</li>
                <li>• Visit 10 top cocktail bars</li>
                <li>• Expert guide included</li>
                <li>• Transportation between bars</li>
                <li>• Cocktail tastings at each location</li>
              </ul>
            </div>
          </div>

          {isActive && city.eventbriteUrl && (
            <CTAButton
              href={city.eventbriteUrl}
              variant="primary"
              external
              className="w-full md:w-auto"
            >
              Book Your Tour on Eventbrite
            </CTAButton>
          )}
        </section>

        {/* Top 10 Bars */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
            Top 10 Cocktail Bars in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cityBars.map((bar) => (
              <BarCard key={bar.id} bar={bar} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

