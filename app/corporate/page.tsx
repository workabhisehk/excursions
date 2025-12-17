'use client';

import { useState } from 'react';

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employeeCount: '',
    eventType: '',
    preferredDate: '',
    city: '',
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
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        employeeCount: '',
        eventType: '',
        preferredDate: '',
        city: '',
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

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            CORPORATE SERVICES
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
            Elevate your team building, client entertainment, and corporate events with our exclusive 
            cocktail tour experiences. Perfect for businesses looking to create memorable experiences 
            for employees, clients, and partners.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">
            Why Choose Us for Your Corporate Events?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="card-elevated rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Team Building</h3>
              <p className="text-muted-foreground">
                Strengthen bonds and improve collaboration among your team members through shared experiences 
                at the city's finest cocktail bars.
              </p>
            </div>

            <div className="card-elevated rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Custom Packages</h3>
              <p className="text-muted-foreground">
                Tailored experiences designed specifically for your company's needs, budget, and group size. 
                Flexible scheduling and exclusive arrangements.
              </p>
            </div>

            <div className="card-elevated rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2">Premium Experience</h3>
              <p className="text-muted-foreground">
                Access to top-rated cocktail bars, expert mixologists, and exclusive venues. 
                Professional service that reflects your company's standards.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">
            Our Corporate Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="card-elevated rounded-lg p-6 bg-card">
              <h3 className="font-heading text-xl mb-3">Employee Appreciation Events</h3>
              <p className="text-muted-foreground mb-4">
                Show your team how much you value them with a curated cocktail tour experience. 
                Perfect for celebrating milestones, achievements, or simply boosting morale.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Customized routes based on your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Group discounts for larger teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Flexible scheduling for after-work events</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated rounded-lg p-6 bg-card">
              <h3 className="font-heading text-xl mb-3">Client Entertainment</h3>
              <p className="text-muted-foreground mb-4">
                Impress your clients and partners with an exclusive cocktail tour that showcases 
                the best of the city's nightlife and mixology scene.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>VIP access to premium venues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Private group arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Professional hosting and coordination</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated rounded-lg p-6 bg-card">
              <h3 className="font-heading text-xl mb-3">Team Building Activities</h3>
              <p className="text-muted-foreground mb-4">
                Foster collaboration and communication through interactive cocktail experiences. 
                Learn mixology, discover new flavors, and bond with colleagues.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Interactive mixology workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Team challenges and games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Networking opportunities</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated rounded-lg p-6 bg-card">
              <h3 className="font-heading text-xl mb-3">Corporate Retreats</h3>
              <p className="text-muted-foreground mb-4">
                Plan memorable off-site events that combine business objectives with exceptional 
                entertainment. Available in multiple cities for destination retreats.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Multi-day event packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Coordination with hotels and venues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Customized itineraries</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto">
          <div className="card-elevated rounded-lg p-6 sm:p-8 bg-card">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                Request Enterprise Quote
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Fill out the form below and our team will contact you to discuss custom enterprise deals 
                and create a package tailored to your business needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-medium mb-2">
                    Expected Group Size *
                  </label>
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    required
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  >
                    <option value="">Select group size</option>
                    <option value="10-25">10-25 people</option>
                    <option value="26-50">26-50 people</option>
                    <option value="51-100">51-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
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
                    <option value="team-building">Team Building</option>
                    <option value="client-entertainment">Client Entertainment</option>
                    <option value="employee-appreciation">Employee Appreciation</option>
                    <option value="corporate-retreat">Corporate Retreat</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">
                    Preferred City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  >
                    <option value="">Select city</option>
                    <option value="dallas">Dallas</option>
                    <option value="fort-worth">Fort Worth</option>
                    <option value="austin">Austin</option>
                    <option value="new-york">New York City</option>
                    <option value="new-orleans">New Orleans</option>
                    <option value="multiple">Multiple Cities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-base min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Additional Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, special requirements, budget considerations, or any questions you have..."
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none text-base"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-500/10 border border-green-500 rounded-lg text-sm sm:text-base text-green-600">
                  Thank you! Your enterprise inquiry has been submitted. Our team will contact you within 24-48 hours to discuss your corporate package.
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
                {isSubmitting ? 'Submitting...' : 'Request Enterprise Quote'}
              </button>
            </form>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mt-12 sm:mt-16 text-center">
          <div className="card-elevated rounded-lg p-6 sm:p-8 bg-muted max-w-3xl mx-auto">
            <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              For urgent corporate inquiries or to speak directly with our enterprise sales team, 
              please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:info@casablancacocktails.com?subject=Enterprise Inquiry"
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

