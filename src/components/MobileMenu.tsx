"use client";

import { useState } from 'react';
import { MobileNavLinks } from './NavLinks';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 rounded-lg glass-effect"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div 
        className={`${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-4 opacity-0 pointer-events-none'
        } absolute top-16 left-4 right-4 transition-all duration-300 ease-out`}
      >
        <MobileNavLinks onItemClick={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
} 