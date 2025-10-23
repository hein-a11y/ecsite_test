
import React from 'react';
import type { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isOutOfStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate" title={product.name}>{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">{`$${product.price.toFixed(2)}`}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {isOutOfStock ? 'No items left' : `Stock: ${product.stock}`}
            </p>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          disabled={isOutOfStock}
          className="mt-4 w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed dark:disabled:bg-gray-600"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
