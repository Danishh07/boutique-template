import React from 'react';
import ContactForm from '@/components/ContactForm'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      
      {/* 1. Navigation Bar */}
      <header className="flex justify-between items-center py-5 px-8 bg-white shadow-sm sticky top-0 z-50">
        {/* Client ka Brand Name yahan aayega */}
        <h1 className="text-2xl font-serif tracking-widest font-bold">LUXE STUDIO</h1>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#" className="hover:text-gray-500 transition">Shop</a>
          <a href="#" className="hover:text-gray-500 transition">New Arrivals</a>
          <a href="#" className="hover:text-gray-500 transition">Our Story</a>
        </nav>
        <button className="bg-black text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-gray-800 transition">
          Contact Us
        </button>
      </header>

      {/* 2. Hero Section - Catchy Tagline & Call to Action */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-[#F2EDE9]">
        <h2 className="text-5xl md:text-7xl font-serif font-light mb-6">
          Minimalist Ethnic Elegance
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          Discover our handcrafted collections designed for the modern wardrobe. Quality fabrics, timeless designs.
        </p>
        <button className="bg-black text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition shadow-lg">
          Explore Collection
        </button>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-3xl font-serif">Trending This Week</h3>
          <a href="#" className="text-sm underline hover:text-gray-500">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Dummy Products Map */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              {/* Product Image Placeholder */}
              <div className="bg-gray-200 h-96 w-full mb-4 overflow-hidden rounded-sm">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition duration-500"></div>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-md font-medium">Signature Summer Dress</h4>
                <p className="text-gray-600">$85.00</p>
              </div>
              <p className="text-sm text-gray-400 mt-1">Available in 3 colors</p>
            </div>
          ))}
        </div>
      </section>
      <ContactForm />

      {/* 4. Minimalist Footer */}
      <footer className="bg-white py-12 border-t border-gray-200 text-center">
        <h2 className="text-xl font-serif tracking-widest mb-4">LUXE STUDIO</h2>
        <p className="text-sm text-gray-500">© 2026 Luxe Studio. All rights reserved.</p>
      </footer>
      
    </div>
  );
}