import { Metadata } from 'next';
import Image from 'next/image';
import testimonialsData from '@/data/testimonials.json';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Testimonials - Excursions by Casablanca Cocktails',
  description: 'Read what our guests say about their cocktail tour experiences. Real reviews from real people who have joined our tours.',
};

export default function TestimonialsPage() {
  const testimonials = testimonialsData.testimonials;

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            WHAT OUR COMMUNITY SAYS
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Don't just take our word for it. Read what our guests have to say about 
            their unforgettable cocktail tour experiences with Excursions by Casablanca Cocktails.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-elevated rounded-lg p-4 sm:p-6 bg-card">
              <div className="mb-4">
                <div className="flex text-gold-accent mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-3 sm:pt-4">
                <div className="flex items-center space-x-3 mb-2">
                  {(testimonial as any).avatar && (
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={(testimonial as any).avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-card-foreground">{testimonial.name}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground ml-0 sm:ml-[52px]">{testimonial.location}</p>
                <p className="text-xs text-muted-foreground mt-1 ml-0 sm:ml-[52px]">
                  {testimonial.tour} • {formatDate(testimonial.date)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="card-elevated rounded-lg p-6 sm:p-8 bg-accent text-accent-foreground">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-accent-foreground/90 px-2">
              Join hundreds of satisfied guests who have experienced the best cocktail tours in the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <a
                href="/cities"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent-foreground text-accent rounded-lg hover:bg-accent-foreground/90 transition-colors min-h-[44px] touch-manipulation"
              >
                Explore Cities
              </a>
              <a
                href="/calendar"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent-foreground text-accent-foreground rounded-lg hover:bg-accent-foreground hover:text-accent transition-colors min-h-[44px] touch-manipulation"
              >
                View Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

