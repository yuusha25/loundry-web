import { Sparkles, Phone, ArrowRight } from 'lucide-react';
import StatsCard from '../UI/StatsCard';

export default function Hero() {
  const stats = [
    { number: '10+', label: 'Pelanggan' },
    { number: '99%', label: 'Kepuasan' },
    { number: '24/7', label: 'Layanan' }
  ];

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium">Laundry Modern & Terpercaya</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient">
              Revolusi Laundry
            </span>
            <span className="block text-gray-800 mt-2">Masa Kini</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Menggunakan teknologi canggih dan bahan premium untuk menjaga kualitas pakaian Anda. 
            Gratis antar-jemput, hasil maksimal!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
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
          <div className=" mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}