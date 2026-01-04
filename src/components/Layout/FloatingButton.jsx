import { Phone } from 'lucide-react';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button className="group p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-pulse-slow">
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}