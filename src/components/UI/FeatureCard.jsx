export default function FeatureCard({ icon, title, description, delay }) {
  return (
    <div 
      className="group relative p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div className="mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}