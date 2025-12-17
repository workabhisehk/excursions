'use client';

import { useEffect, useRef } from 'react';

interface Bar {
  id: string;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  order: number;
}

interface TourMapProps {
  bars: Bar[];
  cityName: string;
}

export default function TourMap({ bars, cityName }: TourMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Google Maps
    if (mapRef.current && typeof window !== 'undefined' && (window as any).google) {
      const map = new (window as any).google.maps.Map(mapRef.current, {
        zoom: 13,
        center: { lat: 32.7767, lng: -96.7970 }, // Default to Dallas, will be updated based on bars
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      });

      // Create markers for each bar
      const markers: any[] = [];
      const bounds = new (window as any).google.maps.LatLngBounds();

      bars.forEach((bar, index) => {
        // Use geocoding or provided coordinates
        const geocoder = new (window as any).google.maps.Geocoder();
        
        geocoder.geocode({ address: bar.address }, (results: any[], status: string) => {
          if (status === 'OK' && results[0]) {
            const position = results[0].geometry.location;
            
            const marker = new (window as any).google.maps.Marker({
              position,
              map,
              label: {
                text: `${index + 1}`,
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold',
              },
              title: bar.name,
            });

            const infoWindow = new (window as any).google.maps.InfoWindow({
              content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-weight: bold;">${index + 1}. ${bar.name}</h3>
                  <p style="margin: 0; color: #666;">${bar.address}</p>
                </div>
              `,
            });

            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });

            markers.push(marker);
            bounds.extend(position);

            // Fit map to show all markers
            if (markers.length === bars.length) {
              map.fitBounds(bounds);
            }
          }
        });
      });

      // Draw route between bars (if Directions API is available)
      if (markers.length > 1) {
        const directionsService = new (window as any).google.maps.DirectionsService();
        const directionsRenderer = new (window as any).google.maps.DirectionsRenderer({
          map,
          suppressMarkers: true,
        });

        const waypoints = markers.slice(1, -1).map((marker: any) => ({
          location: marker.getPosition(),
          stopover: true,
        }));

        directionsService.route(
          {
            origin: markers[0].getPosition(),
            destination: markers[markers.length - 1].getPosition(),
            waypoints,
            travelMode: (window as any).google.maps.TravelMode.DRIVING,
          },
          (result: any, status: string) => {
            if (status === 'OK') {
              directionsRenderer.setDirections(result);
            }
          }
        );
      }
    }
  }, [bars]);

  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-border">
      <div ref={mapRef} className="w-full h-full" />
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Google Maps integration requires an API key. 
          Add your Google Maps API key to enable full map functionality with route visualization.
        </p>
      </div>
    </div>
  );
}

