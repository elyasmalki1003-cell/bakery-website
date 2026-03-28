import { useState } from 'react';
import { Star, Truck, Shield } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-amber-50 text-gray-900">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-200 to-orange-100 py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-900">
              Artisan Bakery & Café
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-10 max-w-3xl mx-auto">
              Freshly baked bread, pastries, and cakes made with love and the finest ingredients. Order online for pickup or delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition">
                View Menu
              </button>
              <button className="bg-white hover:bg-gray-100 text-amber-800 font-bold py-3 px-8 rounded-full text-lg border-2 border-amber-700 transition">
                Order Online
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Our Bakery?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Star className="w-12 h-12" />, title: 'Handcrafted Quality', desc: 'Every item made from scratch daily.' },
                { icon: <Truck className="w-12 h-12" />, title: 'Free Local Delivery', desc: 'Orders over $25 delivered free within 10km.' },
                { icon: <Shield className="w-12 h-12" />, title: 'Satisfaction Guaranteed', desc: 'Love it or your money back.' }
              ].map((feat, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                  <p className="text-gray-600">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Our Fresh Bakes</h2>
              <div className="flex space-x-4">
                <button className="px-4 py-2 rounded-full bg-amber-700 text-white">All</button>
                <button className="px-4 py-2 rounded-full bg-amber-100 text-amber-800">Bread</button>
                <button className="px-4 py-2 rounded-full bg-amber-100 text-amber-800">Pastries</button>
                <button className="px-4 py-2 rounded-full bg-amber-100 text-amber-800">Cakes</button>
              </div>
            </div>
            <ProductGrid />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Taste the Difference?</h2>
            <p className="text-xl mb-10">Join our bakery club for exclusive offers and early access to new creations.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-full text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-amber-900 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>

        <Footer />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;