import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-accent text-accent-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-accent/90 hover:shadow-lg hover:scale-105 active:scale-95 transition-transform touch-manipulation min-h-[44px]',
    secondary: 'border-2 border-accent text-accent px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-accent hover:text-accent-foreground active:scale-95 transition-transform touch-manipulation min-h-[44px]',
    text: 'text-accent underline-offset-4 hover:underline touch-manipulation min-h-[44px]',
  };

  const content = (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
      {variant === 'text' && (
        <svg
          className="ml-2 w-4 h-4 inline"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}

