import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Excursions by Casablanca Cocktails - Cocktail Tour Experiences",
  description: "Join us for unforgettable cocktail tours in Dallas, Fort Worth, Austin, New York City, and New Orleans. Experience the top 10 cocktail bars in each city with Excursions by Casablanca Cocktails.",
  keywords: "cocktail tours, mixology tours, bar tours, Dallas, Fort Worth, Austin, New York, New Orleans, cocktail experiences",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Excursions by Casablanca Cocktails",
    description: "Unforgettable cocktail tour experiences in top cities",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Google Maps API - Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&libraries=places,geometry`}
          strategy="lazyOnload"
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
