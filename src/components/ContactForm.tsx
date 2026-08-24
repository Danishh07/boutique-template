"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms API endpoint par data bhej rahe hain
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setStatus("Message Sent Successfully!");
      (e.target as HTMLFormElement).reset(); // Form clear karne ke liye
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-2">Get in Touch</h3>
        <p className="text-gray-500 mb-10 text-sm">Have a question about our collection? Drop us a message.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          {/* Yahan aapki Web3Forms Access Key aayegi */}
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <label className="text-sm text-gray-600 mb-1 uppercase tracking-wider">Name</label>
              <input type="text" name="name" required className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="text-sm text-gray-600 mb-1 uppercase tracking-wider">Email</label>
              <input type="email" name="email" required className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1 uppercase tracking-wider">Message</label>
            <textarea name="message" rows={4} required className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition"></textarea>
          </div>
          
          <button type="submit" className="bg-black text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition mt-4">
            Send Message
          </button>
          
          {status && <p className="text-center text-sm mt-4 font-medium">{status}</p>}
        </form>
      </div>
    </section>
  );
}