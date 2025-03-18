import React from 'react';
import { Menu, Phone, Mail, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-2 text-sm flex justify-between items-center border-b border-amber-800">
          <div className="flex items-center gap-6">
            <a
              href="tel:+6288287601356"
              className="flex items-center gap-2 hover:text-amber-200"
            >
              <Phone size={16} />
              <span>+62 8828 7601356</span>
            </a>
            <a
              href="mailto:info@movillevalue.com"
              className="flex items-center gap-2 hover:text-amber-200"
            >
              <Mail size={16} />
              <span>info@movillevalue.com</span>
            </a>
          </div>
        </div>
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag size={32} />
            <h1 className="text-2xl font-bold">Moville Value</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-amber-200">
              Home
            </a>
            <a href="#products" className="hover:text-amber-200">
              Products
            </a>
            <a href="#about" className="hover:text-amber-200">
              About
            </a>
            <a href="#contact" className="hover:text-amber-200">
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
