import { Heart, Share2, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold mb-4">🍞 Artisan Bakery</div>
            <p className="text-amber-200">
              Crafting delicious baked goods with passion since 2010.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Like"><Heart className="w-5 h-5" /></a>
              <a href="#" aria-label="Share"><Share2 className="w-5 h-5" /></a>
              <a href="#" aria-label="Message"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Menu</a></li>
              <li><a href="#" className="hover:text-white">Order Online</a></li>
              <li><a href="#" className="hover:text-white">Catering</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>123 Baker Street, Paris, FR 75001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>hello@artisanbakery.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Mon–Fri</span> <span>7am–7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>8am–8pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>8am–5pm</span></li>
            </ul>
            <p className="mt-6 text-sm text-amber-300">
              Order online for pickup or delivery.
            </p>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-sm text-amber-300">
          <p>© {new Date().getFullYear()} Artisan Bakery. All rights reserved.</p>
          <p className="mt-2">This is a demonstration website built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;