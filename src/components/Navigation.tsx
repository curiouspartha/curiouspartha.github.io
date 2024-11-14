import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-secondary/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Your Name
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 