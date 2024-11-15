"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`nav-link ${isActive ? 'active' : ''} ${className}`}
    >
      {children}
    </Link>
  );
}

export function DesktopNavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-1">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/services">Services</NavLink>
      <Link 
        href="/contact" 
        className="ml-4 px-6 py-2 rounded-full bg-primary/90 hover:bg-primary/80 
        text-white font-medium transition-all duration-300 
        hover:shadow-[0_0_2rem_-0.5rem_rgb(var(--primary))]"
      >
        Contact
      </Link>
    </div>
  );
}

export function MobileNavLinks({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="bg-background rounded-2xl shadow-lg shadow-black/10 p-2 space-y-1">
      {[
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
      ].map(({ href, label }) => (
        <Link 
          key={href}
          href={href} 
          className={`block px-4 py-3 rounded-xl transition-colors
            ${pathname === href 
              ? 'bg-accent/10 text-accent' 
              : 'hover:bg-accent/5 text-foreground/80 hover:text-foreground'
            }`}
          onClick={onItemClick}
        >
          {label}
        </Link>
      ))}
      <div className="p-2">
        <Link 
          href="/contact" 
          className="block text-center px-6 py-3 rounded-xl bg-primary/90 
          hover:bg-primary/80 text-white font-medium transition-all duration-300"
          onClick={onItemClick}
        >
          Contact
        </Link>
      </div>
    </div>
  );
} 