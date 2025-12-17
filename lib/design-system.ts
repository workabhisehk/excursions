/**
 * Design System Tokens
 * Extracted from Casablanca Cocktails website to maintain brand consistency
 */

export const designSystem = {
  colors: {
    // Primary colors
    primary: '0 0% 0%', // Black
    primaryForeground: '0 0% 100%', // White
    
    // Secondary colors
    secondary: '0 0% 96%', // Light gray
    secondaryForeground: '0 0% 0%', // Black
    
    // Accent colors
    accent: '217 91% 60%', // Blue
    accentForeground: '0 0% 100%', // White
    goldAccent: '43 96% 56%', // Gold/Yellow
    
    // Background & Foreground
    background: '0 0% 100%', // White
    foreground: '0 0% 0%', // Black
    
    // Card colors
    card: '0 0% 100%', // White
    cardForeground: '0 0% 0%', // Black
    
    // Muted colors
    muted: '0 0% 96%', // Light gray
    mutedForeground: '0 0% 40%', // Dark gray
    
    // Border & Input
    border: '0 0% 90%', // Light gray
    input: '0 0% 90%', // Light gray
    
    // Destructive
    destructive: '0 84% 60%', // Red
    destructiveForeground: '0 0% 100%', // White
    
    // Hero overlay
    heroOverlay: '0 0% 0%', // Black
    heroOverlayOpacity: 0.5,
  },
  
  typography: {
    // Font families
    fontBody: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontHeading: 'Bebas Neue, Impact, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    
    // Font sizes
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
    },
    
    // Font weights
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Letter spacing
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  spacing: {
    // Based on Tailwind's spacing scale
    0: '0px',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },
  
  borderRadius: {
    none: '0px',
    sm: 'calc(var(--radius) - 4px)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    default: '0.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    card: '0 2px 8px rgba(0, 0, 0, 0.1)',
    cardHover: '0 4px 16px rgba(0, 0, 0, 0.15)',
  },
  
  transitions: {
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    default: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  layout: {
    navHeight: '80px',
    containerMaxWidth: '1400px',
    containerPadding: '2rem',
  },
} as const;

