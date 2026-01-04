export default function StatsCard({ number, label, delay }) {
  return (
    <div 
      className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}