import { Metadata } from 'next';
import Image from 'next/image';
import collaborationsData from '@/data/collaborations.json';

export const metadata: Metadata = {
  title: 'Our Collaborations - Excursions by Casablanca Cocktails',
  description: 'Meet our partner bars and brand collaborators. We work with the best in the industry to deliver exceptional cocktail tour experiences.',
};

export default function CollaborationsPage() {
  const { bars, brands } = collaborationsData.collaborations;

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            OUR COLLABORATIONS
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            We're proud to partner with the finest cocktail bars and premium brands 
            to bring you unforgettable experiences. These collaborations ensure every 
            tour is exceptional.
          </p>
        </div>

        {/* Partner Bars */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Partner Bars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bars.map((bar) => (
              <div key={bar.id} className="card-elevated rounded-lg p-6 bg-card">
                <div className="mb-4">
                  <div className="relative h-24 w-24 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                    {bar.logo ? (
                      <Image
                        src={bar.logo}
                        alt={`${bar.name} logo`}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <span className="text-2xl font-heading">{bar.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl text-center mb-2">{bar.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{bar.city}</p>
                </div>
                <p className="text-muted-foreground mb-4 text-center">{bar.description}</p>
                {bar.website && (
                  <a
                    href={bar.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-accent hover:underline"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Brand Collaborations */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Brand Collaborations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {brands.map((brand) => (
              <div key={brand.id} className="card-elevated rounded-lg p-6 bg-card">
                <div className="mb-4">
                  <div className="relative h-24 w-24 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <span className="text-2xl font-heading">{brand.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl text-center mb-2">{brand.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-center">{brand.description}</p>
                {brand.website && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-accent hover:underline"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Partnership CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="card-elevated rounded-lg p-6 sm:p-8 bg-muted">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              Interested in Partnering?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              We're always looking to collaborate with exceptional bars and premium brands. 
              If you're interested in partnering with Excursions by Casablanca Cocktails, 
              we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors min-h-[44px] touch-manipulation"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

