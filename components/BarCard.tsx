import Image from 'next/image';
import Link from 'next/link';

interface Bar {
  id: string;
  name: string;
  address: string;
  description: string;
  image: string;
  website?: string;
  featuredCocktails: string[];
  order: number;
}

interface BarCardProps {
  bar: Bar;
}

export default function BarCard({ bar }: BarCardProps) {
  return (
    <div className="card-elevated rounded-lg overflow-hidden bg-card">
      <div className="relative h-48 md:h-64 overflow-hidden">
        {bar.image ? (
          <Image
            src={bar.image}
            alt={bar.name}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80&fit=crop&crop=center"
            alt={bar.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
          <h3 className="font-heading text-xl sm:text-2xl text-card-foreground flex-1 min-w-0">
            {bar.name}
          </h3>
          {bar.website && (
            <Link
              href={bar.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
            >
              Visit Website →
            </Link>
          )}
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{bar.address}</p>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{bar.description}</p>
        
        {bar.featuredCocktails.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-card-foreground mb-2">
              Featured Cocktails:
            </p>
            <div className="flex flex-wrap gap-2">
              {bar.featuredCocktails.map((cocktail, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                >
                  {cocktail}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

