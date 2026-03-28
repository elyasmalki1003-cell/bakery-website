import { ShoppingCart, Menu, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-2xl font-bold text-amber-800">
              🍞 Artisan Bakery
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="font-medium hover:text-amber-700">Home</a>
            <a href="#" className="font-medium hover:text-amber-700">Menu</a>
            <a href="#" className="font-medium hover:text-amber-700">About</a>
            <a href="#" className="font-medium hover:text-amber-700">Order Online</a>
            <a href="#" className="font-medium hover:text-amber-700">Contact</a>
          </nav>

          {/* Contact & Cart */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>123 Baker St, Paris</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </div>
            </div>
            <button
              onClick={onCartClick}
              className="relative p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6 text-amber-800" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;