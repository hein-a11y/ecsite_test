
import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Quantum Laptop',
    price: 1299.99,
    stock: 15,
    image: 'https://picsum.photos/seed/laptop/400/300',
  },
  {
    id: 2,
    name: 'Nebula Smartphone',
    price: 799.50,
    stock: 30,
    image: 'https://picsum.photos/seed/phone/400/300',
  },
  {
    id: 3,
    name: 'Fusion Wireless Earbuds',
    price: 149.00,
    stock: 50,
    image: 'https://picsum.photos/seed/earbuds/400/300',
  },
  {
    id: 4,
    name: 'Aether Smartwatch',
    price: 299.99,
    stock: 25,
    image: 'https://picsum.photos/seed/watch/400/300',
  },
  {
    id: 5,
    name: 'Orbit Gaming Console',
    price: 499.00,
    stock: 0, // Out of stock item
    image: 'https://picsum.photos/seed/console/400/300',
  },
  {
    id: 6,
    name: 'Vortex VR Headset',
    price: 399.00,
    stock: 10,
    image: 'https://picsum.photos/seed/vr/400/300',
  },
   {
    id: 7,
    name: 'Nova Mechanical Keyboard',
    price: 189.99,
    stock: 22,
    image: 'https://picsum.photos/seed/keyboard/400/300',
  },
];
