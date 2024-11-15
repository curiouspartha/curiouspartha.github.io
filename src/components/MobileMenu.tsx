"use client";

import { useState, useEffect, useRef } from 'react';
import { MobileNavLinks } from './NavLinks';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        className="p-2 rounded-lg bg-background border border-foreground/10"
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
        ref={menuRef}
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