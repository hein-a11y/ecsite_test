
import React from 'react';
import type { CartItem } from '../types';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

interface CartPageProps {
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  cartTotal: number;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, removeFromCart, updateQuantity, cartTotal }) => {
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Your Cart is Empty</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/" 
          className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <ul>
              {cartItems.map((item, index) => (
                <li key={item.id} className={`p-4 flex flex-col sm:flex-row items-center gap-4 ${index < cartItems.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}>
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-grow text-center sm:text-left">
                    <p className="font-semibold text-lg text-gray-900 dark:text-white">{item.name}</p>
                    <p className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                      <Minus className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                    </button>
                    <span className="w-10 text-center font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                      disabled={item.quantity >= item.stock}
                      className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed">
                      <Plus className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                    </button>
                  </div>
                  <div className="font-semibold text-lg w-24 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 text-red-500 transition">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-full lg:max-w-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-gray-600 dark:text-gray-300">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-300">
              <span>Shipping</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
