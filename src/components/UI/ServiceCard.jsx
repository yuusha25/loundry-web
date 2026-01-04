import { Clock, CheckCircle } from 'lucide-react';

export default function ServiceCard({
  icon,
  title,
  price,
  time,
  description,
  gradient,
  features,
  delay
}) {
  return (
    <div 
      className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Service Content */}
      <div className="relative p-8">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner flex items-center justify-center">
            <div className={`bg-gradient-to-br ${gradient} text-blue bg-clip-text`}>
              {icon}
            </div>
          </div>
        </div>
        
        {/* Details */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {price}
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="w-5 h-5 mr-2" />
          <span>{time}</span>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Features List */}
        <div className="space-y-2 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button onClick={() => window.location.href = "#kontak"} className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold hover:shadow-lg transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-600">
          Pilih Layanan
        </button>
      </div>
    </div>
  );
}