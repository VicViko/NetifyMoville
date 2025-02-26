import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in ${product.name}. Could you provide more information?`;
    const whatsappUrl = `https://wa.me/62888287601356?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-amber-900">${product.price}</span>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <MessageCircle size={20} />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}