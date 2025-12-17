# Excursions by Casablanca Cocktails

A Next.js-based website for booking cocktail tour experiences in multiple cities. This is a sister website to [Casablanca Cocktails](https://casablancacocktails.netlify.app/), matching its design system and branding.

## Features

- **City Tour Pages**: Explore tours in Dallas, Fort Worth, Austin, New York City, and New Orleans
- **Interactive Calendar**: View and filter available tour dates by city
- **Blog System**: Read about cocktail culture, top bars, and corporate team building
- **Gallery**: Browse photos and videos from past tours
- **Eventbrite Integration**: Direct booking links to Eventbrite (ready for custom booking system migration)

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Calendar**: react-calendar
- **Deployment**: Ready for Netlify

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
excursions/
├── app/                    # Next.js app router pages
│   ├── cities/             # City tour pages
│   ├── blog/               # Blog pages
│   ├── calendar/           # Calendar page
│   └── gallery/            # Gallery page
├── components/             # React components
├── data/                   # JSON data files
├── lib/                    # Utilities and design system
└── public/                 # Static assets
```

## Data Management

Tour data, cities, bars, and blog posts are managed through JSON files in the `data/` directory:
- `cities.json` - City information
- `tours.json` - Tour schedules
- `bars.json` - Bar listings per city
- `blog.json` - Blog post content

## Design System

The design system matches the Casablanca Cocktails website:
- **Fonts**: Montserrat (body), Bebas Neue (headings)
- **Colors**: Extracted from sister site
- **Components**: Consistent styling and branding

## Future Enhancements

- Custom booking system (currently uses Eventbrite)
- User accounts and booking history
- Email notifications
- Payment processing integration
- Admin dashboard for content management

## License

All rights reserved. © 2025 Excursions by Casablanca Cocktails
