import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-6xl md:text-8xl mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl mb-4">Page Not Found</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/" variant="primary">
            Go Home
          </CTAButton>
          <CTAButton href="/cities" variant="secondary">
            Explore Cities
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

