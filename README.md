# Berkah Konstruksi - Website & Admin Panel

Website perusahaan konstruksi profesional dengan sistem manajemen konten (CMS) yang lengkap.

## 🚀 Fitur Utama

### Website Publik
- **Landing Page Modern**: Desain responsif dengan animasi dan micro-interactions
- **Layanan Konstruksi**: Showcase layanan residensial, komersial, dan renovasi
- **Portfolio Proyek**: Galeri proyek dengan filter kategori
- **Testimoni Klien**: Review dan rating dari klien
- **Form Kontak**: Sistem quote request terintegrasi
- **SEO Optimized**: Meta tags, structured data, dan sitemap

### Admin Panel (CMS)
- **Dashboard Analytics**: Statistik website dan performa konten
- **Manajemen Post**: Editor konten dengan preview dan scheduling
- **Media Library**: Upload dan organisasi file media
- **Kategori & Tags**: Sistem kategorisasi konten
- **Manajemen Komentar**: Moderasi dan approval komentar
- **User Management**: Kontrol akses dan role management
- **Editorial Calendar**: Perencanaan dan penjadwalan konten
- **System Settings**: Konfigurasi website dan email

## 🛠️ Teknologi

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Yup validation
- **File Upload**: React Dropzone
- **Date Handling**: date-fns

## 📦 Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd berkah-konstruksi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env dengan konfigurasi Anda
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   # Atau untuk akses dari network
   npm run dev:host
   ```

## 🌐 Deployment ke aaPanel

### Persiapan Server
1. **Install Node.js** di aaPanel
2. **Setup domain** kaliman.hanzserver.online
3. **Konfigurasi SSL** certificate

### Build & Deploy
1. **Build production**
   ```bash
   npm run build:prod
   ```

2. **Upload ke server**
   - Upload folder `dist/` ke document root domain
   - Atau setup sebagai Node.js application

3. **Konfigurasi Web Server**
   - Setup reverse proxy jika menggunakan Node.js
   - Atau serve static files dari folder `dist/`

### Environment Variables Production
```env
VITE_APP_URL=https://kaliman.hanzserver.online
VITE_API_URL=https://kaliman.hanzserver.online/api
VITE_SITE_NAME=Berkah Konstruksi
# ... konfigurasi lainnya
```

## 🔐 Admin Panel

### Akses Admin
- **URL**: `https://kaliman.hanzserver.online/admin`
- **Email**: `admin@konstruksiberkah.com`
- **Password**: `admin123`

### Fitur Admin
- **Dashboard**: Overview statistik dan aktivitas
- **Posts**: Manajemen artikel dan konten
- **Media**: Upload dan organisasi file
- **Categories**: Kategori konten
- **Tags**: Label dan tag konten
- **Comments**: Moderasi komentar
- **Users**: Manajemen pengguna
- **Analytics**: Laporan performa website
- **Calendar**: Penjadwalan konten
- **Settings**: Konfigurasi sistem

## 📱 Responsive Design

Website dioptimalkan untuk semua ukuran layar:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Design System

- **Colors**: Blue primary, Orange accent
- **Typography**: System fonts dengan 3 weights
- **Spacing**: 8px grid system
- **Components**: Reusable UI components
- **Animations**: Smooth transitions dan hover effects

## 📊 SEO Features

- **Meta Tags**: Dynamic title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Schema.org**: Structured data untuk search engines
- **Sitemap**: Auto-generated XML sitemap
- **Performance**: Optimized loading dan caching

## 🔧 Development

### Scripts Available
```bash
npm run dev          # Development server
npm run dev:host     # Dev server dengan network access
npm run build        # Production build
npm run build:prod   # Production build dengan optimizations
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### Project Structure
```
src/
├── components/          # React components
│   ├── admin/          # Admin panel components
│   └── public/         # Public website components
├── contexts/           # React contexts
├── types/             # TypeScript types
├── styles/            # CSS files
└── main.tsx           # App entry point
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

Copyright © 2024 Berkah Konstruksi. All rights reserved.

## 📞 Support

Untuk bantuan teknis atau pertanyaan:
- **Email**: admin@konstruksiberkah.com
- **Phone**: +62 21-5555-0123
- **WhatsApp**: +62 812-3456-7890
