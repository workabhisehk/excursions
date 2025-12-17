import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface City {
  slug: string;
  name: string;
  state: string;
  description: string;
  status: string;
  featuredImage: string;
  nextTourDate: string;
  numberOfBars: number;
}

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const isActive = city.status === 'active';
  
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group block card-elevated rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        {city.featuredImage ? (
          <Image
            src={city.featuredImage}
            alt={city.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <Image
            src={`https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fit=crop&crop=center`}
            alt={`${city.name} skyline`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isActive
                ? 'bg-green-500 text-white'
                : 'bg-yellow-500 text-white'
            }`}
          >
            {isActive ? 'Active' : 'Coming Soon'}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-2 gap-2">
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-card-foreground group-hover:text-accent transition-colors flex-shrink min-w-0">
            {city.name}
          </h3>
          <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap flex-shrink-0">{city.state}</span>
        </div>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
          {city.description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <span>{city.numberOfBars} Bars</span>
            {isActive && (
              <span>Next: {formatDate(city.nextTourDate)}</span>
            )}
          </div>
          <span className="text-accent group-hover:underline">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}

