import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Darurat 24/7: +62 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@konstruksiberkah.com</span>
            </div>
          </div>
          <div className="text-sm">
            <span>Melayani Seluruh Jakarta & Sekitarnya</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                Berkah<span className="text-orange-500">Konstruksi</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-900 transition-colors">Beranda</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-900 transition-colors">Layanan</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-900 transition-colors">Tentang Kami</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors">Portfolio</a>
              <a href="#testimoni" className="text-gray-700 hover:text-blue-900 transition-colors">Testimoni</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-900 transition-colors">Kontak</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Minta Penawaran Gratis
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#beranda" className="text-gray-700 hover:text-blue-900 transition-colors" onClick={toggleMenu}>Beranda</a>
                <a href="#layanan" className="text-gray-700 hover:text-blue-900 transition-colors" onClick={toggleMenu}>Layanan</a>
                <a href="#tentang" className="text-gray-700 hover:text-blue-900 transition-colors" onClick={toggleMenu}>Tentang Kami</a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors" onClick={toggleMenu}>Portfolio</a>
                <a href="#testimoni" className="text-gray-700 hover:text-blue-900 transition-colors" onClick={toggleMenu}>Testimoni</a>
                <a href="#kontak" className="text-gray-700 hover:text-blue-900 transition-colors" onClick={toggleMenu}>Kontak</a>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-left">
                  Minta Penawaran Gratis
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;