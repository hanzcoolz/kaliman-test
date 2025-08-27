import React from 'react';
import { Home, Building2, Wrench, Zap, ShieldCheck, HardHat } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Konstruksi Residensial',
      description: 'Pembangunan rumah tinggal, townhouse, dan perumahan dengan desain modern dan kualitas terbaik.',
      features: ['Desain Custom', 'Material Premium', 'Garansi 10 Tahun'],
      price: 'Mulai dari Rp 4.5 jt/m²'
    },
    {
      icon: Building2,
      title: 'Konstruksi Komersial',
      description: 'Pembangunan gedung perkantoran, ruko, warehouse, dan fasilitas komersial lainnya.',
      features: ['Sertifikat SLF', 'Timeline Ketat', 'Standar Internasional'],
      price: 'Mulai dari Rp 6 jt/m²'
    },
    {
      icon: Wrench,
      title: 'Renovasi & Remodeling',
      description: 'Renovasi total atau parsial untuk meningkatkan fungsi dan estetika bangunan existing.',
      features: ['Konsultasi Gratis', 'Tanpa Pindah', 'Hasil Maksimal'],
      price: 'Mulai dari Rp 2.8 jt/m²'
    },
    {
      icon: Zap,
      title: 'Instalasi MEP',
      description: 'Mechanical, Electrical & Plumbing untuk sistem bangunan yang terintegrasi dan efisien.',
      features: ['Teknologi Smart', 'Hemat Energi', 'Maintenance Support'],
      price: 'Mulai dari Rp 800 rb/m²'
    },
    {
      icon: ShieldCheck,
      title: 'Konsultasi & Perencanaan',
      description: 'Layanan konsultasi arsitektur, struktur, dan perencanaan proyek konstruksi.',
      features: ['Arsitek Berpengalaman', 'IMB & Perizinan', '3D Visualization'],
      price: 'Mulai dari Rp 50 rb/m²'
    },
    {
      icon: HardHat,
      title: 'Maintenance & Repair',
      description: 'Layanan perawatan berkala dan perbaikan untuk menjaga kondisi bangunan optimal.',
      features: ['Scheduled Maintenance', 'Emergency Repair', 'Annual Contract'],
      price: 'Mulai dari Rp 15 rb/m²'
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan Konstruksi <span className="text-orange-500">Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan solusi konstruksi lengkap dengan standar kualitas tinggi dan harga yang kompetitif. 
            Semua layanan dilengkapi dengan garansi dan support purna jual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <div className="text-lg font-bold text-blue-900 mb-3">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold">
                    Minta Penawaran
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Tidak Menemukan Layanan yang Anda Cari?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu memberikan solusi konstruksi yang sesuai dengan kebutuhan spesifik Anda.
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg">
              Konsultasi Custom Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;