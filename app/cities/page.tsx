import { Metadata } from 'next';
import CityCard from '@/components/CityCard';
import citiesData from '@/data/cities.json';

export const metadata: Metadata = {
  title: 'Cities - Excursions by Casablanca Cocktails',
  description: 'Explore cocktail tours in Dallas, Fort Worth, Austin, New York City, and New Orleans. Discover the top cocktail bars in each city.',
};

export default function CitiesPage() {
  const cities = citiesData.cities;
  const activeCities = cities.filter(city => city.status === 'active');
  const comingSoonCities = cities.filter(city => city.status === 'coming-soon');

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            OUR CITIES
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Join us for unforgettable cocktail tours in the most exciting cities. 
            Each tour takes you through the top 10 cocktail bars, showcasing the best mixology each city has to offer.
          </p>
        </div>

        {activeCities.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Active Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {activeCities.map((city) => (
                <CityCard key={city.slug} city={city} />
              ))}
            </div>
          </div>
        )}

        {comingSoonCities.length > 0 && (
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Coming Soon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {comingSoonCities.map((city) => (
                <CityCard key={city.slug} city={city} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

