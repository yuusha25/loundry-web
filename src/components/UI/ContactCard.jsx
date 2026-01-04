export default function ContactCard({ icon, title, value }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
        <div className="text-blue-600">{icon}</div>
      </div>
      <div>
        <div className="font-semibold text-gray-800">{title}</div>
        <div className="text-gray-600">{value}</div>
      </div>
    </div>
  );
}