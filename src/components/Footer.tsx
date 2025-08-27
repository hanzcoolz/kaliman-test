import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin,
  Award,
  Shield,
  CheckCircle,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Kontak', href: '#kontak' }
  ];

  const services = [
    { name: 'Konstruksi Residensial', href: '#layanan' },
    { name: 'Konstruksi Komersial', href: '#layanan' },
    { name: 'Renovasi & Remodeling', href: '#layanan' },
    { name: 'Instalasi MEP', href: '#layanan' },
    { name: 'Konsultasi & Perencanaan', href: '#layanan' },
    { name: 'Maintenance & Repair', href: '#layanan' }
  ];

  const legalLinks = [
    { name: 'Kebijakan Privasi', href: '#' },
    { name: 'Syarat & Ketentuan', href: '#' },
    { name: 'Kebijakan Garansi', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const socialMedia = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: '#',
      color: 'hover:text-blue-600' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: '#',
      color: 'hover:text-pink-600' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: '#',
      color: 'hover:text-red-600' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: '#',
      color: 'hover:text-blue-700' 
    }
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'OHSAS 18001',
    'SBU Grade 7',
    'GAPENSI Member',
    'INKINDO Member'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-4">
                Berkah<span className="text-orange-500">Konstruksi</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Partner terpercaya untuk mewujudkan impian hunian dan bangunan komersial berkualitas tinggi sejak 2008. 
                Dengan pengalaman 15+ tahun dan 500+ proyek selesai.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Jl. Sudirman No. 123, Jakarta Selatan 12190
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62 21-5555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@konstruksiberkah.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Sen-Jum: 08:00-18:00, Sab: 08:00-15:00</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                {socialMedia.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Navigasi Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Informasi</h3>
            
            {/* Legal Links */}
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="bg-red-600 p-4 rounded-lg mb-6">
              <h4 className="font-bold mb-2 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Darurat 24/7
              </h4>
              <p className="text-sm text-red-100 mb-2">
                Untuk kerusakan yang perlu penanganan segera
              </p>
              <p className="font-bold text-lg">+62 815-9876-5432</p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                Garansi 10 Tahun
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Award className="w-4 h-4 text-yellow-500 mr-2" />
                ISO Certified
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                Asuransi Lengkap
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="font-bold text-lg mb-6 text-center">Sertifikasi & Keanggotaan</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-sm font-medium text-gray-300">{cert}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-bold text-xl mb-4">Dapatkan Tips & Update Terbaru</h3>
            <p className="text-gray-300 mb-6">
              Berlangganan newsletter kami untuk mendapatkan tips konstruksi, tren desain, dan penawaran khusus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Berkah Konstruksi. Semua hak dilindungi undang-undang.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Dibangun dengan teknologi modern untuk pengalaman terbaik.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-xs">Made with ❤️ in Jakarta</span>
              <button
                onClick={scrollToTop}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Kembali ke atas"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;