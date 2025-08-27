import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-20l-20 20zm20 0l20-20v20z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Membangun Impian Anda dengan
                <span className="text-orange-400 block mt-2">Kualitas Terpercaya</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Solusi konstruksi profesional untuk rumah, gedung komersial, dan renovasi dengan pengalaman 15+ tahun. Dipercaya ribuan klien di Jakarta dan sekitarnya.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center group">
                Konsultasi Gratis Sekarang
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
                Lihat Portfolio Kami
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-blue-200 text-sm">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">Bergaransi</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Konstruksi Profesional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white text-blue-900 p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;