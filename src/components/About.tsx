import React from 'react';
import { CheckCircle, Award, Users, Shield, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Tahun Pengalaman', icon: Award },
    { number: '500+', label: 'Proyek Selesai', icon: Target },
    { number: '50+', label: 'Tim Profesional', icon: Users },
    { number: '100%', label: 'Kepuasan Klien', icon: Heart }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001 Safety Management',
    'Sertifikat Badan Usaha (SBU) Grade 7',
    'SIUJK (Surat Izin Usaha Jasa Konstruksi)',
    'Anggota GAPENSI & INKINDO'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Keamanan & Kualitas',
      description: 'Mengutamakan standar keselamatan kerja dan kualitas material terbaik dalam setiap proyek.'
    },
    {
      icon: CheckCircle,
      title: 'Komitmen Waktu',
      description: 'Menyelesaikan proyek tepat waktu sesuai timeline yang telah disepakati bersama.'
    },
    {
      icon: Users,
      title: 'Tim Berpengalaman',
      description: 'Didukung oleh tim arsitek, engineer, dan tukang berpengalaman dengan sertifikasi internasional.'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tentang <span className="text-orange-500">Berkah Konstruksi</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Berdiri sejak 2008, Berkah Konstruksi telah menjadi partner terpercaya dalam mewujudkan 
                impian hunian dan bangunan komersial berkualitas tinggi di Jakarta dan sekitarnya.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami memulai perjalanan dengan visi sederhana: memberikan layanan konstruksi terbaik 
                dengan harga yang fair dan transparan. Kini, dengan pengalaman lebih dari 15 tahun, 
                kami telah menyelesaikan ratusan proyek mulai dari rumah tinggal hingga gedung 
                perkantoran bertingkat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tim profesional kami terdiri dari arsitek berlisensi, structural engineer bersertifikat, 
                dan tukang ahli yang telah berpengalaman puluhan tahun. Setiap proyek ditangani dengan 
                perhatian detail dan standar kualitas internasional.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Mengapa Memilih Kami?</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Garansi konstruksi hingga 10 tahun
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Harga transparan tanpa biaya tersembunyi
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Support purna jual dan maintenance berkala
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Asuransi proyek dan pekerja lengkap
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tim Berkah Konstruksi"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">A+</div>
                  <div className="text-sm text-gray-600">BBB Rating</div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900">{stat.number}</div>
                    <div className="text-sm text-blue-700">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nilai-Nilai Perusahaan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Sertifikasi & Keanggotaan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;