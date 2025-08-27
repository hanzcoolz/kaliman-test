import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, DollarSign } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const categories = ['Semua', 'Residensial', 'Komersial', 'Renovasi'];

  const projects = [
    {
      id: 1,
      title: 'Rumah Modern Minimalis Jakarta Selatan',
      category: 'Residensial',
      location: 'Jakarta Selatan',
      year: '2023',
      budget: 'Rp 850 Juta',
      description: 'Rumah 2 lantai dengan desain modern minimalis, dilengkapi smart home system.',
      images: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specs: ['Luas: 150m²', '3 Kamar Tidur', '2 Kamar Mandi', 'Carport 2 Mobil']
    },
    {
      id: 2,
      title: 'Gedung Perkantoran 5 Lantai',
      category: 'Komersial',
      location: 'Jakarta Pusat',
      year: '2023',
      budget: 'Rp 12 Miliar',
      description: 'Pembangunan gedung perkantoran modern dengan sertifikasi green building.',
      images: [
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specs: ['Luas: 2500m²', '5 Lantai', '200 Workstation', 'Basement Parking']
    },
    {
      id: 3,
      title: 'Renovasi Rumah Klasik Menteng',
      category: 'Renovasi',
      location: 'Jakarta Pusat',
      year: '2023',
      budget: 'Rp 450 Juta',
      description: 'Renovasi total rumah klasik dengan mempertahankan nilai sejarah.',
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specs: ['Luas: 200m²', 'Arsitektur Heritage', 'Modern Interior', 'Taman Klasik']
    },
    {
      id: 4,
      title: 'Townhouse Modern BSD',
      category: 'Residensial',
      location: 'Tangerang Selatan',
      year: '2022',
      budget: 'Rp 1.2 Miliar',
      description: 'Kompleks townhouse dengan konsep modern tropical dan fasilitas lengkap.',
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1396118/pexels-photo-1396118.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specs: ['Luas: 180m²', '3 Lantai', '4 Kamar Tidur', 'Rooftop Garden']
    },
    {
      id: 5,
      title: 'Warehouse & Distribution Center',
      category: 'Komersial',
      location: 'Bekasi',
      year: '2022',
      budget: 'Rp 8 Miliar',
      description: 'Fasilitas warehouse modern dengan sistem otomasi dan cold storage.',
      images: [
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specs: ['Luas: 5000m²', 'Cold Storage', 'Loading Dock', 'Automated System']
    },
    {
      id: 6,
      title: 'Renovasi Apartemen Premium',
      category: 'Renovasi',
      location: 'Jakarta Selatan',
      year: '2023',
      budget: 'Rp 280 Juta',
      description: 'Transformasi apartemen menjadi hunian modern dengan interior mewah.',
      images: [
        'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specs: ['Luas: 85m²', '2 Kamar Tidur', 'Walk-in Closet', 'Smart Kitchen']
    }
  ];

  const filteredProjects = activeCategory === 'Semua' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextImage = (projectId: number, maxImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages
    }));
  };

  const prevImage = (projectId: number, maxImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxImages) % maxImages
    }));
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-orange-500">Terbaik Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat hasil kerja terbaik kami dari berbagai jenis proyek konstruksi yang telah berhasil diselesaikan dengan kepuasan klien 100%.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Carousel */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.images[currentImageIndex[project.id] || 0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => prevImage(project.id, project.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => nextImage(project.id, project.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === (currentImageIndex[project.id] || 0)
                          ? 'bg-white'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Project Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2 text-orange-500" />
                    {project.budget}
                  </div>
                </div>

                {/* Specifications */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Spesifikasi:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.specs.map((spec, index) => (
                      <div key={index} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Tertarik dengan Portfolio Kami?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Diskusikan proyek impian Anda dengan tim ahli kami dan dapatkan estimasi biaya gratis.
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg">
              Konsultasi Proyek Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;