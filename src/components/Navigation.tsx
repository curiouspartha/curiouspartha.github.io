import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { DesktopNavLinks } from './NavLinks';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border-b border-foreground/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-mono font-bold hover:text-accent transition-colors"
          >
            &lt;/parthu.dev&gt;
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenu />
            <DesktopNavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
} 