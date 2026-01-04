import { useState } from 'react';
import ContactCard from '../UI/ContactCard';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    linkgmaps: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "6285702333438"; // nomor WA tujuan (tanpa +)

    const message = `
Halo Berkah Laundry 👋

Saya ingin melakukan pemesanan dengan detail berikut:

Nama: ${formData.name}
No. HP: ${formData.phone}
Layanan: ${formData.service}
Link Google Maps: ${formData.linkgmaps || "-"}
Pesan Tambahan: ${formData.message || "-"}

Terima kasih.
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: '',
      phone: '',
      service: '',
      linkgmaps: '',
      message: ''
    });
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: 'Telepon', value: '+62 857-0233-3438' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'hello@berkahloundry.com' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Alamat', value: 'Bendosari, Cepogo, Boyolali' },
    { icon: <Clock className="w-6 h-6" />, title: 'Jam Operasional', value: '08:00 - 22:00 (Setiap Hari)' }
  ];

  return (
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
              {contactInfo.map((contact) => (
                <ContactCard
                  key={contact.title}
                  icon={contact.icon}
                  title={contact.title}
                  value={contact.value}
                />
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
                  <option value="cuci-basah">Cuci Basah</option>
                  <option value="setrika">Setrika</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Link Google Maps</label>
                <input
                  type="url"
                  name="linkgmaps"
                  value={formData.linkgmaps}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="https://maps.google.com/..."
                />
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
  );
}