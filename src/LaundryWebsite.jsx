import { useState, useEffect } from 'react';
import { 
  Shirt, Clock, DollarSign, Phone, Mail, MapPin, 
  Droplet, Star, Menu, X, Truck, Shield, Zap, 
  Sparkles, CheckCircle, ArrowRight 
} from 'lucide-react';

export default function LaundryWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: 'Cuci Setrika',
      price: 'Rp 7.000/kg',
      time: '2-3 hari',
      description: 'Pakaian dicuci bersih dan disetrika rapi',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Gratis pewangi', 'Lipatan rapi', 'Packaging bagus']
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: 'Cuci Kering',
      price: 'Rp 5.000/kg',
      time: '1-2 hari',
      description: 'Pakaian dicuci dan dikeringkan tanpa setrika',
      gradient: 'from-emerald-500 to-teal-500',
      features: ['Cuci bersih', 'Kering sempurna', 'Hemat energi']
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Express',
      price: 'Rp 12.000/kg',
      time: '1 hari',
      description: 'Layanan cepat untuk kebutuhan mendesak',
      gradient: 'from-orange-500 to-amber-500',
      features: ['Pengerjaan 24 jam', 'Prioritas tinggi', 'Antar jemput gratis']
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Premium',
      price: 'Rp 15.000/kg',
      time: '3-4 hari',
      description: 'Perawatan khusus untuk pakaian premium',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Detergen hypoallergenic', 'Steam treatment', 'Packaging premium']
    }
  ];

  const features = [
    { icon: <Truck className="w-6 h-6" />, title: 'Gratis Antar Jemput', desc: 'Area Surabaya' },
    { icon: <Shield className="w-6 h-6" />, title: 'Garansi 100%', desc: 'Kepuasan terjamin' },
    { icon: <Clock className="w-6 h-6" />, title: 'Tepat Waktu', desc: 'Tidak ada keterlambatan' },
    { icon: <Star className="w-6 h-6" />, title: 'Pelayanan Ramah', desc: 'Customer service 24/7' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}! Kami akan segera menghubungi Anda.`);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation - Modern Glassmorphism */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-2 rounded-xl">
                  <Shirt className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Laundry<span className="text-blue-500">Pro</span>
                </span>
                <div className="text-xs text-gray-500">Modern & Professional</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {['Beranda', 'Layanan', 'Harga', 'Testimoni', 'Kontak'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="px-6 py-2 rounded-full text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/50 hover:shadow-lg"
                >
                  {item}
                </a>
              ))}
              <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                Pesan Sekarang
              </button>
            </div>

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
            {['Beranda', 'Layanan', 'Harga', 'Testimoni', 'Kontak'].map((item, index) => (
              <a 
                key={index}
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

      {/* Hero Section with Parallax */}
      <section id="beranda" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">Laundry Modern & Terpercaya</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient">
                Revolusi Laundry
              </span>
              <span className="block text-gray-800 mt-2">Masa Kini</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Menggunakan teknologi canggih dan bahan premium untuk menjaga kualitas pakaian Anda. 
              Gratis antar-jemput, hasil maksimal!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center">
                  Pesan Sekarang
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              </button>
              
              <button className="group px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <span className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: '10K+', label: 'Pelanggan' },
                { number: '99%', label: 'Kepuasan' },
                { number: '24/7', label: 'Layanan' },
                { number: '2 Jam', label: 'Express' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mengapa <span className="text-blue-600">Memilih Kami?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Keunggulan yang membuat kami berbeda dari yang lain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Modern Cards */}
      <section id="layanan" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Layanan <span className="text-blue-600">Premium</span>
            </h2>
            <p className="text-gray-600 text-lg">Pilih layanan yang sesuai dengan kebutuhan Anda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Service Icon */}
                <div className="relative p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner flex items-center justify-center">
                      <div className={`bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Service Details */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{service.time}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold hover:shadow-lg transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-600">
                    Pilih Layanan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Form */}
      <section id="kontak" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Siap Melayani <span className="text-blue-600">Kebutuhan Anda</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Isi formulir dan kami akan menghubungi Anda dalam waktu 15 menit. 
                Gratis konsultasi dan penawaran spesial untuk pelanggan baru!
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: 'Telepon', value: '+62 812-3456-7890' },
                  { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'hello@laundrypro.com' },
                  { icon: <MapPin className="w-6 h-6" />, title: 'Alamat', value: 'Jl. Teknologi No. 123, Surabaya' },
                  { icon: <Clock className="w-6 h-6" />, title: 'Jam Operasional', value: '08:00 - 22:00 (Setiap Hari)' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                      <div className="text-blue-600">{contact.icon}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{contact.title}</div>
                      <div className="text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Formulir Pemesanan</h3>
                <p className="text-gray-600">Isi data Anda dengan lengkap</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="0812-3456-7890"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Layanan</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none"
                    required
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="cuci-setrika">Cuci Setrika</option>
                    <option value="cuci-kering">Cuci Kering</option>
                    <option value="express">Express Service</option>
                    <option value="premium">Premium Care</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan Tambahan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Catatan khusus atau instruksi..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Kirim Pesanan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-2 rounded-xl">
                  <Shirt className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Laundry<span className="text-cyan-400">Pro</span></div>
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
                {['Tentang Kami', 'Layanan', 'Harga', 'Blog', 'Karir'].map((link, index) => (
                  <li key={index}>
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
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      {service.title}
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
            <p>&copy; 2024 LaundryPro. All rights reserved. Made with ❤️ in Surabaya</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="group p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-pulse-slow">
          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Styles untuk animasi */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
}