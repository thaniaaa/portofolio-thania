1. Tujuan

Membangun website portofolio yang memperkenalkan pemilik, menjelaskan kemampuan dan pengalaman, menampilkan proyek, serta memudahkan recruiter atau calon kolaborator menghubungi pemilik. Tampilan profesional, minimalis, dan playful secara terukur. Implementasi menggunakan React + Vite dan JavaScript dengan komponen terpisah agar mudah dipelajari, dirawat, dan diperbarui.

2. Referensi dan batasan

Gambar referensi: inspirasi tipografi serif ekspresif, whitespace, sudut membulat, label berbentuk pill, dan dekorasi organik kecil. Konten dan branding website parenting tidak diambil.

visily-portfolio-home.pdf: acuan susunan halaman, hero dua kolom, kartu pendidikan/keahlian, timeline pengalaman, dua kartu proyek, dan blok ajakan menghubungi.

Warna pengguna mengungguli warna mint/coral pada prototype: #FFF2B2, #A8C6E7, #FFF7D6.

Nama, foto, institusi, pengalaman, teknologi, proyek, dan email dalam prototype merupakan konten contoh, bukan fakta tentang pemilik.

Watermark Visily tidak menjadi bagian dari website.

Tahap saat ini: panduan instalasi dan PRD. Instalasi pada perangkat pengguna belum diverifikasi.

3. Pengguna dan alur utama

Pengunjung

Kebutuhan

Alur

Recruiter

Menilai kecocokan profil

Hero → keahlian → pengalaman → unduh CV

Calon klien

Melihat bukti kemampuan

Hero → proyek → tautan proyek → kontak

Rekan kolaborasi

Mengenal pemilik dan menghubungi

Tentang → proyek → email atau LinkedIn

Keberhasilan MVP: informasi dapat ditemukan cepat, semua tautan tersedia berfungsi, CV dapat diunduh ketika tersedia, dan tampilan nyaman pada ponsel maupun desktop.

4. Cakupan MVP

Satu halaman berbahasa Indonesia pada route /, navigasi anchor, menu mobile, unduh CV, tautan proyek, kontak email, dan tautan sosial. Konten dikelola melalui file JavaScript. Belum memerlukan database, autentikasi, dashboard admin, CMS, blog, formulir pengiriman email, atau halaman detail proyek. Detail proyek dapat ditambahkan pada fase berikutnya bila kontennya tersedia.

5. Susunan dan kebutuhan fungsional

Urutan

Bagian / komponen

Isi dan perilaku

1

Navbar

Identitas/logo teks; Tentang ke #tentang, Pengalaman ke #pengalaman, Proyek ke #proyek; Kontak Saya ke #kontak. Menu mobile dapat dibuka/ditutup dan menutup setelah tautan dipilih.

2

HeroSection

Sapaan/role, satu H1, deskripsi singkat, foto profil, status ketersediaan bila valid. Lihat Proyek menuju #proyek. Unduh CV mengunduh PDF asli. Desktop teks kiri/foto kanan; mobile teks lalu foto.

3

AboutSection

Ringkasan perjalanan dan motivasi; EducationCard untuk pendidikan; SkillsPanel mengelompokkan kemampuan. Desktop dua kolom, mobile satu kolom.

4

ExperienceSection

Timeline vertikal; ExperienceCard memuat jabatan, organisasi, periode, dan kontribusi. Terbaru di atas. Jumlah entri mengikuti data asli, bukan wajib empat seperti contoh.

5

ProjectsSection

Dua kolom desktop dan satu kolom mobile. ProjectCard berisi gambar, nama, deskripsi, teknologi, serta tautan detail/demo/repository yang tersedia. Dua kartu pada prototype menjadi acuan komposisi awal.

6

ContactSection

Blok “Tertarik Bekerja Sama?”; CTA Kirim Pesan membuka mailto ke email pemilik, serta alamat email yang dapat disalin manual. Tidak menampilkan pesan sukses pengiriman karena situs tidak mengirim email.

7

Footer

Tahun, nama pemilik, GitHub, LinkedIn, dan Email sesuai data tersedia.

Jika CV, foto, pengalaman, atau tautan belum tersedia, gunakan placeholder berlabel pada pengembangan. Sebelum rilis, lengkapi aset atau sembunyikan kontrol/entri terkait. Jangan menggunakan tautan # seolah-olah merupakan demo aktif. Tautan eksternal yang membuka tab baru memakai rel="noopener noreferrer".

6. Sistem visual

Token

Nilai

Pemakaian

background

#FFF7D6

Latar utama hangat

primary

#A8C6E7

Navbar, panel keahlian, blok kontak, aksen proyek

accent

#FFF2B2

Highlight kata, badge, tombol tertentu, dekorasi

surface

#FFFFFF

Permukaan kartu dan ruang istirahat visual

foreground

#263238

Judul dan teks utama

muted

#4B5563

Teks sekunder yang tetap terbaca

Putih dan warna gelap adalah netral pendukung. Gunakan teks gelap di atas ketiga warna pastel; jangan memakai teks putih kecil di atas pastel. Verifikasi kontras sebelum rilis.

Usulan tipografi: serif seperti Georgia untuk heading, sans-serif sistem untuk body pada tahap awal. Font khusus boleh ditambahkan kemudian, maksimal dua keluarga. Body minimal 16px; line-height sekitar 1.6. Heading responsif sekitar 36–64px untuk hero.

Container maksimal sekitar 1120px, padding horizontal 20–24px, jarak section 64–96px desktop dan 40–56px mobile. Kartu memiliki radius 20–28px; tombol pill; border tipis dan shadow pendek yang lembut. Dekorasi berupa bintang, lengkungan, atau garis bergelombang kecil, maksimal 1–2 per section dan tidak menghalangi teks. Hindari membawa semua warna tambahan dari referensi.

Hover sederhana 150–250ms, tanpa animasi otomatis berlebihan. Hormati prefers-reduced-motion. Gunakan CSS/SVG sederhana untuk dekorasi dan tandai aria-hidden.

7. Arsitektur teknis dan pembagian file

Stack: React + Vite, JavaScript (JSX), CSS biasa, dan npm. Gunakan konfigurasi linter bawaan template yang terpasang. Versi aktual tercatat pada package.json dan package-lock.json. Komit lockfile agar dependency konsisten. Aplikasi dirender di browser; state React hanya digunakan untuk interaksi seperti menu mobile. Styling menggunakan CSS terpisah agar sesuai struktur referensi; Tailwind tidak diperlukan untuk MVP. React Router belum diperlukan karena navigasi satu halaman menggunakan anchor.

Lokasi

Tanggung jawab

index.html

Entry HTML, lang="id", title, description, favicon, dan elemen root

vite.config.js

Konfigurasi Vite dan plugin React

package.json

Dependency dan script proyek

src/main.jsx

Mount App ke elemen root dan import styles/global.css

src/App.jsx

Merangkai Navbar, section dalam main, dan Footer

src/assets/

Aset yang di-import oleh komponen dan diproses bundler

src/components/layout/Navbar.jsx

Navigasi desktop dan mobile

src/components/layout/Footer.jsx

Copyright dan sosial

src/components/sections/HeroSection.jsx

Hero

src/components/sections/AboutSection.jsx

Tentang, pendidikan, keahlian

src/components/sections/ExperienceSection.jsx

Timeline pengalaman

src/components/sections/ProjectsSection.jsx

Daftar proyek

src/components/sections/ContactSection.jsx

Ajakan kontak

src/components/ui/EducationCard.jsx

Kartu pendidikan

src/components/ui/ExperienceCard.jsx

Entri pengalaman

src/components/ui/ProjectCard.jsx

Kartu proyek reusable

src/components/ui/SkillsPanel.jsx

Kelompok skill

src/components/ui/Container.jsx

Lebar konten konsisten

src/components/ui/SectionHeading.jsx

Label dan judul section

src/components/ui/ButtonLink.jsx

Anchor bergaya tombol

src/components/ui/Badge.jsx

Label teknologi/status

src/components/ui/Doodle.jsx

Dekorasi noninteraktif

src/data/portfolio.js

Profil, navigasi, pendidikan, skills, pengalaman, proyek, kontak

src/styles/global.css

Token warna, reset, tipografi, layout dasar, focus, reduced motion

src/styles/layout.css

Style navbar dan footer

src/styles/sections.css

Style section dan breakpoint

src/styles/ui.css

Style komponen UI bersama

public/images/

Foto profil dan thumbnail yang dirujuk melalui URL

public/documents/

CV PDF

public/favicon.svg

Favicon milik pemilik website

public/icons.svg

Opsional: sprite ikon bila digunakan

docs/PRD.md

Salinan dokumen ini di proyek

Struktur inti mengikuti screenshot: public, src/assets, src/components/layout, src/components/sections, src/components/ui, src/data, src/styles, App.jsx, dan main.jsx. node_modules dibuat oleh npm install, bukan dibuat manual. Folder dist muncul setelah build. File konfigurasi linter mengikuti generator; .oxlintrc.json pada contoh tidak wajib disalin bila generator memakai linter berbeda. Jangan memasang dua linter hanya untuk menyamakan nama file.

Import stylesheet tambahan melalui global.css atau entry yang konsisten. Saat implementasi mengganti CSS starter, hapus import CSS starter yang tidak digunakan agar gaya demo tidak membatasi lebar halaman. Aset public/images dipanggil seperti /images/profile.webp, bukan /public/images/profile.webp. Hindari menduplikasi aset yang sama di public dan src/assets.

Komponen list menerima data melalui props; gunakan ID stabil sebagai key. Pisahkan komponen berdasarkan tanggung jawab dan penggunaan ulang, tidak perlu memecah setiap elemen HTML menjadi komponen.

8. Model konten

Data

Field utama

Profile

name, role, introduction, bio, photo, photoAlt, availability?, cvUrl?

Education

id, institution, qualification, startYear, endYear?

SkillGroup

id, label, items[]

Experience

id, role, organization, startDate, endDate?, highlights[]

Project

id, title, description, image, imageAlt, technologies[], demoUrl?, repositoryUrl?, caseStudyUrl?

Contact

email, githubUrl?, linkedinUrl?

Jangan mengarang metrik hasil proyek. Gunakan deskripsi kontribusi faktual. Status “available for work” hanya ditampilkan jika sesuai kondisi pemilik.

9. Responsivitas, aksesibilitas, dan kualitas

Uji lebar 360, 768, 1024, dan 1440px; tidak ada scroll horizontal atau teks terpotong.

Navigasi anchor tidak menutupi heading jika navbar dibuat sticky; terapkan scroll-margin-top.

Satu H1, H2 untuk section, H3 untuk kartu; gunakan landmark header, nav, main, footer.

Semua kontrol dapat diakses keyboard; focus terlihat, menu memiliki aria-expanded dan aria-controls, Escape menutup menu dan mengembalikan fokus ke pemicu.

Target sentuh sekitar 44px. Gambar informatif memiliki alt; dekorasi diabaikan pembaca layar.

Gunakan img dengan width/height atau aspect-ratio tetap. Kompres foto menjadi WebP/AVIF, terapkan loading="lazy" untuk gambar di bawah hero, dan jangan lazy-load foto hero utama.

Metadata title, description, dan favicon sesuai identitas asli; social preview ditambahkan ketika aset siap.

Target Lighthouse mobile setelah implementasi: Performance ≥90, Accessibility ≥95, SEO ≥90 pada build produksi lokal. Ini target verifikasi, bukan hasil pengujian saat ini.

Tidak ada API key atau data privat yang disimpan dalam source publik.

10. Kriteria penerimaan

Urutan section sesuai PDF dan palet utama sesuai tiga kode warna pengguna.

Navbar, CTA proyek, email, sosial, serta unduh CV berfungsi ketika datanya tersedia.

Mobile menu dapat dioperasikan dengan klik dan keyboard.

Komponen section, kartu, dan data terpisah sesuai arsitektur.

Mengubah data portfolio.js memperbarui isi kartu tanpa mengedit komponen.

Tidak ada data contoh yang tampil sebagai identitas asli saat rilis.

Lulus pemeriksaan lint dan build; tidak ada error browser atau aset 404.

Tampilan diperiksa pada empat lebar uji; kontras dan focus state diperiksa.

11. Tahapan pekerjaan

Persiapan: cek Node.js/npm yang sudah terinstal, scaffold React + Vite, jalankan halaman starter.

Fondasi: buat folder, token visual, model data, komponen UI bersama.

Halaman: implementasikan section mengikuti urutan PDF.

Konten: masukkan profil, CV, foto, pengalaman, dan proyek yang benar.

QA: responsive, keyboard, tautan, lint, build dan audit performa.

Deployment: tentukan hosting setelah website siap dan pengguna menginginkannya.

Konten yang masih dibutuhkan: nama dan role, bio, foto, CV, pendidikan, skill aktual, pengalaman, proyek beserta screenshot/tautan, email, GitHub, LinkedIn. Belum menghambat instalasi awal.

Lampiran A — Instalasi React + Vite melalui CMD Windows

Node.js/npm sudah pernah dipasang pengguna. Tidak perlu memasangnya ulang bila versinya kompatibel. Perintah di bawah dijalankan pada perangkat pengguna; instalasi dan build belum dijalankan atau diverifikasi oleh asisten.

Cek versi di CMD:

node -v
npm -v

Dokumentasi Vite mensyaratkan Node.js 20.19+ atau 22.12+ pada lini tersebut; gunakan Node.js LTS yang masih didukung dan memenuhi kebutuhan template. Jika muncul peringatan engine, sesuaikan versi Node terlebih dahulu.

Buka folder induk tempat proyek disimpan di File Explorer. Ketik cmd di address bar lalu Enter. Buat proyek baru dengan nama folder yang belum dipakai:

npm create vite@latest web-portofolio -- --template react

Pilih y jika diminta mengunduh create-vite. Template react menggunakan JavaScript/JSX. Jika ditanya instal dan jalankan otomatis, pilih No agar mengikuti langkah manual di bawah. Jika pertanyaan pilihan eksperimental muncul, pilih No. Jangan menjalankan generator di dalam proyek Next.js lama. Jika web-portofolio sudah ada, gunakan nama baru seperti web-portofolio-react dan sesuaikan perintah cd. Proyek lama tidak perlu dihapus.

Masuk dan pasang dependency:

cd web-portofolio
npm install

Buat folder tambahan sesuai screenshot dari CMD:

mkdir public\images public\documents src\components\layout src\components\sections src\components\ui src\data src\styles docs

src/assets, App.jsx, main.jsx, index.html, dan vite.config.js disediakan template React. Folder tambahan di atas masih kosong; file komponen dan CSS dibuat pada tahap implementasi. Jika folder sudah ada, cukup lewati folder tersebut. Simpan dokumen ini sebagai docs/PRD.md. Buka folder proyek lewat File → Open Folder di VS Code atau gunakan code . jika perintah tersebut tersedia.

Jalankan server:

npm run dev

Buka http://localhost:5173 atau alamat yang dicetak terminal. Setup awal berhasil bila halaman React + Vite tampil tanpa error. Terminal tetap terbuka selama server berjalan. Tekan Ctrl+C untuk berhenti. Pada sesi berikutnya cukup buka CMD di folder web-portofolio dan jalankan npm run dev.

Pemeriksaan setelah implementasi:

npm run lint
npm run build
npm run preview

Gunakan script lint yang tersedia di package.json; bila generator tidak menyediakannya, konfigurasi linter pada tahap implementasi. Build menghasilkan dist. Preview untuk mengecek hasil build secara lokal, bukan server produksi publik.

Masalah umum: node/npm tidak dikenali → cek instalasi dan buka ulang terminal; ENOENT package.json → masuk ke folder web-portofolio; folder tujuan tidak kosong → gunakan nama folder baru; port 5173 terpakai → buka URL pengganti yang ditampilkan Vite.

Sumber: Panduan resmi Vite, diperiksa 21 September 2026. Versi dependency yang dihasilkan mengikuti tag latest saat perintah dijalankan.

Riwayat revisi

v2.0: mengganti Next.js/TypeScript dengan React + Vite/JavaScript, memakai CSS biasa, menyesuaikan struktur dengan screenshot, serta mengganti panduan instalasi ke CMD. Palet dan susunan konten tetap mengikuti brief dan PDF.