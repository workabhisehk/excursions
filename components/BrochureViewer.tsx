'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BrochureViewerProps {
  brochureUrl: string;
  cityName: string;
}

export default function BrochureViewer({ brochureUrl, cityName }: BrochureViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm sm:text-base whitespace-nowrap flex-shrink-0"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>View PDF</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl w-full max-h-full bg-card rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-heading text-2xl">{cityName} Tour Brochure</h3>
              <div className="flex items-center space-x-4">
                <a
                  href={brochureUrl}
                  download
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Download PDF
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-accent transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(100vh-120px)]" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={brochureUrl}
                className="w-full h-[600px] md:h-[800px] border-0 rounded"
                title={`${cityName} Tour Brochure`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

