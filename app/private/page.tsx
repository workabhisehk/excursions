'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PrivatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        location: '',
        budget: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Placeholder images - replace with actual images from public/images/
  const serviceImages = [
    {
      src: '/images/tours/private-event-1.jpg',
      alt: 'Private cocktail event with professional mixologist',
      title: 'Private Events',
    },
    {
      src: '/images/tours/mixologist-service-1.jpg',
      alt: 'Professional mixologist crafting cocktails',
      title: 'Mixologist Services',
    },
    {
      src: '/images/tours/private-party-1.jpg',
      alt: 'Elegant private party setup',
      title: 'Custom Parties',
    },
    {
      src: '/images/tours/cocktail-making-1.jpg',
      alt: 'Interactive cocktail making experience',
      title: 'Interactive Experiences',
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            PRIVATE EVENTS & MIXOLOGIST SERVICES
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            Elevate your private celebrations with our professional mixologist services. From intimate 
            gatherings to grand celebrations, we bring the art of craft cocktails directly to your event.
          </p>
        </div>

        {/* Services Overview */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">
            Our Private Event Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="card-elevated rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Private Parties</h3>
              <p className="text-muted-foreground">
                Host unforgettable private parties at your home, venue, or chosen location. Our mixologists 
                create custom cocktail menus tailored to your preferences and event theme.
              </p>
            </div>

            <div className="card-elevated rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Professional Mixologists</h3>
              <p className="text-muted-foreground">
                Experienced mixologists who bring expertise, flair, and entertainment to your event. 
                Watch them craft signature cocktails while engaging your guests with their skills.
              </p>
            </div>

            <div className="card-elevated rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Custom Experiences</h3>
              <p className="text-muted-foreground">
                Personalized cocktail experiences designed around your event. From cocktail classes 
                to interactive bar setups, we create unique moments for you and your guests.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">
            Our Private Events in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceImages.map((image, index) => (
              <div key={index} className="card-elevated rounded-lg overflow-hidden bg-card group">
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
                            <div class="text-center p-4">
                              <svg class="w-16 h-16 mx-auto text-accent/40 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p class="text-xs text-muted-foreground">${image.title}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12 sm:mb-16">
          <div className="card-elevated rounded-lg p-6 sm:p-8 bg-muted max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl mb-4 sm:mb-6 text-center">
              What's Included in Our Private Event Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Professional Mixologist</h3>
                  <p className="text-sm text-muted-foreground">Experienced bartender for the duration of your event</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Custom Cocktail Menu</h3>
                  <p className="text-sm text-muted-foreground">Personalized drink selection based on your preferences</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Premium Ingredients</h3>
                  <p className="text-sm text-muted-foreground">High-quality spirits, mixers, and garnishes</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bar Setup & Equipment</h3>
                  <p className="text-sm text-muted-foreground">Complete mobile bar with all necessary tools</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cocktail Classes</h3>
                  <p className="text-sm text-muted-foreground">Optional interactive mixology lessons for guests</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Event Coordination</h3>
                  <p className="text-sm text-muted-foreground">Full support from planning to execution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto">
          <div className="card-elevated rounded-lg p-6 sm:p-8 bg-card">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                Book Your Private Event
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Fill out the form below to request a quote for your private event. Our team will contact you 
                to discuss details and create a customized experience for your celebration.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement Party</option>
                    <option value="graduation">Graduation</option>
                    <option value="housewarming">Housewarming</option>
                    <option value="holiday">Holiday Party</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  >
                    <option value="">Select guest count</option>
                    <option value="10-20">10-20 guests</option>
                    <option value="21-30">21-30 guests</option>
                    <option value="31-50">31-50 guests</option>
                    <option value="51-75">51-75 guests</option>
                    <option value="76-100">76-100 guests</option>
                    <option value="100+">100+ guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="City, State or specific venue"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  >
                    <option value="">Select budget range</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Event Details & Special Requests *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, preferred cocktail styles, dietary restrictions, theme, or any special requests..."
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none text-base"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-500/10 border border-green-500 rounded-lg text-sm sm:text-base text-green-600">
                  Thank you! Your private event inquiry has been submitted. Our team will contact you within 24-48 hours 
                  to discuss your event details and provide a customized quote.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 bg-red-500/10 border border-red-500 rounded-lg text-sm sm:text-base text-red-600">
                  Something went wrong. Please try again or contact us directly at info@casablancacocktails.com
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Request Private Event Quote'}
              </button>
            </form>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mt-12 sm:mt-16 text-center">
          <div className="card-elevated rounded-lg p-6 sm:p-8 bg-muted max-w-3xl mx-auto">
            <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">
              Have Questions About Private Events?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Our team is here to help you plan the perfect private event. Contact us directly for 
              immediate assistance or to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:info@casablancacocktails.com?subject=Private Event Inquiry"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors min-h-[44px] touch-manipulation"
              >
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors min-h-[44px] touch-manipulation"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

