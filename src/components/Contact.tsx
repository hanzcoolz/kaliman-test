import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    location: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        location: '',
        timeline: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon & WhatsApp',
      details: [
        '+62 21-5555-0123 (Kantor)',
        '+62 812-3456-7890 (WhatsApp)',
        'Darurat 24/7: +62 815-9876-5432'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@kalimankarya.id',
        'quote@kalimankarya.id',
        'support@kalimankarya.id'
      ]
    },
    {
      icon: MapPin,
      title: 'Alamat Kantor',
      details: [
        'Jl. Sudirman No. 123',
        'Jakarta Selatan 12190',
        'Indonesia'
      ]
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: [
        'Senin - Jumat: 08:00 - 18:00',
        'Sabtu: 08:00 - 15:00',
        'Minggu: Tutup (Emergency Only)'
      ]
    }
  ];

  const services = [
    'Konstruksi Residensial',
    'Konstruksi Komersial',
    'Renovasi & Remodeling',
    'Instalasi MEP',
    'Konsultasi & Perencanaan',
    'Maintenance & Repair'
  ];

  const budgetRanges = [
    'Di bawah Rp 100 Juta',
    'Rp 100 - 500 Juta',
    'Rp 500 Juta - 1 Miliar',
    'Rp 1 - 5 Miliar',
    'Di atas Rp 5 Miliar',
    'Perlu Konsultasi'
  ];

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-orange-500">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siap memulai proyek konstruksi Anda? Tim ahli kami siap memberikan konsultasi gratis 
            dan penawaran terbaik untuk kebutuhan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Area Layanan</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Jakarta (Semua Wilayah)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Bogor, Depok, Tangerang, Bekasi
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Bandung & Sekitarnya
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Surabaya (Proyek Besar)
                </li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-2xl text-white">
              <h4 className="font-bold mb-2 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Layanan Darurat 24/7
              </h4>
              <p className="text-sm text-red-100 mb-3">
                Untuk kerusakan bangunan yang memerlukan penanganan segera
              </p>
              <p className="font-semibold text-lg">+62 815-9876-5432</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Minta Penawaran Gratis</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-green-700">
                    Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 24 jam.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+62 812-3456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Layanan *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Pilih jenis layanan</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimasi Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Pilih range budget</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Target Waktu Mulai
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Pilih timeline</option>
                      <option value="Segera (1-2 minggu)">Segera (1-2 minggu)</option>
                      <option value="1-2 bulan">1-2 bulan</option>
                      <option value="3-6 bulan">3-6 bulan</option>
                      <option value="Lebih dari 6 bulan">Lebih dari 6 bulan</option>
                      <option value="Belum pasti">Belum pasti</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Lokasi Proyek *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Contoh: Jakarta Selatan, Depok, dll."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Detail Proyek & Pertanyaan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Ceritakan detail proyek Anda, spesifikasi khusus, atau pertanyaan lainnya..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Mengirim Pesan...
                    </>
                  ) : (
                    <>
                      Kirim Pesan & Minta Penawaran
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Dengan mengirim form ini, Anda setuju dengan kebijakan privasi kami. 
                  Kami akan menghubungi Anda dalam 24 jam kerja.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8">
            <div className="text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Butuh Respon Lebih Cepat?</h3>
              <p className="text-blue-100">
                Hubungi kami langsung melalui telepon atau WhatsApp untuk konsultasi segera
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <button className="bg-green-500 text-white p-6 rounded-xl hover:bg-green-600 transition-colors text-center group">
                <div className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform">WhatsApp</div>
                <div className="text-green-100">+62 812-3456-7890</div>
                <div className="text-sm text-green-200 mt-2">Response: 5-10 menit</div>
              </button>
              
              <button className="bg-blue-500 text-white p-6 rounded-xl hover:bg-blue-600 transition-colors text-center group">
                <div className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform">Telepon</div>
                <div className="text-blue-100">+62 21-5555-0123</div>
                <div className="text-sm text-blue-200 mt-2">Jam Kerja: 08:00-18:00</div>
              </button>
              
              <button className="bg-orange-500 text-white p-6 rounded-xl hover:bg-orange-600 transition-colors text-center group">
                <div className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform">Kunjungi Kantor</div>
                <div className="text-orange-100">Jl. Sudirman No. 123</div>
                <div className="text-sm text-orange-200 mt-2">Jakarta Selatan</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;