import { Star, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductGrid: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image */}
          <div className="h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-amber-500 fill-current" />
                <span className="ml-1 text-sm font-semibold">{product.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-amber-700">
                ${product.price.toFixed(2)}
              </div>
              <button
                onClick={() => addItem(product)}
                className="flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white rounded-full p-3 transition"
                aria-label={`Add ${product.name} to cart`}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;