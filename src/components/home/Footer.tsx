
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-musafir-brown text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Musafir</h2>
            <p className="text-white/70">Solo adventures under ₹5000</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <Link to="/destinations" className="hover:text-white/70 transition-colors">Destinations</Link>
            <Link to="/itinerary" className="hover:text-white/70 transition-colors">Itineraries</Link>
            <a href="#" className="hover:text-white/70 transition-colors">Offline Maps</a>
            <a href="#" className="hover:text-white/70 transition-colors">Weather</a>
            <a href="#" className="hover:text-white/70 transition-colors">Packing List</a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-white/70 text-sm">
          &copy; {new Date().getFullYear()} Musafir. All rights reserved. Solo travel made affordable.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
