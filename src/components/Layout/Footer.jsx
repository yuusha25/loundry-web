import { Shirt } from 'lucide-react';

export default function Footer() {
  const services = [
    'Cuci Setrika',
    'Cuci Kering',
    'Cuci Basah',
    'Setrika'
  ];

  const quickLinks = ['Tentang Kami', 'Layanan', 'Harga', 'Blog', 'Karir'];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-2 rounded-xl"> 
                <img className='h-10' src="/iconLoundry.png" alt="Logo" />
              </div>
              <div>
                <div className="text-2xl font-bold">Berkah<span className="text-cyan-400">Loundry</span></div>
                <div className="text-sm text-gray-400">Modern Laundry Solution</div>
              </div>
            </div>
            <p className="text-gray-400">
              Layanan laundry modern dengan teknologi terbaru untuk hasil terbaik.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Dapatkan promo dan tips perawatan pakaian</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 bg-gray-800 rounded-l-lg focus:outline-none"
              />
              <button className="px-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-r-lg hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 BerkahLoundry. All rights reserved. Made with ❤️ in Boyolali</p>
        </div>
      </div>
    </footer>
  );
}