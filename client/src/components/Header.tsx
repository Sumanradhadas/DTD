import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
          <div className="w-12 h-12 rounded-full bg-gradient-rainbow flex items-center justify-center text-white font-bold text-xl">
            DTD
          </div>
          <div className="hidden md:block">
            <h1 className="font-bold text-lg text-foreground">Digital Tech Drive</h1>
            <p className="text-xs text-muted-foreground">Empowering Bihar's Youth</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`relative py-2 transition-colors ${
                location === item.path ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
              {location === item.path && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-rainbow"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-gradient-warm text-white border-0 hover-elevate active-elevate-2"
            asChild
            data-testid="button-call-now"
          >
            <a href="tel:+916206528684">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-white"
        >
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-md transition-colors ${
                  location === item.path
                    ? 'bg-gradient-rainbow text-white font-semibold'
                    : 'hover:bg-muted'
                }`}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-gradient-warm text-white border-0 w-full" asChild>
              <a href="tel:+916206528684">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </nav>
        </motion.div>
      )}

      {/* --- WebGlow Credit --- */}
      <div className="text-center text-xs text-muted-foreground mt-2 pb-2">
        A demo Website by{' '}
        <a
          href="https://webglowx.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          WebGlow
        </a>
      </div>
    </motion.header>
  );
}
