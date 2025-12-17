
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About Us - Excursions by Casablanca Cocktails',
  description: 'Learn about Excursions by Casablanca Cocktails. Discover our mission to bring you the best cocktail tour experiences in top cities across America.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6">
            ABOUT US
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            Excursions by Casablanca Cocktails is dedicated to creating unforgettable 
            cocktail tour experiences that showcase the best mixology each city has to offer.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                At Excursions by Casablanca Cocktails, we believe that great cocktails 
                are more than just drinks—they're experiences that bring people together, 
                tell stories, and create lasting memories.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                Our mission is to curate exceptional cocktail tours that take you through 
                the top 10 cocktail bars in each city, showcasing the artistry of mixology 
                and the unique character of each establishment.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you're a cocktail enthusiast, a tourist exploring a new city, 
                or a business looking for unique team-building experiences, we're here 
                to make your journey unforgettable.
              </p>
            </div>
            <div className="relative h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80&fit=crop&crop=center"
                alt="Cocktail making and mixology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="card-elevated rounded-lg p-4 sm:p-6 bg-card text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl mb-2 sm:mb-3">Top 10 Bars</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Carefully curated selection of the best cocktail bars in each city, 
                from hidden speakeasies to modern craft cocktail lounges.
              </p>
            </div>

            <div className="card-elevated rounded-lg p-4 sm:p-6 bg-card text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl mb-2 sm:mb-3">Expert Guides</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Knowledgeable guides who share insights about mixology, cocktail history, 
                and the stories behind each bar and drink.
              </p>
            </div>

            <div className="card-elevated rounded-lg p-4 sm:p-6 bg-card text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl mb-2 sm:mb-3">Group Experiences</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Perfect for individuals, couples, groups of friends, or corporate 
                team-building events. We accommodate groups of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1200&q=80&fit=crop&crop=center"
                alt="Cocktail bar team and experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">Our Story</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                Excursions by Casablanca Cocktails was born from a passion for exceptional 
                cocktails and a desire to share the best mixology experiences with others. 
                As a sister company to Casablanca Cocktails, we bring the same dedication 
                to quality and community.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                Starting in Dallas and Fort Worth, we've expanded to bring our curated 
                cocktail tours to Austin, New York City, and New Orleans. Each tour is 
                carefully designed to showcase the unique cocktail culture of each city.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We work closely with partner bars and premium brands to ensure every 
                experience is exceptional. Our commitment to excellence has made us 
                a trusted name in cocktail tourism.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card-elevated rounded-lg p-6 sm:p-8 md:p-12 bg-accent text-accent-foreground">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              Join Us on a Journey
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-accent-foreground/90 max-w-2xl mx-auto px-2">
              Experience the best cocktail tours in America. Book your tour today and 
              discover why thousands of guests trust Excursions by Casablanca Cocktails.
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
                href="/contact"
                variant="secondary"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              >
                Contact Us
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

