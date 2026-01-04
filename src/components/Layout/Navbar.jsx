import { useState } from 'react';
import { Shirt, Menu, X } from 'lucide-react';

export default function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Beranda', 'Layanan', 'Harga', 'Testimoni', 'Kontak'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white p-2 rounded-xl">
                <img className='w-16' src="/iconLoundry.png" alt="Logo" />
                {/* <Shirt className="w-7 h-7 text-blue-600" /> */}
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Berkah<span className="text-blue-500">Loundry</span>
              </span>
              <div className="text-xs text-gray-500">Modern & Professional</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-6 py-2 rounded-full text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/50 hover:shadow-lg"
              >
                {item}
              </a>
            ))}
            <button onClick={() => window.location.href='#kontak'} className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}