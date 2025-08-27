import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      position: 'Pemilik Rumah',
      project: 'Rumah Modern Minimalis',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      testimonial: 'Berkah Konstruksi benar-benar profesional dan amanah. Rumah kami selesai tepat waktu dengan kualitas yang melebihi ekspektasi. Tim mereka sangat komunikatif dan transparan dalam setiap proses pembangunan.',
      date: 'Januari 2024'
    },
    {
      id: 2,
      name: 'Sari Indrawati',
      position: 'General Manager',
      project: 'Renovasi Kantor',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      testimonial: 'Renovasi kantor kami berjalan sangat lancar tanpa mengganggu operasional. Hasilnya luar biasa modern dan fungsional. Harga yang ditawarkan juga sangat kompetitif dibanding kontraktor lain.',
      date: 'Desember 2023'
    },
    {
      id: 3,
      name: 'Ahmad Rahman',
      position: 'Developer',
      project: 'Kompleks Townhouse',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      testimonial: 'Sudah 3 proyek kami serahkan ke Berkah Konstruksi dan semuanya memuaskan. Mereka sangat memahami kebutuhan developer dan selalu memberikan solusi terbaik dengan timeline yang ketat.',
      date: 'November 2023'
    },
    {
      id: 4,
      name: 'Linda Kusuma',
      position: 'Pemilik Ruko',
      project: 'Pembangunan Ruko 3 Lantai',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      testimonial: 'Pelayanan after sales mereka excellent! Bahkan setelah proyek selesai, mereka masih rutin melakukan pengecekan dan maintenance. Investasi terbaik yang pernah kami buat.',
      date: 'Oktober 2023'
    },
    {
      id: 5,
      name: 'Rizki Pratama',
      position: 'Pengusaha',
      project: 'Warehouse & Gudang',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      testimonial: 'Pembangunan gudang kami memerlukan spesifikasi khusus dan Berkah Konstruksi berhasil memenuhi semua requirement dengan sempurna. Tim engineering mereka sangat kompeten.',
      date: 'September 2023'
    },
    {
      id: 6,
      name: 'Dewi Lestari',
      position: 'Ibu Rumah Tangga',
      project: 'Renovasi Total Rumah',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      testimonial: 'Proses renovasi yang awalnya kami khawatirkan menjadi sangat mudah berkat Berkah Konstruksi. Mereka mengatur segalanya dengan rapi dan hasilnya seperti rumah baru!',
      date: 'Agustus 2023'
    }
  ];

  const stats = [
    { number: '500+', label: 'Klien Puas' },
    { number: '4.9/5', label: 'Rating Google' },
    { number: '98%', label: 'Repeat Client' },
    { number: '100%', label: 'Tepat Waktu' }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-orange-500">Klien Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Berikut testimonial dari klien yang telah mempercayakan proyek konstruksi mereka kepada kami.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-orange-500 p-3 rounded-full">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="relative">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-orange-600 font-medium">{testimonial.project}</div>
                </div>
              </div>

              {/* Date */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Lihat Lebih Banyak Review</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Kami bangga dengan rating 4.9/5 di Google Reviews dari 200+ ulasan klien. 
            Baca pengalaman lengkap mereka dengan layanan kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Baca Review di Google
            </button>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
              Bergabunglah Jadi Klien Kami
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-2">0</div>
            <div className="text-gray-600">Komplain Serius</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-2">10 Tahun</div>
            <div className="text-gray-600">Garansi Konstruksi</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;