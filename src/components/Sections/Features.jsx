import FeatureCard from '../UI/FeatureCard';
import { Truck, Shield, Clock, Star } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Truck className="w-6 h-6" />, title: 'Gratis Antar Jemput', desc: 'Area Cepogo' },
    { icon: <Shield className="w-6 h-6" />, title: 'Garansi 100%', desc: 'Kepuasan terjamin' },
    { icon: <Star className="w-6 h-6" />, title: 'Pelayanan Ramah', desc: 'Customer service 24/7' }
  ];

  return (
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
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.desc}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}