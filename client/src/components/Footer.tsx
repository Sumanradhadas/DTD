import { Link } from 'wouter';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-rainbow flex items-center justify-center font-bold text-xl">
                DTD
              </div>
              <div>
                <h3 className="font-bold text-lg">Digital Tech Drive</h3>
                <p className="text-sm text-gray-400">Empowering Bihar's Youth</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital futures through quality education and skill development programs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Courses', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dtd-blue flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">
                  Kabaiya Road, Naya Bazar,<br />Lakhisarai, Bihar, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-dtd-green flex-shrink-0" />
                <a href="tel:+916206528684" className="text-gray-400 hover:text-white transition-colors">
                  +91 62065 28684
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-dtd-orange flex-shrink-0" />
                <a href="mailto:digitaltechdrive@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  digitaltechdrive@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Digital Tech Drive. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
              data-testid="link-facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
              data-testid="link-instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="YouTube"
              data-testid="link-youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* --- WebGlow Credit --- */}
        <div className="mt-6 text-center text-xs text-gray-400">
          A demo Website by{' '}
          <a
            href="https://webglowx.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-medium"
          >
            WebGlow
          </a>
        </div>
      </div>
    </footer>
  );
}
