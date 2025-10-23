
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import { useCart } from './hooks/useCart';

function App() {
  const { cartItems, addToCart, removeFromCart, updateQuantity, cartItemCount, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Header cartItemCount={cartItemCount} />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<ProductListPage addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity}
                cartTotal={cartTotal}
              />
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
