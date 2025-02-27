import React, { useState } from 'react';
import { Search, Phone, Mail } from 'lucide-react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Teak Furniture</h1>
            <p className="text-xl md:text-2xl mb-8">Timeless Elegance for Your Home</p>
            <a href="#products" 
               className="bg-amber-900 text-white px-8 py-3 rounded-lg text-lg hover:bg-amber-800">
              Explore Collection
            </a>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search furniture..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-80"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-amber-900 text-white'
                    : 'bg-white text-amber-900 border border-amber-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Moville Value</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Moville Value specializes in premium teak furniture, crafting timeless pieces that combine traditional 
            craftsmanship with modern design. Each piece is carefully selected to ensure the highest quality 
            and durability that teak wood is renowned for.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <Phone size={20} className="text-amber-900" />
              <a href="tel:+62888287601356" className="hover:text-amber-900">+62 88828 7601356</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={20} className="text-amber-900" />
              <a href="mailto:Yohannesvermata@gmail.com" className="hover:text-amber-900">
                Yohannesvermata@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Moville Value. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
