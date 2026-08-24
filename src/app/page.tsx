import React from 'react';
import Image from 'next/image';
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
          
          {/* Array banaya jisme alag alag images aur details hain */}
          {[
            { id: 1, title: "Signature Summer Dress", price: "$85.00", img: "/pic1.jpg" },
            { id: 2, title: "Minimalist Kurti Set", price: "$65.00", img: "/pic2.jpg" },
            { id: 3, title: "Pastel Lehenga", price: "$120.00", img: "/pic3.jpg" },
            { id: 4, title: "Cotton Maxi", price: "$55.00", img: "/pic4.jpg" }
          ].map((item) => (
            <div key={item.id} className="group cursor-pointer">
              
              {/* Asli Image Yahan Aayegi */}
              <div className="relative h-96 w-full mb-4 overflow-hidden rounded-sm bg-gray-100">
                <Image 
                  src={item.img} 
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <h4 className="text-md font-medium">{item.title}</h4>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <p className="text-sm text-gray-400 mt-1">Available in 3 colors</p>
            </div>
          ))}

        </div>
      </section>

      {/* 4. Contact Form */}
      <ContactForm />

      {/* 5. Minimalist Footer */}
      <footer className="bg-white py-12 border-t border-gray-200 text-center">
        <h2 className="text-xl font-serif tracking-widest mb-4">LUXE STUDIO</h2>
        <p className="text-sm text-gray-500">© 2026 Luxe Studio. All rights reserved.</p>
      </footer>
      
    </div>
  );
}