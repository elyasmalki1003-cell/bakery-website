import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-6 h-6 text-amber-700" />
              <h2 className="text-2xl font-bold">Your Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-amber-50 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-white border"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-3 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-white border"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-red-600 hover:text-red-800 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-2xl text-amber-700">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  alert('Order placed! (This is a demo)');
                  clearCart();
                  onClose();
                }}
                className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-full transition"
              >
                Checkout Now
              </button>
              <button
                onClick={clearCart}
                className="w-full py-3 border border-amber-700 text-amber-700 hover:bg-amber-50 font-bold rounded-full transition"
              >
                Clear Cart
              </button>
              <p className="text-center text-sm text-gray-500">
                Free delivery on orders over $25
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;