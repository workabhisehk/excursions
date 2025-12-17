import Hero from '@/components/Hero';
import CityCard from '@/components/CityCard';
import TourCard from '@/components/TourCard';
import CTAButton from '@/components/CTAButton';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Image from 'next/image';
import Link from 'next/link';
import citiesData from '@/data/cities.json';
import toursData from '@/data/tours.json';
import testimonialsData from '@/data/testimonials.json';

export default function Home() {
  const cities = citiesData.cities;
  const upcomingTours = toursData.tours
    .filter(tour => tour.status === 'available')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  // Get city names for tours
  const getCityName = (citySlug: string) => {
    const city = cities.find(c => c.slug === citySlug);
    return city?.name || citySlug;
  };

  return (
    <div>
      <Hero />

      {/* Brand Logo Section */}
      <section className="py-8 sm:py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground mb-2">
              TRUSTED BY LEADING BRANDS
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Partnering with the best in the industry
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Casablanca Cocktails Logo */}
            <Link
              href="https://casablancacocktails.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center group"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors border-2 border-border group-hover:border-accent">
                  <span className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors">
                    CC
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                  Casablanca Cocktails
                </span>
              </div>
            </Link>

            {/* Partner Brand Logos */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border-2 border-border group-hover:border-accent transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80&fit=crop&crop=center"
                  alt="Premium Spirits"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                Premium Spirits
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border-2 border-border group-hover:border-accent transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80&fit=crop&crop=center"
                  alt="Craft Mixers"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                Craft Mixers
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border-2 border-border group-hover:border-accent transition-colors">
                <Image
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80&fit=crop&crop=center"
                  alt="Bar Tools Pro"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                Bar Tools Pro
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
              EXPLORE OUR CITIES
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
              Join us for unforgettable cocktail tours in the most exciting cities across America. 
              Each tour takes you through the top 10 cocktail bars in the city.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Tours - Below Cities */}
      {upcomingTours.length > 0 && (
        <section className="py-12 sm:py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                UPCOMING TOURS
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
                Book your spot on our next weekend tours. Limited availability - reserve your place today!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  cityName={getCityName(tour.citySlug)}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <CTAButton href="/calendar" variant="primary">
                View Full Calendar
              </CTAButton>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Carousel */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
              WHAT OUR COMMUNITY SAYS
            </h2>
          </div>
          
          <TestimonialsCarousel testimonials={testimonialsData.testimonials} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            READY TO START YOUR JOURNEY?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-accent-foreground/90 max-w-2xl mx-auto px-2">
            Join us for an unforgettable evening exploring the best cocktail bars in your city. 
            Book your tour today and experience the art of mixology like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <CTAButton
              href="/cities"
              variant="secondary"
              className="bg-accent-foreground text-accent border-accent-foreground hover:bg-accent-foreground/90"
            >
              Explore Cities
            </CTAButton>
            <CTAButton
              href="/calendar"
              variant="secondary"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              View Calendar
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
