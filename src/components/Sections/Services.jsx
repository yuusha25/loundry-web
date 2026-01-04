import ServiceCard from '../UI/ServiceCard';
import { Shirt, Droplet, Zap, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: 'Cuci Setrika',
      price: 'Rp 4.000/kg',
      description: 'Pakaian dicuci bersih dan disetrika rapi',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Gratis pewangi', 'Lipatan rapi', 'Packaging bagus']
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: 'Cuci Kering',
      price: 'Rp 3.000/kg',
      description: 'Pakaian dicuci dan dikeringkan tanpa setrika',
      gradient: 'from-emerald-500 to-teal-500',
      features: ['Cuci bersih', 'Kering sempurna', 'Hemat energi']
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Cuci Basah',
      price: 'Rp 2.000/kg',
      description: 'Layanan cepat untuk kebutuhan mendesak',
      gradient: 'from-orange-500 to-amber-500',
      features: ['Pengerjaan Cepat', 'Prioritas tinggi', 'Antar jemput gratis']
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Setrika',
      price: 'Rp 2.000/kg',
      description: 'Setrika pakaian agar tampak seperti baru',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Setrika rapi', 'Hapus kerutan', 'Wangi tahan lama']
    }
  ];

  return (
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
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}