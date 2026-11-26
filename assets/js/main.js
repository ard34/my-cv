// Main JavaScript Application for Riski Ardiansyah Portfolio

// ==========================================
// Centralized Tools & Tech Stack Configuration
// ==========================================
const tools = [
  { name: "Kali Linux", domain: "kali.org", fallback: "assets/img/icons/kalilinux.svg" },
  { name: "Burp Suite", domain: "portswigger.net", fallback: "assets/img/icons/burpsuite.svg" },
  { name: "Firefox", domain: "firefox.com", fallback: "assets/img/icons/firefox.svg" },
  { name: "Nmap", domain: "nmap.org", fallback: "assets/img/icons/nmap.svg" },
  { name: "Visual Studio Code", domain: "code.visualstudio.com", fallback: "assets/img/icons/vscode.svg" },
  { name: "GitHub", domain: "github.com", fallback: "assets/img/icons/github.svg" },
  { name: "OpenAI / Codex", domain: "openai.com", fallback: "assets/img/icons/openai.svg" },
  { name: "Claude AI", domain: "claude.ai", fallback: "assets/img/icons/claude.svg" },
  { name: "Google Gemini", domain: "gemini.google.com", fallback: "assets/img/icons/gemini.svg" },
  { name: "Laravel", domain: "laravel.com", fallback: "assets/img/icons/laravel.svg" },
  { name: "Tailwind CSS", domain: "tailwindcss.com", fallback: "assets/img/icons/tailwindcss.svg" },
  { name: "Python", domain: "python.org", fallback: "assets/img/icons/python.svg" },
  { name: "Docker", domain: "docker.com", fallback: "assets/img/icons/docker.svg" },
  { name: "Linux", domain: "kernel.org", fallback: "assets/img/icons/linux.svg" }
];

function getToolIcon(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

// Expose globally for modular usage across components
window.tools = tools;
window.toolsConfig = tools;
window.getToolIcon = getToolIcon;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });

    if (closeMobileMenu) {
      closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  // Active Navbar Indicator on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-cyan-400', 'font-semibold');
          link.classList.add('text-slate-300');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-cyan-400', 'font-semibold');
            link.classList.remove('text-slate-300');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // Project Details Modal Data (Real Projects from D:/Projeck-WebApp, D:/exambro, D:/website_portofolio)
  const projectsData = {
    exambro: {
      title: "ExamBro — CBT Digital Examination",
      subtitle: "Secure Computer-Based Testing Platform & Android Client",
      category: "Web & Mobile App • Cyber Defense",
      stack: ["Next.js", "React", "PostgreSQL", "Android APK", "Tailwind CSS", "TypeScript"],
      description: "Sistem ujian digital berbasis web terintegrasi dengan ExamBro Android Client anti-curang untuk Madrasah Aliyah Al Jauharatunnaqiyah. Mengamankan integritas pelaksanaan ujian melalui lock browser environment, token session guard, dan sistem multi-role bertingkat.",
      features: [
        "Anti-Cheating Lock Browser Client untuk Android & Web",
        "Multi-role RBAC: Super Admin, Admin Madrasah, Guru, dan Siswa",
        "PostgreSQL database cluster untuk concurrency ratusan siswa bersamaan",
        "Real-time token validation dan automated exam timer lock"
      ],
      metrics: "Mampu melayani sesi ujian digital sekolah dengan response time di bawah 200ms secara stabil.",
      link: "https://github.com/ard34",
      image: "assets/img/projects/exambro.jpg"
    },
    koprasi: {
      title: "Koperasi Santri — SantriWallet",
      subtitle: "Cashless Payment Ecosystem & POS Web Admin",
      category: "Fintech & Security Operations",
      stack: ["Web Admin POS", "Android APK", "REST API", "MySQL", "RBAC", "PHP"],
      description: "Ekosistem keuangan digital dan pembayaran nirsentuh (cashless) pesantren. Menggabungkan aplikasi kasir POS, top-up saldo santri, pencatatan transaksi audit-trail, serta standar operasional keamanan (Threat Modeling & Incident Response SOP).",
      features: [
        "Sistem pembayaran nirsentuh (Cashless) & Top-up saldo santri",
        "POS Kasir cepat dengan slip transaksi dan daily cash closing SOP",
        "Kontrol keamanan ketat berstandar Threat Model & Card Lost Incident Handling",
        "Laporan mutasi keuangan real-time dan rekonsiliasi kas terintegrasi"
      ],
      metrics: "Mampu memproses transaksi kasir POS secara instan dengan verifikasi PIN dan zero double-spend error.",
      link: "https://github.com/ard34",
      image: "assets/img/projects/koprasi.jpg"
    },
    tokoonline: {
      title: "BBn Muslim — Toko Online & Inventory",
      subtitle: "Smart E-Commerce & Automated Stock Engine",
      category: "Web Development & E-Commerce",
      stack: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL", "Blade"],
      description: "Platform toko online dan manajemen inventaris cerdas. Menyediakan katalog produk multi-varian, sistem mutasi dan reservasi stok otomatis saat checkout, keranjang belanja interaktif, serta portal manajemen order admin.",
      features: [
        "Smart Inventory: mutasi stok otomatis & reservation hold saat order",
        "Manajemen katalog produk multi-varian (ukuran, warna, kategori)",
        "Keranjang belanja interaktif berbasis Alpine.js dengan kalkulasi real-time",
        "Role-Based Access Control (RBAC) untuk manajemen operasional admin"
      ],
      metrics: "Arsitektur database teroptimasi dengan query indexing untuk menangani ribuan SKU produk.",
      link: "https://github.com/ard34",
      image: "assets/img/projects/tokoonline.jpg"
    },
    bbndigital: {
      title: "BBN Digital Forge",
      subtitle: "Digital Service Platform & Web Development Engine",
      category: "Web Development",
      stack: ["Laravel 11", "Tailwind CSS", "Filament 3", "MySQL", "Alpine.js"],
      description: "Platform digital terpadu untuk agensi kreatif dan pengembangan aplikasi web. Menyediakan sistem client onboarding, quotation generator otomatis, project tracker real-time, dan portal pembayaran terintegrasi dengan arsitektur backend yang aman.",
      features: [
        "Role-Based Access Control (RBAC) yang ketat untuk multi-tenant",
        "Automated sanitization & CSRF protection pada semua payload form",
        "Integrasi payment gateway lokal dengan webhook verification terenkripsi",
        "Dashboard analitik performa proyek berbasis Filament"
      ],
      metrics: "Telah melayani 15+ klien UMKM & korporasi dengan uptime 99.9%.",
      link: "https://github.com/ard34",
      image: "assets/img/projects/bbndigital.jpg"
    },
    wazuh: {
      title: "Wazuh Monitoring & SIEM",
      subtitle: "Enterprise Threat Detection & Log Analysis System",
      category: "SOC & Security Operations",
      stack: ["Docker", "Wazuh 4.8", "Ubuntu Linux", "Elasticsearch", "Kibana"],
      description: "Implementasi sistem SIEM (Security Information and Event Management) dan XDR berbasis Wazuh di lingkungan kontainer Docker. Dikonfigurasi untuk mendeteksi brute-force attack, file integrity monitoring (FIM), dan compliance audit.",
      features: [
        "Integrasi agent Wazuh pada multi-node server Linux & Windows",
        "Custom rule detection untuk percobaan eksploitasi web (SQLi, XSS, LFI)",
        "Telegram & Slack bot alert otomatis untuk alert severity tinggi (Level 10+)",
        "Visualisasi dashboard log terpusat dengan filter timeline mendalam"
      ],
      metrics: "Berhasil mengidentifikasi dan memitigasi lebih dari 1.200 upaya unauthorized SSH probe per minggu.",
      link: "https://github.com/ard34",
      image: "assets/img/projects/wazuh.jpg"
    },
    loganalysis: {
      title: "Multi-Source Log Analysis",
      subtitle: "Cross-Platform Security Investigation & Incident Response",
      category: "Security Investigation",
      stack: ["Linux", "Log Analysis", "Bash Scripting", "Security Investigation", "Regex"],
      description: "Proyek investigasi forensik dan analisis log komprehensif yang mengumpulkan data dari Apache/Nginx web server logs, auth logs, dan firewall event. Dilengkapi toolkit parser otomatis untuk merekonstruksi rantai serangan penyerang.",
      features: [
        "Automated attack timeline reconstructor dari raw syslog & web access logs",
        "Geographic IP mapping & threat intelligence correlation (AbuseIPDB)",
        "Deteksi anomali volume traffic mencurigakan dengan baseline statistik",
        "Dokumentasi laporan incident response berstandar NIST SP 800-61"
      ],
      metrics: "Mampu membedah 500.000 baris log hanya dalam waktu 45 detik menggunakan pipeline CLI teroptimasi.",
      link: "https://github.com/ard34",
      image: "assets/img/projects/loganalysis.jpg"
    }
  };

  // Modal Elements for Projects
  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalCategory = document.getElementById('modal-category');
  const modalStack = document.getElementById('modal-stack');
  const modalDescription = document.getElementById('modal-description');
  const modalFeatures = document.getElementById('modal-features');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalLink = document.getElementById('modal-link');
  const closeModalBtn = document.getElementById('close-modal-btn');

  // Open Project Modal
  window.openProjectModal = function(key) {
    window.currentProjectKey = key;
    const baseData = projectsData[key];
    if (!baseData || !modal) return;

    const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'id';
    const localized = (window.bilingualProjects && window.bilingualProjects[lang] && window.bilingualProjects[lang][key]) 
      ? window.bilingualProjects[lang][key] 
      : baseData;

    const data = { ...baseData, ...localized };

    if (modalImage && data.image) { modalImage.src = data.image; }
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalCategory.textContent = data.category;
    modalDescription.textContent = data.description;
    modalMetrics.textContent = data.metrics;
    modalLink.setAttribute('href', data.link);

    modalStack.innerHTML = data.stack.map(tech => 
      `<span class="px-2.5 py-1 text-xs rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 font-mono-cyber">${tech}</span>`
    ).join('');

    modalFeatures.innerHTML = data.features.map(f => 
      `<li class="flex items-start gap-2 text-sm text-slate-300">
        <i data-lucide="check-circle" class="w-4 h-4 text-cyan-400 mt-1 shrink-0"></i>
        <span>${f}</span>
      </li>`
    ).join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');

    if (window.lucide) lucide.createIcons();
  };

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  // ==========================================
  // CERTIFICATES DYNAMIC MANAGER & INPUT SYSTEM
  // ==========================================

  // Full Master Collection: 31 Verified Certificates & Awards from Riski's Official Google Drive
  const defaultCertificates = [
  {
    "id": "surosowan-cyber-academy-2024",
    "title": "Pelatihan Cyber Security Academy Surosowan Cyber 2024",
    "issuer": "Komunitas Surosowan Cyber",
    "category": "Cyber Defense",
    "date": "2024",
    "fullDate": "26 Oktober 2024",
    "credId": "SUROSOWAN-ACADEMY-2024",
    "fileUrl": "sertifikat/12. Riski Ardiansyah.png",
    "verifyUrl": "sertifikat/12. Riski Ardiansyah.png",
    "gdriveUrl": "sertifikat/12. Riski Ardiansyah.png",
    "image": "sertifikat/thumbnails/thumb_01.jpg",
    "desc": "Telah menyelesaikan pelatihan intensif Cyber Security pada program Academy Surosowan Cyber 2024 yang dilaksanakan pada tanggal 07, 14, 21, dan 28 September 2024 di Serang. Ditandatangani oleh Rifki Nugraha S.T., M.Kom (Ketua Umum) dan Ibnu Fachrizal (Mentor Cyber Security).",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "rich-innovation-konseling-2025",
    "title": "Kajian Konseling & Bedah Buku 160 Teknik Konseling",
    "issuer": "Komunitas Belajar Ilmu Psikologi & Rich Innovation Training Center",
    "category": "Training",
    "date": "2025",
    "fullDate": "Maret 2025",
    "credId": "IZIN LKP: 421.9/0052KUR/DMPTSP/VI/2021 | NPSN: K9997270",
    "fileUrl": "sertifikat/24.png",
    "verifyUrl": "sertifikat/24.png",
    "gdriveUrl": "sertifikat/24.png",
    "image": "sertifikat/thumbnails/thumb_02.jpg",
    "desc": "Telah mengikuti Kajian Konseling Program Ramadhan & Bedah Buku 160 Teknik Konseling yang diselenggarakan oleh Komunitas Belajar Ilmu Psikologi (BIP) Rich Innovation Training Center pada Maret 2025. Ditandatangani oleh Yuli Prahmawati (Manajemen) dan Richad D.S. Afandi, S.Psi, M.Pd, CCH, CHT, CI (CEO & Founder BIP).",
    "color": "blue",
    "isDefault": true
  },
  {
    "id": "course-net-ethical-hacking-2024",
    "title": "Teknik Ethical Hacking dan Mengatasi Peretasan IT",
    "issuer": "Course-Net Indonesia (Diverifikasi oleh Prakerja)",
    "category": "Red Team",
    "date": "2024",
    "fullDate": "26 April 2024",
    "credId": "2404/PK-00227",
    "fileUrl": "sertifikat/CompletionCertificateRiski Ardiansyah-108715.pdf",
    "verifyUrl": "sertifikat/CompletionCertificateRiski Ardiansyah-108715.pdf",
    "gdriveUrl": "sertifikat/CompletionCertificateRiski Ardiansyah-108715.pdf",
    "image": "sertifikat/thumbnails/thumb_03.jpg",
    "desc": "Sertifikat Penyelesaian pelatihan 15 Jam berstandar SKKNI No. 391 Tahun 2020 (Security Operations Center): Mengkomunikasikan Penanganan Insiden Keamanan Siber & Krisis, Deteksi Kerentanan Aset TI, Analisis Threat Intelligence perimeter, Analisis Insiden Siber untuk Kendali, dan Penyusunan Prosedur Penanganan Insiden. Ditandatangani oleh Fransiskus Alvin Winata, S.Kom., CCNA, CCNP, CEH, CEI.",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "nurtanio-ai-cybersecurity-2024",
    "title": "Tantangan dan Strategi Menghadapi Perkembangan AI dan Keamanan Siber di Era Digital",
    "issuer": "Fakultas Ilmu Komputer dan Informatika Universitas Nurtanio Bandung",
    "category": "Cyber Defense",
    "date": "2024",
    "fullDate": "04 Desember 2024",
    "credId": "Nomor: 24XII04FIKI-380",
    "fileUrl": "sertifikat/E-Certificate 380.png",
    "verifyUrl": "sertifikat/E-Certificate 380.png",
    "gdriveUrl": "sertifikat/E-Certificate 380.png",
    "image": "sertifikat/thumbnails/thumb_04.jpg",
    "desc": "Sertifikat Penghargaan sebagai Peserta Webinar Nasional tema 'Tantangan dan Strategi Menghadapi Perkembangan Teknologi Artificial Intelligence dan Keamanan Siber di Era Digital' (Bandung, 04 Desember 2024). Ditandatangani oleh Rektor UNUR MARSMA TNI Prof. Dr. Ir. Rudy A.G. Gultom, M.Sc., CEH., CIQaR., IPM., ASEAN Eng. dan Dekan FIKI Dr. Samsul Budiarto, S.T., M.T.",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "digicode-intro-penetration-testing-2024",
    "title": "Introduction to Penetration Testing + Special Demo Pentest",
    "issuer": "DigiCode (PT Transformasi Digital Indonesia)",
    "category": "Red Team",
    "date": "2024",
    "fullDate": "15 November 2024",
    "credId": "DIGICODE-PENTEST-2024",
    "fileUrl": "sertifikat/E-Certificate Riski Ardiansyah  Webinar Red Team' dengan Anda.pdf",
    "verifyUrl": "sertifikat/E-Certificate Riski Ardiansyah  Webinar Red Team' dengan Anda.pdf",
    "gdriveUrl": "sertifikat/E-Certificate Riski Ardiansyah  Webinar Red Team' dengan Anda.pdf",
    "image": "sertifikat/thumbnails/thumb_05.jpg",
    "desc": "Certificate of Participation: Telah menghadiri live webinar dan live demonstration 'Introduction to Penetration Testing + Special Demo Pentest' yang diselenggarakan oleh DigiCode (PT Transformasi Digital Indonesia) pada 15 November 2024. Dibimbing langsung oleh Asep Saepuddin (Mentor & Praktisi Red Team Cyber Security).",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "wimisec-fundamental-it-security",
    "title": "Fundamental IT Security",
    "issuer": "WIMI-SEC",
    "category": "Cyber Defense",
    "date": "2024",
    "fullDate": "2024",
    "credId": "WMS-1795",
    "fileUrl": "sertifikat/Fundamental IT Security-Riski Ardiansyah (1).png",
    "verifyUrl": "sertifikat/Fundamental IT Security-Riski Ardiansyah (1).png",
    "gdriveUrl": "sertifikat/Fundamental IT Security-Riski Ardiansyah (1).png",
    "image": "sertifikat/thumbnails/thumb_06.jpg",
    "desc": "Telah mengikuti pelatihan Fundamental IT Security WIMI-SEC: Mempelajari cara kerja dan tanggung jawab seorang IT Security professional dalam mitigasi ancaman serta dasar-dasar teknik ethical hacking. Ditandatangani oleh Winardi Adji Prasetyo, S.Kom., CEH, CHFI (CEO & Founder) dan Mardina Arsita.",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "jadihacker-digital-forensics-101",
    "title": "Digital Forensics 101",
    "issuer": "JadiHacker",
    "category": "Cyber Defense",
    "date": "2024",
    "fullDate": "13 Desember 2024",
    "credId": "JH-DF101-2024",
    "fileUrl": "sertifikat/JH - Sertifikat Event Digital Forensics 101 - (100) (1).pdf",
    "verifyUrl": "sertifikat/JH - Sertifikat Event Digital Forensics 101 - (100) (1).pdf",
    "gdriveUrl": "sertifikat/JH - Sertifikat Event Digital Forensics 101 - (100) (1).pdf",
    "image": "sertifikat/thumbnails/thumb_07.jpg",
    "desc": "Certificate of Appreciation atas partisipasi dalam event 'Digital Forensics 101' di Jakarta, 13 Desember 2024. Mempelajari metodologi investigasi digital forensics, penanganan barang bukti elektronik, analisis memori dan jejak peretasan. Ditandatangani oleh Hansen Gianto (CEO of JadiHacker).",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "growia-dasar-software-tester",
    "title": "Dasar-Dasar Pengujian Perangkat Lunak",
    "issuer": "Growia Indonesia",
    "category": "Training",
    "date": "2024",
    "fullDate": "Desember 2024",
    "credId": "GROWIA-QA-2024",
    "fileUrl": "sertifikat/RISKI ARDIANSYAH _SOFTWARE TESTER CERTIFICATE_GROWIA.pdf",
    "verifyUrl": "sertifikat/RISKI ARDIANSYAH _SOFTWARE TESTER CERTIFICATE_GROWIA.pdf",
    "gdriveUrl": "sertifikat/RISKI ARDIANSYAH _SOFTWARE TESTER CERTIFICATE_GROWIA.pdf",
    "image": "sertifikat/thumbnails/thumb_08.jpg",
    "desc": "Berhasil menyelesaikan webinar dan memperoleh pengetahuan dasar tentang pengujian perangkat lunak (software testing, perancangan test case, pelaporan bug, dan lifecycle quality assurance) bersama pembicara Risdian Ciptayadi pada Desember 2024.",
    "color": "blue",
    "isDefault": true
  },
  {
    "id": "komdigi-ai-digital-marketing-2025",
    "title": "Pemasaran Digital Dengan Kecerdasan Buatan (AI) untuk Wirausaha",
    "issuer": "Kementerian Komdigi RI (Digitalent - DEA) & BPSDMP Bandung",
    "category": "Training",
    "date": "2025",
    "fullDate": "21 Juli 2025",
    "credId": "196108591140-24/DEA/BLSDM.Komdigi/2025",
    "fileUrl": "sertifikat/Riski Ardiansyah (1).pdf",
    "verifyUrl": "sertifikat/Riski Ardiansyah (1).pdf",
    "gdriveUrl": "sertifikat/Riski Ardiansyah (1).pdf",
    "image": "sertifikat/thumbnails/thumb_09.jpg",
    "desc": "Sertifikat Pelatihan 7 JP Digital Entrepreneurship Academy (DEA) - Digital Talent Scholarship 2025: Memahami AI untuk Pemasaran Digital, Riset Pasar & Persona Buyer dengan AI, Pembuatan Konten AI (Teks/Gambar/Video), Optimasi Kampanye & Analisis Data AI, dan Rencana Aksi AI Expert. Ditandatangani elektronik BSrE BSSN oleh Dr. Bonifasius W. Pudjianto (Kepala BPSDM Komdigi).",
    "color": "blue",
    "isDefault": true
  },
  {
    "id": "pkkmb-piksi-panitia-2024",
    "title": "Panitia PKKMB Politeknik Piksi Input Serang 2024/2025",
    "issuer": "BEM Politeknik Piksi Input Serang",
    "category": "Achievement",
    "date": "2024",
    "fullDate": "08-10 Oktober 2024",
    "credId": "PKKMB-PIS-2024/2025",
    "fileUrl": "sertifikat/Riski Ardiansyah .PDF",
    "verifyUrl": "sertifikat/Riski Ardiansyah .PDF",
    "gdriveUrl": "sertifikat/Riski Ardiansyah .PDF",
    "image": "sertifikat/thumbnails/thumb_10.jpg",
    "desc": "Sertifikat Penghargaan sebagai Panitia dalam kegiatan Pengenalan Kampus Bagi Mahasiswa Baru (PKKMB) Tahun Akademik 2024/2025 Politeknik Piksi Input Serang dengan tema 'Kampus Sehat Bersih Narkoba' (Serang, 08-10 Oktober 2024). Ditandatangani oleh Presma BEM Rusdi Maulana, Kemahasiswaan Ikbal Nidauddin, S.Kom., M.Kom, dan Ketua Pelaksana Riyan Apriyani.",
    "color": "emerald",
    "isDefault": true
  },
  {
    "id": "id-networkers-bootcamp-3bulan",
    "title": "Beasiswa Bootcamp Online Cyber Security Bootcamp (Tiga Bulan)",
    "issuer": "ID-Networkers (IDN.ID)",
    "category": "Cyber Defense",
    "date": "2024",
    "fullDate": "2024",
    "credId": "IDN-CSB3M-2024",
    "fileUrl": "sertifikat/Riski Ardiansyah Sertifikat Bootcamp Cyber Security 3 Bulan.pdf",
    "verifyUrl": "sertifikat/Riski Ardiansyah Sertifikat Bootcamp Cyber Security 3 Bulan.pdf",
    "gdriveUrl": "sertifikat/Riski Ardiansyah Sertifikat Bootcamp Cyber Security 3 Bulan.pdf",
    "image": "sertifikat/thumbnails/thumb_11.jpg",
    "desc": "Atas partisipasinya sebagai peserta Beasiswa Bootcamp Online 'Cyber Security Bootcamp' yang diadakan oleh ID-Networkers selama Tiga Bulan. Mempelajari arsitektur keamanan jaringan, vulnerability assessment, Linux security hardening, simulasi lab CTF, dan incident monitoring. Ditandatangani oleh Dedi Gunawan, M.T., CCIE (CEO ID-Networkers).",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "merdeka-siber-soc-opensource-2024",
    "title": "SOC Open Source untuk Keamanan Siber Modern",
    "issuer": "Merdeka Siber",
    "category": "SOC",
    "date": "2024",
    "fullDate": "22 Desember 2024",
    "credId": "MS-WBRB131-2024-076",
    "fileUrl": "sertifikat/Riski Ardiansyah-1.jpg",
    "verifyUrl": "sertifikat/Riski Ardiansyah-1.jpg",
    "gdriveUrl": "sertifikat/Riski Ardiansyah-1.jpg",
    "image": "sertifikat/thumbnails/thumb_12.jpg",
    "desc": "Certificate of Appreciation for Being The Participant in Sharing Session 'SOC OPEN SOURCE UNTUK KEAMANAN SIBER MODERN: Solusi Bangun Security Operation Center Tanpa Mahal' (22 Desember 2024). Speaker: Dedi Bagus Umbara (IT Security Specialist, MTCNA, MTCRE, CSCU, eJPT, eCPPT). Koordinator Merdeka Siber: Leo Waldi.",
    "color": "cyan",
    "isDefault": true
  },
  {
    "id": "merdeka-siber-bug-bounty-exploitation",
    "title": "Understanding Exploitation: Bug Bounty Method",
    "issuer": "Merdeka Siber",
    "category": "Red Team",
    "date": "2024",
    "fullDate": "08 Desember 2024",
    "credId": "MS-WBRB122-2024-038",
    "fileUrl": "sertifikat/Riski Ardiansyah.jpg",
    "verifyUrl": "sertifikat/Riski Ardiansyah.jpg",
    "gdriveUrl": "sertifikat/Riski Ardiansyah.jpg",
    "image": "sertifikat/thumbnails/thumb_13.jpg",
    "desc": "Certificate of Appreciation for Being The Participant in Sharing Session 'UNDERSTANDING EXPLOITATION: BUG BOUNTY METHOD' (08 Desember 2024). Speaker: Alessandro Rumampuk (Top Researcher alibaba.com and Google 2021). Membahas taktik eksploitasi web application dan alur pelaporan bug bounty. Koordinator: Leo Waldi.",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "idx-sekolah-pasar-modal-2024",
    "title": "Sekolah Pasar Modal Bursa Efek Indonesia",
    "issuer": "PT Bursa Efek Indonesia (IDX) & OJK, IDClear, KSEI",
    "category": "Training",
    "date": "2024",
    "fullDate": "23 Oktober 2024",
    "credId": "IDX-SPM-BANTEN-2024",
    "fileUrl": "sertifikat/Riski Ardiansyah.pdf",
    "verifyUrl": "sertifikat/Riski Ardiansyah.pdf",
    "gdriveUrl": "sertifikat/Riski Ardiansyah.pdf",
    "image": "sertifikat/thumbnails/thumb_14.jpg",
    "desc": "Telah mengikuti Sekolah Pasar Modal (SPM) pada tanggal 23 Oktober 2024 yang diselenggarakan oleh PT Bursa Efek Indonesia didukung oleh IDClear, KSEI, dan SIPF. Ditandatangani oleh Muhammad Fadli (Kepala Wilayah Banten Kantor Perwakilan BEI Banten).",
    "color": "blue",
    "isDefault": true
  },
  {
    "id": "surosowan-berkarir-teknologi-2024",
    "title": "Tips dan Trik Berkarir di Bidang Teknologi Masa Kini",
    "issuer": "Komunitas Surosowan Cyber",
    "category": "Training",
    "date": "2024",
    "fullDate": "31 Maret 2024",
    "credId": "SUROSOWAN/01/2024/001",
    "fileUrl": "sertifikat/Riski Ardiansyah.png",
    "verifyUrl": "sertifikat/Riski Ardiansyah.png",
    "gdriveUrl": "sertifikat/Riski Ardiansyah.png",
    "image": "sertifikat/thumbnails/thumb_15.jpg",
    "desc": "Telah berpartisipasi sebagai PESERTA dalam acara Buka Bersama 2024 'Tips dan Trik Berkarir di Bidang Teknologi Masa Kini' yang diadakan oleh Komunitas Surosowan Cyber di Serang, 31 Maret 2024. Ditandatangani oleh Rifki Nugraha (Ketua Komunitas) dan Daru Anugrah S (Ketua Pelaksana).",
    "color": "blue",
    "isDefault": true
  },
  {
    "id": "id-networkers-bootcamp-1bulan",
    "title": "Beasiswa Bootcamp Online Cyber Security Bootcamp (Satu Bulan)",
    "issuer": "ID-Networkers (IDN.ID)",
    "category": "Cyber Defense",
    "date": "2024",
    "fullDate": "2024",
    "credId": "IDN-CSB1M-2024",
    "fileUrl": "sertifikat/Riski Arsiansyah Sertifikat Bootcamp Cyber 1 Bulan.pdf",
    "verifyUrl": "sertifikat/Riski Arsiansyah Sertifikat Bootcamp Cyber 1 Bulan.pdf",
    "gdriveUrl": "sertifikat/Riski Arsiansyah Sertifikat Bootcamp Cyber 1 Bulan.pdf",
    "image": "sertifikat/thumbnails/thumb_16.jpg",
    "desc": "Atas partisipasinya sebagai peserta Beasiswa Bootcamp Online 'Cyber Security Bootcamp' yang diadakan oleh ID-Networkers selama Satu Bulan intensif. Mempelajari konsep fundamental keamanan siber, port scanning, dan reconnaissance. Ditandatangani oleh Dedi Gunawan, M.T., CCIE (CEO of ID-Networkers).",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "ksj-potensi-diri-organisasi-2022",
    "title": "Tumbuh Kembangkan Potensi Diri Melalui Komunitas/Organisasi",
    "issuer": "Komunitas Sang Juara (KSJ)",
    "category": "Achievement",
    "date": "2022",
    "fullDate": "11 November 2022",
    "credId": "Nomor: 111/B/WEBINAR/KSJ/XI/2022",
    "fileUrl": "sertifikat/SAVE_20221117_114400.jpg",
    "verifyUrl": "sertifikat/SAVE_20221117_114400.jpg",
    "gdriveUrl": "sertifikat/SAVE_20221117_114400.jpg",
    "image": "sertifikat/thumbnails/thumb_17.jpg",
    "desc": "Sebagai PESERTA dalam kegiatan Webinar Nasional tema 'Tumbuh Kembangkan Potensi Diri Melalui Komunitas/Organisasi' pada hari Jum'at 11 November 2022 via Google Meet. Ditandatangani oleh Mia Faresa (Ketua Pelaksana), Wahardi (Ketua Umum), dan Moh. Ilham, S.Sos.I., MM (Founder Komunitas Sang Juara).",
    "color": "emerald",
    "isDefault": true
  },
  {
    "id": "jadihacker-ghosts-database-sqli",
    "title": "Ghosts in the Database",
    "issuer": "JadiHacker",
    "category": "Red Team",
    "date": "2024",
    "fullDate": "05 November 2024",
    "credId": "JH-GITD-2024",
    "fileUrl": "sertifikat/Sertifikat Event JH - GHOSTS IN THE DATABASE_49-49' dengan Anda.pdf",
    "verifyUrl": "sertifikat/Sertifikat Event JH - GHOSTS IN THE DATABASE_49-49' dengan Anda.pdf",
    "gdriveUrl": "sertifikat/Sertifikat Event JH - GHOSTS IN THE DATABASE_49-49' dengan Anda.pdf",
    "image": "sertifikat/thumbnails/thumb_18.jpg",
    "desc": "Certificate of Appreciation JadiHacker for the Participation in 'GHOSTS IN THE DATABASE' (Jakarta, 05 November 2024). Mempelajari teknik SQL Injection mendalam, bypass otentikasi basis data, dan teknik mitigasi serangan database. Ditandatangani oleh Hansen Gianto (CEO of JadiHacker).",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "jadihacker-mini-class-ceh",
    "title": "Mini Class CEH (Certified Ethical Hacker)",
    "issuer": "JadiHacker",
    "category": "Red Team",
    "date": "2024",
    "fullDate": "27 September 2024",
    "credId": "JH-CEH-2024",
    "fileUrl": "sertifikat/Sertifikat Mini Class CEH (69).pdf",
    "verifyUrl": "sertifikat/Sertifikat Mini Class CEH (69).pdf",
    "gdriveUrl": "sertifikat/Sertifikat Mini Class CEH (69).pdf",
    "image": "sertifikat/thumbnails/thumb_19.jpg",
    "desc": "Certificate of Appreciation JadiHacker for the Participation in 'MINI CLASS CEH' (Jakarta, 27 September 2024). Mempelajari alur ethical hacking sesuai standar CEH: network scanning, banner grabbing, privilege escalation, dan wireless security. Ditandatangani oleh Hansen Gianto (CEO of JadiHacker).",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "udemy-master-soc-wazuh-splunk",
    "title": "Professional SOC & SIEM Course : Master Wazuh and Splunk",
    "issuer": "Udemy (Instruktur: Arunnachalam Shanmugaraajan)",
    "category": "SOC",
    "date": "2026",
    "fullDate": "5 November 2026",
    "credId": "UC-13224886-1ded-4230-b0e9-5ed3959f5939 | Ref: 0004",
    "fileUrl": "sertifikat/Sertifikat penyelesaian Professional SOC & SIEM Course _ Master Wazuh and Splunk (1).pdf",
    "verifyUrl": "https://ude.my/UC-13224886-1ded-4230-b0e9-5ed3959f5939",
    "gdriveUrl": "sertifikat/Sertifikat penyelesaian Professional SOC & SIEM Course _ Master Wazuh and Splunk (1).pdf",
    "image": "sertifikat/thumbnails/thumb_20.jpg",
    "desc": "Sertifikat Penyelesaian resmi Udemy (Durasi: 1.5 total jam) materi komprehensif implementasi Security Operations Center: instalasi dan konfigurasi Wazuh EDR Manager, deployment Wazuh Agent di Windows/Linux, setup Splunk SIEM, integrasi visualisasi dashboard, dan alert rule correlation.",
    "color": "cyan",
    "isDefault": true
  },
  {
    "id": "piksi-webinar-literasi-keuangan-2023",
    "title": "Webinar Nasional: Literasi Keuangan Perempuan melalui Pendidikan",
    "issuer": "BEM Politeknik Piksi Input Serang",
    "category": "Achievement",
    "date": "2023",
    "fullDate": "31 Mei 2023",
    "credId": "057/Pan-Webinar Nasional/BEM.PIS/II/2023",
    "fileUrl": "sertifikat/Sertifikat_Riski Ardiansyah .pdf",
    "verifyUrl": "sertifikat/Sertifikat_Riski Ardiansyah .pdf",
    "gdriveUrl": "sertifikat/Sertifikat_Riski Ardiansyah .pdf",
    "image": "sertifikat/thumbnails/thumb_21.jpg",
    "desc": "Sertifikat Atas partisipasinya sebagai PESERTA dalam Webinar Nasional BEM Politeknik Piksi Input Serang bertema 'Literasi Keuangan Perempuan melalui Pendidikan kunci masa depan gemilang' (Serang, 31 Mei 2023). Ditandatangani oleh Ketua BEM Kiki Cahyono Putro, Kemahasiswaan Ikbal Nidauddin M.Kom, dan Ketua Pelaksana Leni.",
    "color": "emerald",
    "isDefault": true
  },
  {
    "id": "bssn-vvip-jateng-2026",
    "title": "BSSN VVIP Program Regional Jawa Tengah Tahun 2026",
    "issuer": "Badan Siber dan Sandi Negara (BSSN) & Pemprov Jawa Tengah",
    "category": "Red Team",
    "date": "2026",
    "fullDate": "Mei 22, 2025",
    "credId": "BSSN-VVIP-JTG-2026",
    "fileUrl": "sertifikat/Sertifikat_VVIP Program Regional Jateng 2026_Riski Ardiansyah_sign.pdf",
    "verifyUrl": "sertifikat/Sertifikat_VVIP Program Regional Jateng 2026_Riski Ardiansyah_sign.pdf",
    "gdriveUrl": "sertifikat/Sertifikat_VVIP Program Regional Jateng 2026_Riski Ardiansyah_sign.pdf",
    "image": "sertifikat/thumbnails/thumb_22.jpg",
    "desc": "Certificate of Appreciation BSSN: Diberikan atas partisipasi aktif dan kontribusinya dalam mengidentifikasi kerentanan pada BSSN VVIP Program (Voluntary Vulnerability Identification and Protection Program) Regional Jawa Tengah Tahun 2026. Sebagai #HackerBaik #JagaRuangSiber, keberhasilan menemukan kerentanan berdampak nyata bagi penguatan keamanan sistem elektronik pemerintah dan kedaulatan ruang siber RI. Ditandatangani elektronik BSrE BSSN oleh Andi Yusuf, M.T. (Direktur Operasi Keamanan Siber BSSN).",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "idx-virtual-trading-competition-2026",
    "title": "Virtual Trading Competition 2026 Powered by IDX Mobile",
    "issuer": "Pasar Modal Indonesia (IDX, OJK, IDClear, KSEI) & Galeri Investasi PIS",
    "category": "Achievement",
    "date": "2026",
    "fullDate": "4 September 2026",
    "credId": "VTC-IDX-2026",
    "fileUrl": "sertifikat/VTC_BEI.pdf",
    "verifyUrl": "sertifikat/VTC_BEI.pdf",
    "gdriveUrl": "sertifikat/VTC_BEI.pdf",
    "image": "sertifikat/thumbnails/thumb_23.jpg",
    "desc": "Certificate of Appreciation dipersembahkan dengan bangga kepada Riski Ardiansyah (Galeri Investasi Politeknik Piksi Input Serang) as Participant dalam Virtual Trading Competition 2026 Powered by IDX Mobile dalam rangka HUT Ke-49 Pasar Modal Indonesia (Jakarta, 4 September 2026). Ditandatangani oleh Dharma Setyadi (Ketua HUT PM), Iding Pardi, Satya Birawa, dan Imelda Sebayang.",
    "color": "emerald",
    "isDefault": true
  },
  {
    "id": "puisindo-lomba-puisi-nasional-2025",
    "title": "Lomba Menulis Puisi Tingkat Nasional Bertema Hampa",
    "issuer": "Puisindo Media",
    "category": "Achievement",
    "date": "2025",
    "fullDate": "11 Pebruari 2025",
    "credId": "NO: LCPN/PEO-03/0225/4708",
    "fileUrl": "sertifikat/ZXX (235).png",
    "verifyUrl": "sertifikat/ZXX (235).png",
    "gdriveUrl": "sertifikat/ZXX (235).png",
    "image": "sertifikat/thumbnails/thumb_24.jpg",
    "desc": "Sertifikat Diberikan Kepada Riski Ardiansyah Sebagai Peserta Lomba Menulis Puisi Tingkat Nasional Bertema Hampa Yang Diselenggarakan Oleh Puisindo Media di Malang, 11 Pebruari 2025. Ditandatangani oleh Nurul Azizah (Founder Puisindo) dan Alifa Putri (Ketua Pelaksana).",
    "color": "emerald",
    "isDefault": true
  },
  {
    "id": "ccep-cybersecurity-educator-2026",
    "title": "Certified Cybersecurity Educator Professional (CCEP)",
    "issuer": "Red Team Leaders",
    "category": "Cyber Defense",
    "date": "2026",
    "fullDate": "August 11, 2026",
    "credId": "2261d1ec337459f0",
    "fileUrl": "sertifikat/certified_certificate (1).pdf",
    "verifyUrl": "https://courses.redteamleaders.com/exam-completion/2261d1ec337459f0",
    "gdriveUrl": "sertifikat/certified_certificate (1).pdf",
    "image": "sertifikat/thumbnails/thumb_25.jpg",
    "desc": "This is to acknowledge that Riski Ardiansyah successfully completed all the requirements and passed the exam Certified Cybersecurity Educator Professional (CCEP) from Red Team Leaders (Issued: August 11, 2026). Validated online at courses.redteamleaders.com/exam-completion/2261d1ec337459f0. Signed by Joas A Santos (Founder and Instructor).",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "crtom-red-team-operations-2025",
    "title": "Certified Red Team Operations Management (CRTOM)",
    "issuer": "Red Team Leaders",
    "category": "Red Team",
    "date": "2025",
    "fullDate": "December 28, 2025",
    "credId": "6b09ba7c374b4711",
    "fileUrl": "sertifikat/certified_red_certificate (1).pdf",
    "verifyUrl": "https://courses.redteamleaders.com/exam-completion/6b09ba7c374b4711",
    "gdriveUrl": "sertifikat/certified_red_certificate (1).pdf",
    "image": "sertifikat/thumbnails/thumb_26.jpg",
    "desc": "This is to acknowledge that Riski Ardiansyah successfully completed all the requirements and passed the exam Certified Red Team Operations Management (CRTOM) from Red Team Leaders (Issued: December 28, 2025). Validated online at courses.redteamleaders.com/exam-completion/6b09ba7c374b4711. Signed by Joas A Santos (Founder and Instructor).",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "foundations-log-analysis-cyber-defense",
    "title": "Foundations of Log Analysis for Cyber Defense",
    "issuer": "Red Team Leaders",
    "category": "SOC",
    "date": "2026",
    "fullDate": "November 8, 2026",
    "credId": "9fb783bc4312691d",
    "fileUrl": "sertifikat/foundations_certificate (1) (1).pdf",
    "verifyUrl": "https://courses.redteamleaders.com/completion/9fb783bc4312691d",
    "gdriveUrl": "sertifikat/foundations_certificate (1) (1).pdf",
    "image": "sertifikat/thumbnails/thumb_27.jpg",
    "desc": "Certificate of Completion presented to Riski Ardiansyah for successfully completing 'Foundations of Log Analysis for Cyber Defense' from Red Team Leaders (Issued: November 8, 2026). Validated at courses.redteamleaders.com/completion/9fb783bc4312691d. Signed by Joas A Santos (Founder and Instructor).",
    "color": "cyan",
    "isDefault": true
  },
  {
    "id": "introduction-bug-bounty-rtl",
    "title": "Introduction to Bug Bounty",
    "issuer": "Red Team Leaders",
    "category": "Red Team",
    "date": "2026",
    "fullDate": "November 3, 2026",
    "credId": "6d626c01ad0faa32",
    "fileUrl": "sertifikat/introduction_certificate (1).pdf",
    "verifyUrl": "https://courses.redteamleaders.com/completion/6d626c01ad0faa32",
    "gdriveUrl": "sertifikat/introduction_certificate (1).pdf",
    "image": "sertifikat/thumbnails/thumb_28.jpg",
    "desc": "Certificate of Completion presented to Riski Ardiansyah for successfully completing 'Introduction to Bug Bounty' from Red Team Leaders (Issued: November 3, 2026). Validated at courses.redteamleaders.com/completion/6d626c01ad0faa32. Signed by Joas A Santos (Founder and Instructor).",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "purworejo-bssn-kerentanan-siber",
    "title": "Sertifikat VVIP Program (Hunter Id: d.ard)",
    "issuer": "Dinkominfostasandi Kab. Purworejo & BSSN",
    "category": "Red Team",
    "date": "2026",
    "fullDate": "19 Mei 2026",
    "credId": "Nomor: 000.6.1/534.9/2026",
    "fileUrl": "sertifikat/p2_d.ard_Sertifikat Apresiasi.pdf",
    "verifyUrl": "sertifikat/p2_d.ard_Sertifikat Apresiasi.pdf",
    "gdriveUrl": "sertifikat/p2_d.ard_Sertifikat Apresiasi.pdf",
    "image": "sertifikat/thumbnails/thumb_29.jpg",
    "desc": "Sertifikat Diberikan kepada Riski Ardiansyah (Hunter Id: d.ard) Sebagai Pengidentifikasi/Pemberi Rekomendasi dalam kegiatan Program Identifikasi Kerentanan dan Proteksi Secara Sukarela (VVIP Program) terhadap sistem elektronik milik Pemerintah Kabupaten Purworejo yang diselenggarakan oleh Badan Siber dan Sandi Negara (BSSN) periode II dari tanggal 13 s.d. 25 April 2026. Ditandatangani elektronik BSrE BSSN oleh Kepala Dinas Komunikasi, Informatika, Statistik dan Persandian Kab. Purworejo Ganis Pramudito, S.STP., M.Si.",
    "color": "red",
    "isDefault": true
  },
  {
    "id": "surosowan-red-blue-team-2026",
    "title": "Cyber Security Red Team & Blue Team (Sertifikat Peserta)",
    "issuer": "Akademi Surosowan Siber",
    "category": "Cyber Defense",
    "date": "2026",
    "fullDate": "10 Agustus 2026",
    "credId": "No. SSA-2026-VCUD-1B38BB",
    "fileUrl": "sertifikat/sertifikat-Riski-Ardiansyah (1).pdf",
    "verifyUrl": "sertifikat/sertifikat-Riski-Ardiansyah (1).pdf",
    "gdriveUrl": "sertifikat/sertifikat-Riski-Ardiansyah (1).pdf",
    "image": "sertifikat/thumbnails/thumb_30.jpg",
    "desc": "Sertifikat Peserta: Selamat atas partisipasi dalam program Cyber Security Akademi Surosowan Cyber 2026 pada program 'Cyber Security Red Team & Blue Team' yang diterbitkan pada 10 Agustus 2026. Ditandatangani oleh Rama (Ketua Pengajar/Instruktur) dan Hery Firmansyah (Ketua Pelaksana).",
    "color": "purple",
    "isDefault": true
  },
  {
    "id": "surosowan-best-hunter-2026",
    "title": "Best Hunter - Cyber Security Red Team & Blue Team",
    "issuer": "Akademi Surosowan Siber",
    "category": "Achievement",
    "date": "2026",
    "fullDate": "10 Agustus 2026",
    "credId": "No. SSA-2026-VCUD-9AB70F",
    "fileUrl": "sertifikat/sertifikat-Riski-Ardiansyah.pdf",
    "verifyUrl": "sertifikat/sertifikat-Riski-Ardiansyah.pdf",
    "gdriveUrl": "sertifikat/sertifikat-Riski-Ardiansyah.pdf",
    "image": "sertifikat/thumbnails/thumb_31.jpg",
    "desc": "Sertifikat Apresiasi: Apresiasi atas pencapaian luar biasa sebagai 'Best Hunter' dalam program Cyber Security Red Team & Blue Team Akademi Surosowan Cyber 2026 (Salam untuk Sang Pendekar Cyber!). Diterbitkan pada 10 Agustus 2026. Ditandatangani oleh Rama (Ketua Pengajar/Instruktur) dan Hery Firmansyah (Ketua Pelaksana).",
    "color": "emerald",
    "isDefault": true
  },
  {
    "id": "cakra-kariermu-busana-online",
    "title": "Memasarkan Produk Busana secara Online (Sertifikat Penyelesaian)",
    "issuer": "LKP Cakra & Karier.mu (Diverifikasi oleh Prakerja)",
    "category": "Training",
    "date": "2024",
    "fullDate": "17-03-2024",
    "credId": "No. #9473749",
    "fileUrl": "sertifikat/sertifikat-sekolahmu-9473749.pdf",
    "verifyUrl": "sertifikat/sertifikat-sekolahmu-9473749.pdf",
    "gdriveUrl": "sertifikat/sertifikat-sekolahmu-9473749.pdf",
    "image": "sertifikat/thumbnails/thumb_32.jpg",
    "desc": "Sertifikat Penyelesaian LKP Cakra & Karier.mu (Diverifikasi oleh Prakerja): Berhasil menyelesaikan Program dengan predikat Sangat Baik (Durasi Belajar: 15 Jam, Nilai Aktivitas: 80) pada pelatihan 'Memasarkan Produk Busana secara Online'. Standar kompetensi SKKNI No. 16 Tahun 2018 mencakup: interaksi aktif membantu pelanggan belanja ritel, menjual produk & layanan ritel, menambah pelanggan ritel daring, memberdayakan media sosial, dan implementasi aplikasi e-commerce. Ditandatangani oleh Ninik Sutarsih, SE (Pimpinan).",
    "color": "blue",
    "isDefault": true
  }
];

  // Load All Certificates (Default + LocalStorage)
  function getAllCertificates() {
    try {
      const stored = localStorage.getItem('portfolio_user_certificates') || localStorage.getItem('riski_user_certificates');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load certs from localStorage:", e);
    }
    return defaultCertificates;
  }
  const getCertificates = getAllCertificates;
  window.getCertificates = getAllCertificates;
  window.getAllCertificates = getAllCertificates;

  // Render Certificates to Grid
  function renderCertificates() {
    const grid = document.getElementById('certificates-grid');
    if (!grid) return;

    const certs = getAllCertificates();
    grid.innerHTML = certs.map(c => {
      // Color Themes
      let badgeBg = "bg-cyan-950 text-cyan-300 border-cyan-800";
      let borderGlow = "hover:border-cyan-500/50";
      let iconColor = "text-cyan-400";
      let gradBg = "from-cyan-950/40 via-[#0A1222] to-[#101B2D] border-cyan-500/30";

      if (c.color === "red") {
        badgeBg = "bg-red-950 text-red-300 border-red-800";
        borderGlow = "hover:border-red-500/50";
        iconColor = "text-red-400";
        gradBg = "from-red-950/40 via-[#0A1222] to-[#101B2D] border-red-500/30";
      } else if (c.color === "purple") {
        badgeBg = "bg-purple-950 text-purple-300 border-purple-800";
        borderGlow = "hover:border-purple-500/50";
        iconColor = "text-purple-400";
        gradBg = "from-purple-950/40 via-[#0A1222] to-[#101B2D] border-purple-500/30";
      } else if (c.color === "emerald") {
        badgeBg = "bg-emerald-950 text-emerald-300 border-emerald-800";
        borderGlow = "hover:border-emerald-500/50";
        iconColor = "text-emerald-400";
        gradBg = "from-emerald-950/40 via-[#0A1222] to-[#101B2D] border-emerald-500/30";
      } else if (c.color === "blue") {
        badgeBg = "bg-blue-950 text-blue-300 border-blue-800";
        borderGlow = "hover:border-blue-500/50";
        iconColor = "text-blue-400";
        gradBg = "from-blue-950/40 via-[#0A1222] to-[#101B2D] border-blue-500/30";
      }

      // Check if certificate has an uploaded image thumbnail
      let previewVisual = '';
      if (c.image) {
        previewVisual = `
          <div class="h-44 rounded-xl overflow-hidden border border-slate-700/80 bg-[#070D1A] relative group-hover:scale-[1.02] transition flex items-center justify-center">
            <img src="${c.image}" alt="${c.title}" referrerpolicy="no-referrer" loading="lazy" class="w-full h-full object-cover object-top filter contrast-105" onerror="this.onerror=null; this.src='https://placehold.co/600x400/0A1222/0EA5FF?text=Verified+Certificate';">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A1222]/90 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            <span class="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-cyan-300 border border-cyan-800/60 flex items-center gap-1 shadow-md">
              <i data-lucide="shield-check" class="w-3 h-3 text-cyan-400"></i> Dokumen Terverifikasi
            </span>
          </div>
        `;
      } else {
        previewVisual = `
          <div class="h-32 rounded-xl bg-gradient-to-br ${gradBg} border flex items-center justify-center p-3 text-center">
            <div>
              <div class="w-10 h-10 mx-auto rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center ${iconColor} mb-2 shadow-lg">
                <i data-lucide="shield-check" class="w-5 h-5"></i>
              </div>
              <div class="text-xs font-bold text-white font-mono truncate max-w-[200px]">${c.issuer}</div>
              <div class="text-[10px] text-slate-400">${c.category}</div>
            </div>
          </div>
        `;
      }

      return `
        <div class="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 ${borderGlow} transition relative group">
          
          ${!c.isDefault ? `
            <button onclick="deleteUserCert('${c.id}')" title="Hapus Sertifikat Ini" class="user-cert-delete-btn absolute top-4 right-4 z-20 p-1.5 rounded-lg bg-red-950/80 border border-red-500/40 text-red-400 hover:text-white hover:bg-red-800 transition ${isOwnerLoggedIn() ? '' : 'hidden'}">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          ` : ''}

          <div class="space-y-4">
            ${previewVisual}

            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded ${badgeBg} border">${c.category}</span>
                ${c.gdriveUrl ? `<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 flex items-center gap-1"><i data-lucide="cloud" class="w-3 h-3"></i> GDrive</span>` : ''}
                ${!c.isDefault ? `<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">User Added</span>` : ''}
              </div>
              <h3 class="font-bold text-white text-base mt-2 line-clamp-2 leading-snug">${c.title}</h3>
              <p class="text-xs text-slate-400 mt-1">Penyelenggara: <strong class="text-slate-300">${c.issuer}</strong></p>
              <p class="text-[11px] font-mono text-slate-500 mt-0.5">Tahun: ${c.date}</p>
            </div>
          </div>

          <div class="pt-2 flex items-center gap-2">
            <button onclick="openCertModal('${c.id}')" class="flex-1 py-2 rounded-xl outline-btn text-xs font-semibold flex items-center justify-center gap-2 hover:border-cyan-400 transition">
              <i data-lucide="eye" class="w-3.5 h-3.5 text-cyan-400"></i>
              <span>Lihat Detail</span>
            </button>
            <a href="${c.fileUrl || c.verifyUrl || c.gdriveUrl}" target="_blank" rel="noreferrer" title="Buka Dokumen Asli (${c.fileUrl ? c.fileUrl.split('.').pop().toUpperCase() : 'Dokumen'})" class="p-2 rounded-xl bg-[#0A1222] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition">
              <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
            </a>
            <button type="button" onclick="editCertificateFromAdmin('${c.id}')" title="Edit Sertifikat Ini" class="user-cert-edit-btn p-2 rounded-xl bg-pink-950/80 border border-pink-500/40 text-pink-300 hover:text-white transition ${isOwnerLoggedIn() ? '' : 'hidden'}">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  // Open Certificate Detail Visual Modal
  window.openCertModal = function(id) {
    const certs = getAllCertificates();
    const cert = certs.find(c => c.id === id);
    if (!cert) return;

    const modal = document.getElementById('cert-detail-modal');
    if (!modal) return;

    document.getElementById('cert-modal-title').textContent = cert.title;
    document.getElementById('cert-modal-issuer').textContent = cert.issuer;
    document.getElementById('cert-modal-date').textContent = cert.date;
    document.getElementById('cert-modal-category').textContent = cert.category;
    document.getElementById('cert-modal-credid').textContent = cert.credId || 'VERIFIED-OFFICIAL-RECORD';
    document.getElementById('cert-modal-desc').textContent = cert.desc || 'Sertifikasi kredensial terverifikasi untuk Riski Ardiansyah.';

    const imgContainer = document.getElementById('cert-modal-img-container');
    if (cert.image) {
      imgContainer.innerHTML = `
        <div class="rounded-xl overflow-hidden border border-cyan-500/40 bg-black/80 max-h-[420px] flex justify-center p-1">
          <img src="${cert.image}" alt="${cert.title}" referrerpolicy="no-referrer" loading="lazy" class="max-w-full max-h-[420px] object-contain rounded-lg">
        </div>
      `;
      imgContainer.classList.remove('hidden');
    } else {
      imgContainer.innerHTML = '';
      imgContainer.classList.add('hidden');
    }

    const verifyBtn = document.getElementById('cert-modal-verify-btn');
    if (cert.verifyUrl) {
      verifyBtn.setAttribute('href', cert.verifyUrl);
      const docTarget = cert.fileUrl || cert.verifyUrl || cert.gdriveUrl;
      verifyBtn.setAttribute('href', docTarget);
      verifyBtn.innerHTML = `<span>Buka Dokumen Asli (${docTarget.split('.').pop().toUpperCase()})</span><i data-lucide="external-link" class="w-4 h-4"></i>`;
      verifyBtn.classList.remove('hidden');
    } else {
      verifyBtn.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    if (window.lucide) lucide.createIcons();
  };

  window.closeCertModal = function() {
    const modal = document.getElementById('cert-detail-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  // Open / Close Add Certificate Modal
  window.openAddCertModal = function() {
    const modal = document.getElementById('add-cert-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }
  };

  window.closeAddCertModal = function() {
    const modal = document.getElementById('add-cert-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  // Delete User Added Certificate
  window.deleteUserCert = function(id) {
    if (!confirm("Hapus sertifikat ini dari tampilan portfolio?")) return;
    try {
      let stored = JSON.parse(localStorage.getItem('riski_user_certificates') || '[]');
      stored = stored.filter(c => c.id !== id);
      localStorage.setItem('riski_user_certificates', JSON.stringify(stored));
      renderCertificates();
      showToast("Sertifikat berhasil dihapus!");
    } catch (e) {
      console.error(e);
    }
  };

  // Helper: Extract Google Drive File ID
  function extractGDriveId(url) {
    if (!url) return null;
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  }

  // Handle Add Certificate Form Submission
  const addCertForm = document.getElementById('add-cert-form');
  const certFileInput = document.getElementById('cert-file-input');
  const certImagePreview = document.getElementById('cert-image-preview');
  let uploadedCertBase64 = '';

  if (certFileInput && certImagePreview) {
    certFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          uploadedCertBase64 = evt.target.result;
          certImagePreview.src = uploadedCertBase64;
          certImagePreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (addCertForm) {
    addCertForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('new-cert-title').value.trim();
      const issuer = document.getElementById('new-cert-issuer').value.trim();
      const category = document.getElementById('new-cert-category').value.trim() || 'Cybersecurity';
      const date = document.getElementById('new-cert-date').value.trim() || '2026';
      const credId = document.getElementById('new-cert-credid').value.trim();
      let verifyUrl = document.getElementById('new-cert-url').value.trim();
      const gdriveUrl = document.getElementById('new-cert-gdrive') ? document.getElementById('new-cert-gdrive').value.trim() : '';
      const desc = document.getElementById('new-cert-desc').value.trim();
      const color = document.getElementById('new-cert-color').value || 'cyan';

      let certImage = uploadedCertBase64;

      // Handle Google Drive Link
      if (gdriveUrl) {
        verifyUrl = verifyUrl || gdriveUrl;
        const gdriveId = extractGDriveId(gdriveUrl);
        if (!certImage && gdriveId) {
          // Generate direct Google Drive thumbnail image preview
          certImage = `https://drive.google.com/thumbnail?id=${gdriveId}&sz=w800`;
        }
      }

      const editCertId = addCertForm.getAttribute('data-edit-cert-id');

      try {
        let allCerts = getCertificates();
        if (editCertId) {
          // Edit existing certificate
          const target = allCerts.find(c => c.id === editCertId);
          if (target) {
            target.title = title;
            target.issuer = issuer;
            target.category = category;
            target.date = date;
            target.credId = credId;
            target.verifyUrl = verifyUrl;
            target.gdriveUrl = gdriveUrl;
            target.desc = desc;
            target.color = color;
            if (certImage) target.image = certImage;
          }
          localStorage.setItem('portfolio_user_certificates', JSON.stringify(allCerts));
          localStorage.setItem('riski_user_certificates', JSON.stringify(allCerts));
          addCertForm.removeAttribute('data-edit-cert-id');
          showToast("Sertifikat Berhasil Diperbarui!");
        } else {
          // Add new certificate
          const newCert = {
            id: 'cert_' + Date.now(),
            title,
            issuer,
            category,
            date,
            credId,
            verifyUrl,
            gdriveUrl,
            desc,
            color,
            image: certImage,
            isDefault: false
          };
          allCerts.unshift(newCert);
          localStorage.setItem('portfolio_user_certificates', JSON.stringify(allCerts));
          localStorage.setItem('riski_user_certificates', JSON.stringify(allCerts));
          showToast("Sertifikat Berhasil Ditambahkan!");
        }
        
        addCertForm.reset();
        uploadedCertBase64 = '';
        if (certImagePreview) certImagePreview.classList.add('hidden');
        
        window.closeAddCertModal();
        renderCertificates();
      } catch (err) {
        alert("Gagal menyimpan sertifikat. Jika menggunakan upload file, pastikan ukuran gambar di bawah 2MB atau gunakan Link Google Drive.");
        console.error(err);
      }
    });
  }

  // Helper Toast Notification
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#0A1222] border border-cyan-500/60 text-white text-xs rounded-xl shadow-2xl flex items-center gap-2 animate-bounce';
    toast.innerHTML = `<i data-lucide="shield-check" class="w-4 h-4 text-cyan-400"></i> ${message}`;
    document.body.appendChild(toast);
    if (window.lucide) lucide.createIcons();
    setTimeout(() => toast.remove(), 4000);
  }


  // ==========================================
  // HIDDEN OWNER / ADMIN AUTHENTICATION ENGINE
  // ==========================================
  const validPasskeys = ['@Babon231103'];

  function isOwnerLoggedIn() {
    return sessionStorage.getItem('portfolio_owner_auth') === 'true' || 
           localStorage.getItem('portfolio_owner_auth') === 'true';
  }

  function updateAdminUI() {
    const controls = document.getElementById('admin-cert-controls');
    const secretTrigger = document.getElementById('secret-admin-trigger');
    const loggedIn = isOwnerLoggedIn();

    if (controls) {
      if (loggedIn) {
        controls.classList.remove('hidden');
        controls.classList.add('flex');
      } else {
        controls.classList.add('hidden');
        controls.classList.remove('flex');
      }
    }

    if (secretTrigger) {
      if (loggedIn) {
        secretTrigger.classList.add('hidden');
      } else {
        secretTrigger.classList.remove('hidden');
      }
    }

    // Toggle delete buttons on user certificates
    const deleteBtns = document.querySelectorAll('.user-cert-delete-btn');
    deleteBtns.forEach(btn => {
      if (loggedIn) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });

    if (window.lucide) lucide.createIcons();
  }

  window.openAdminLoginModal = function() {
    if (isOwnerLoggedIn()) {
      window.openAddCertModal();
      return;
    }
    const modal = document.getElementById('admin-login-modal');
    const errorEl = document.getElementById('admin-login-error');
    const passInput = document.getElementById('admin-password-input');
    if (errorEl) errorEl.classList.add('hidden');
    if (passInput) passInput.value = '';
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
      setTimeout(() => { if (passInput) passInput.focus(); }, 150);
    }
  };

  window.closeAdminLoginModal = function() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  window.togglePasswordVisibility = function() {
    const passInput = document.getElementById('admin-password-input');
    const eyeIcon = document.getElementById('eye-icon');
    if (!passInput || !eyeIcon) return;
    if (passInput.type === 'password') {
      passInput.type = 'text';
      eyeIcon.setAttribute('data-lucide', 'eye-off');
    } else {
      passInput.type = 'password';
      eyeIcon.setAttribute('data-lucide', 'eye');
    }
    if (window.lucide) lucide.createIcons();
  };

  window.logoutAdmin = function() {
    sessionStorage.removeItem('portfolio_owner_auth');
    localStorage.removeItem('portfolio_owner_auth');
    updateAdminUI();
    showToast("Sesi Owner telah ditutup. Mode publik aktif.");
  };

  // Admin login form submission
  const adminLoginForm = document.getElementById('admin-login-form');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const passInput = document.getElementById('admin-password-input');
      const rememberMe = document.getElementById('admin-remember-me');
      const errorEl = document.getElementById('admin-login-error');
      const enteredPass = passInput ? passInput.value.trim() : '';

      const customPwd = localStorage.getItem('portfolio_admin_custom_pwd');
      const isMatch = validPasskeys.includes(enteredPass) || (customPwd && enteredPass === customPwd);

      if (isMatch) {
        sessionStorage.setItem('portfolio_owner_auth', 'true');
        if (rememberMe && rememberMe.checked) {
          localStorage.setItem('portfolio_owner_auth', 'true');
        }
        window.closeAdminLoginModal();
        updateAdminUI();
        showToast("Akses Owner Terverifikasi: Selamat datang Riski! Membuka Dashboard Admin...", "success");
        setTimeout(() => {
          window.location.href = 'admin.html';
        }, 400);
      } else {
        if (errorEl) errorEl.classList.remove('hidden');
        if (passInput) {
          passInput.classList.add('border-red-500', 'animate-shake');
          setTimeout(() => passInput.classList.remove('animate-shake'), 600);
          passInput.focus();
        }
      }
    });
  }

  // Global Keyboard Shortcut: Ctrl + Shift + A to open Hidden Admin Gate
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a' || e.key === 'L' || e.key === 'l')) {
      e.preventDefault();
      window.openAdminLoginModal();
    }
  });

  // URL Query detection: ?admin or ?login
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('admin') || urlParams.has('login')) {
    setTimeout(() => {
      window.openAdminLoginModal();
    }, 600);
  }


  // ========================================================
  // MASTER SITE CONTENT & ADMIN CMS ENGINE (REAL-TIME EDIT)
  // Dedicated to: About, Pengalaman, Tools, and Sertifikat
  // ========================================================

  const DEFAULT_SITE_DATA = {
    about: {
      bio1: "Saya adalah mahasiswa tingkat akhir di Politeknik Piksi Input Serang pada program studi D4 Rekayasa Keamanan Siber. Memiliki ketertarikan mendalam dan pengalaman hands-on dalam menguji keamanan sistem informasi, menelusuri kerentanan (vulnerability assessment), serta memahami alur eksploitasi web application berstandar OWASP Top 10.",
      bio2: "Selain berfokus pada ranah offensive security, saya juga aktif merancang dan mengembangkan sistem web fungsional menggunakan Laravel, Tailwind CSS, dan Next.js dengan pendekatan AI-Assisted Software Development—mengorkestrasi AI Coding Agent untuk menghasilkan kode yang bersih, terdokumentasi, dan tangguh terhadap celah keamanan.",
      quote: "\"Saya terus belajar dan mendalami setiap teknologi serta teknik yang relevan di bidang keamanan siber untuk terus berkembang dan memberikan hasil terbaik.\"",
      institution: "Politeknik Piksi Input Serang",
      degree: "D4 — Rekayasa Keamanan Siber",
      status: "2023 — Sekarang (Semester 7 Aktif)",
      focus: "Web App Pentesting & Cloud Security",
      eduDesc: "Mempelajari fundamental dan praktik lanjutan network defense, ethical hacking, digital forensics, reverse engineering, cryptography, serta perancangan sistem informasi berstandar keamanan enterprise."
    }
  };

  const DEFAULT_EXPERIENCES = [
    {
      id: "exp-bssn",
      role: "Peserta VVIP BSSN Region Jateng 2026",
      institution: "Badan Siber dan Sandi Negara (BSSN)",
      period: "2026",
      color: "cyan",
      desc: "Terpilih sebagai peserta VVIP dalam forum strategis Badan Siber dan Sandi Negara (BSSN) Region Jawa Tengah, berdiskusi mengenai pengamanan infrastruktur kritis dan kesiapan regulasi nasional."
    },
    {
      id: "exp-crtom",
      role: "Certified Red Team Operations Management (CRTOM)",
      institution: "Red Team Leadership & Operational Defense",
      period: "Professional Certification",
      color: "purple",
      desc: "Menyelesaikan program sertifikasi CRTOM yang menguji kapabilitas perancangan adversary emulation, taktik red teaming terkoordinasi, dan strategi bypass pertahanan terukur."
    },
    {
      id: "exp-coursenet",
      role: "Teknik Ethical Hacking & Cyber Security Specialist",
      institution: "Course-Net Indonesia",
      period: "Specialist Certification",
      color: "blue",
      desc: "Mengikuti pelatihan komprehensif selama 3 bulan penuh mencakup packet analysis, network defense, Linux server hardening, dan simulasi penyerangan web aplikasi."
    },
    {
      id: "exp-idnetwork",
      role: "Beasiswa Bootcamp Cybersecurity & Academy",
      institution: "IDNetwork & Surosowan Cyber",
      period: "Bootcamp Scholarship",
      color: "emerald",
      desc: "Penerima beasiswa prestasi bootcamp cybersecurity yang mendalami network packet analysis, pengujian celah web application, Linux security hardening, dan incident response labs."
    }
  ];

  const DEFAULT_TOOLS_LIST = [
    { name: "Kali Linux", domain: "kali.org", color: "#557C94", fallback: "assets/img/icons/kalilinux.svg" },
    { name: "Burp Suite", domain: "portswigger.net", color: "#FF6633", fallback: "assets/img/icons/burpsuite.svg" },
    { name: "Firefox", domain: "firefox.com", color: "#FF7139", fallback: "assets/img/icons/firefox.svg" },
    { name: "Nmap", domain: "nmap.org", color: "#22D3EE", fallback: "assets/img/icons/nmap.svg" },
    { name: "VS Code", domain: "code.visualstudio.com", color: "#007ACC", fallback: "assets/img/icons/vscode.svg" },
    { name: "GitHub", domain: "github.com", color: "#FFFFFF", fallback: "assets/img/icons/github.svg" },
    { name: "Codex", domain: "openai.com", color: "#74AA9C", fallback: "assets/img/icons/openai.svg" },
    { name: "Claude AI", domain: "claude.ai", color: "#D97757", fallback: "assets/img/icons/claude.svg" },
    { name: "Gemini", domain: "gemini.google.com", color: "#A78BFA", fallback: "assets/img/icons/gemini.svg" }
  ];

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 1. Data Accessors
  function getSiteData() {
    try {
      const stored = localStorage.getItem('portfolio_site_custom');
      if (stored) {
        return Object.assign({}, DEFAULT_SITE_DATA, JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Using default site data", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
  }

  function saveSiteData(data) {
    try {
      localStorage.setItem('portfolio_site_custom', JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save site data", e);
    }
  }

  function getExperienceData() {
    try {
      const stored = localStorage.getItem('portfolio_experiences_custom');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Using default experiences", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_EXPERIENCES));
  }

  function saveExperienceData(data) {
    try {
      localStorage.setItem('portfolio_experiences_custom', JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save experience data", e);
    }
  }

  function getToolsData() {
    try {
      const stored = localStorage.getItem('portfolio_tools_custom');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Using default tools", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_TOOLS_LIST));
  }

  function saveToolsData(data) {
    try {
      localStorage.setItem('portfolio_tools_custom', JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save tools data", e);
    }
  }

  // 2. DOM Renderers: About, Pengalaman, Tools
  function applySiteDataToDOM() {
    const data = getSiteData();
    if (!data.about) return;

    const setElText = (id, text) => {
      const el = document.getElementById(id);
      if (el && text) el.textContent = text;
    };

    setElText('about-bio1-text', data.about.bio1);
    setElText('about-bio2-text', data.about.bio2);
    setElText('about-quote-text', data.about.quote);
    setElText('about-edu-inst', data.about.institution);
    setElText('about-edu-degree', data.about.degree);
    setElText('about-edu-status', data.about.status);
    setElText('about-edu-focus', data.about.focus);
    setElText('about-edu-desc', data.about.eduDesc);

    if (window.lucide) lucide.createIcons();
  }

  function renderExperienceList() {
    const container = document.getElementById('experience-timeline-container');
    if (!container) return;

    const list = getExperienceData();
    if (list.length === 0) {
      container.innerHTML = '<p class="text-xs text-slate-400">Belum ada riwayat pengalaman.</p>';
      return;
    }

    container.innerHTML = list.map((exp, idx) => {
      const color = exp.color || 'cyan';
      return `
        <div class="relative group" data-aos="fade-up" data-aos-duration="750">
          <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#050914] border-2 border-${color}-400 group-hover:scale-125 group-hover:bg-${color}-400 transition shadow-lg shadow-${color}-500/40"></div>
          <div class="glass-panel p-6 rounded-2xl space-y-2 border border-slate-800 group-hover:border-${color}-500/40 transition">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h3 class="text-lg font-bold text-white font-heading">${escapeHTML(exp.role)}</h3>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-${color}-950 text-${color}-300 border border-${color}-800">${escapeHTML(exp.period || '')}</span>
            </div>
            <p class="text-xs text-${color}-400 font-mono">${escapeHTML(exp.institution || '')}</p>
            <p class="text-sm text-slate-300 leading-relaxed pt-1">
              ${escapeHTML(exp.desc || '')}
            </p>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  function renderToolsGrid() {
    const container = document.getElementById('tools-grid-container');
    if (!container) return;

    const tools = getToolsData();
    container.innerHTML = tools.map((t, idx) => {
      const domain = t.domain || 'github.com';
      const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
      const fallback = t.fallback || 'assets/img/icons/github.svg';
      const color = t.color || '#22D3EE';

      return `
        <div class="flex flex-col items-center gap-2 group cursor-pointer" data-aos="fade-up" data-aos-delay="${50 * (idx % 10)}">
          <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0A1222]/90 border border-slate-800/80 flex items-center justify-center p-3 shadow-lg group-hover:border-[${color}] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] group-hover:-translate-y-1 transition-all duration-300">
            <img src="${iconUrl}" alt="${escapeHTML(t.name)} Logo" class="w-8 h-8 sm:w-9 sm:h-9 object-contain" loading="lazy" onerror="this.onerror=null; this.src='${fallback}';">
          </div>
          <span class="text-[11px] sm:text-xs font-semibold text-slate-300 group-hover:text-cyan-300 transition">${escapeHTML(t.name)}</span>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  // 3. Admin Panel Modal Controls
  window.openMasterAdminModal = function(initialTab = 'about') {
    if (!isOwnerLoggedIn()) {
      window.openAdminLoginModal();
      return;
    }

    const modal = document.getElementById('master-admin-panel-modal');
    if (!modal) return;

    // 1. Populate About Inputs
    const siteData = getSiteData();
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };

    if (siteData.about) {
      setVal('adm-about-bio1', siteData.about.bio1);
      setVal('adm-about-bio2', siteData.about.bio2);
      setVal('adm-about-quote', siteData.about.quote);
      setVal('adm-about-institution', siteData.about.institution);
      setVal('adm-about-degree', siteData.about.degree);
      setVal('adm-about-status', siteData.about.status);
      setVal('adm-about-focus', siteData.about.focus);
      setVal('adm-about-edudesc', siteData.about.eduDesc);
    }

    // 2. Populate Experience Sub-Editor
    populateExperienceSelector();

    // 3. Populate Tools Grid Sub-Editor
    populateToolsAdminList();

    // 4. Populate Certs List
    populateAdminCertsList();

    // Open Modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    switchAdminTab(initialTab);

    if (window.lucide) lucide.createIcons();
  };

  window.closeMasterAdminModal = function() {
    const modal = document.getElementById('master-admin-panel-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  window.switchAdminTab = function(tabName) {
    const panes = ['about', 'experience', 'tools', 'certs', 'backup'];
    panes.forEach(p => {
      const paneEl = document.getElementById(`pane-${p}`);
      const btnEl = document.getElementById(`tab-btn-${p}`);
      if (paneEl) {
        if (p === tabName) {
          paneEl.classList.remove('hidden');
        } else {
          paneEl.classList.add('hidden');
        }
      }
      if (btnEl) {
        if (p === tabName) {
          btnEl.className = 'admin-tab-btn active-tab w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center gap-2.5 transition shrink-0 whitespace-nowrap bg-cyan-950/80 text-cyan-300 border border-cyan-500/50 shadow-sm';
        } else {
          btnEl.className = 'admin-tab-btn w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition shrink-0 whitespace-nowrap text-slate-400 hover:text-white hover:bg-slate-900/50';
        }
      }
    });
    if (window.lucide) lucide.createIcons();
  };

  // --- Sub-editor: Experience ---
  function populateExperienceSelector(selectId) {
    const selector = document.getElementById('adm-exp-selector');
    if (!selector) return;

    const list = getExperienceData();
    selector.innerHTML = list.map((exp, idx) => `
      <option value="${exp.id}" ${exp.id === selectId ? 'selected' : ''}>${idx + 1}. ${escapeHTML(exp.role)} (${escapeHTML(exp.period)})</option>
    `).join('');

    loadSelectedExperienceForm();
  }

  window.loadSelectedExperienceForm = function() {
    const selector = document.getElementById('adm-exp-selector');
    if (!selector) return;
    const expId = selector.value;
    const list = getExperienceData();
    const exp = list.find(e => e.id === expId);
    if (!exp) return;

    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
    setVal('adm-exp-role', exp.role);
    setVal('adm-exp-institution', exp.institution);
    setVal('adm-exp-period', exp.period);
    setVal('adm-exp-color', exp.color || 'cyan');
    setVal('adm-exp-desc', exp.desc);
  };

  window.saveCurrentExperienceDraft = function() {
    const selector = document.getElementById('adm-exp-selector');
    if (!selector || !selector.value) return;
    const expId = selector.value;
    const list = getExperienceData();
    const exp = list.find(e => e.id === expId);
    if (!exp) return;

    const getVal = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    exp.role = getVal('adm-exp-role') || exp.role;
    exp.institution = getVal('adm-exp-institution');
    exp.period = getVal('adm-exp-period');
    exp.color = getVal('adm-exp-color') || 'cyan';
    exp.desc = getVal('adm-exp-desc');

    saveExperienceData(list);
    renderExperienceList();
    populateExperienceSelector(expId);
    showToast(`Data pengalaman "${exp.role}" berhasil diperbarui!`, "success");
  };

  window.addNewExperiencePrompt = function() {
    const roleName = prompt("Masukkan Judul Peran / Program Baru:");
    if (!roleName) return;

    const list = getExperienceData();
    const newId = 'exp-' + Date.now();
    list.unshift({
      id: newId,
      role: roleName,
      institution: "Institusi / Organisasi Resmi",
      period: "2026",
      color: "cyan",
      desc: "Deskripsi kegiatan, pencapaian dan kompetensi yang dipelajari."
    });

    saveExperienceData(list);
    renderExperienceList();
    populateExperienceSelector(newId);
    showToast("Pengalaman baru berhasil ditambahkan! Silakan lengkapi detailnya.", "success");
  };

  window.deleteCurrentExperience = function() {
    const selector = document.getElementById('adm-exp-selector');
    if (!selector || !selector.value) return;
    const expId = selector.value;

    if (confirm("Hapus item pengalaman ini dari timeline?")) {
      let list = getExperienceData();
      list = list.filter(e => e.id !== expId);
      saveExperienceData(list);
      renderExperienceList();
      populateExperienceSelector();
      showToast("Item pengalaman telah dihapus.", "info");
    }
  };

  // --- Sub-editor: Tools ---
  let editingToolIndex = -1;

  function populateToolsAdminList() {
    const container = document.getElementById('adm-tools-list');
    const countEl = document.getElementById('adm-tools-count');
    if (!container) return;

    const tools = getToolsData();
    if (countEl) countEl.textContent = `Daftar Tools Aktif (${tools.length})`;

    container.innerHTML = tools.map((t, idx) => `
      <div class="p-2.5 rounded-xl bg-[#0A1222] border border-slate-800 flex items-center justify-between gap-2 text-xs hover:border-emerald-500/40 transition">
        <div class="flex items-center gap-2 overflow-hidden">
          <img src="https://www.google.com/s2/favicons?domain=${t.domain}&sz=128" alt="${escapeHTML(t.name)}" class="w-6 h-6 object-contain rounded bg-slate-900 shrink-0">
          <div class="overflow-hidden">
            <h5 class="font-bold text-white truncate">${escapeHTML(t.name)}</h5>
            <p class="text-[10px] text-slate-400 font-mono truncate">${escapeHTML(t.domain)}</p>
          </div>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <button type="button" onclick="editToolAt(${idx})" class="p-1 rounded bg-slate-900 text-cyan-400 hover:text-white" title="Edit Tool">
            <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
          </button>
          <button type="button" onclick="deleteToolAt(${idx})" class="p-1 rounded bg-red-950/60 text-red-400 hover:text-white" title="Hapus Tool">
            <i data-lucide="trash" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  window.editToolAt = function(idx) {
    const tools = getToolsData();
    if (!tools[idx]) return;
    editingToolIndex = idx;

    const editor = document.getElementById('adm-tool-editor');
    const nameEl = document.getElementById('adm-tool-editing-name');
    const inputName = document.getElementById('adm-tool-name');
    const inputDomain = document.getElementById('adm-tool-domain');

    if (editor) editor.classList.remove('hidden');
    if (nameEl) nameEl.textContent = tools[idx].name;
    if (inputName) inputName.value = tools[idx].name;
    if (inputDomain) inputDomain.value = tools[idx].domain;
  };

  window.closeToolEditor = function() {
    editingToolIndex = -1;
    const editor = document.getElementById('adm-tool-editor');
    if (editor) editor.classList.add('hidden');
  };

  window.saveEditedTool = function() {
    if (editingToolIndex < 0) return;
    const tools = getToolsData();
    const inputName = document.getElementById('adm-tool-name');
    const inputDomain = document.getElementById('adm-tool-domain');

    if (inputName && inputName.value.trim()) {
      tools[editingToolIndex].name = inputName.value.trim();
    }
    if (inputDomain && inputDomain.value.trim()) {
      tools[editingToolIndex].domain = inputDomain.value.trim();
    }

    saveToolsData(tools);
    renderToolsGrid();
    populateToolsAdminList();
    closeToolEditor();
    showToast("Tool berhasil diperbarui!", "success");
  };

  window.addNewToolPrompt = function() {
    const name = prompt("Masukkan Nama Software / Tool Baru (contoh: Python, Docker, Wazuh):");
    if (!name) return;
    const domain = prompt("Masukkan domain resmi untuk logonya (contoh: python.org, docker.com):", "github.com");

    const tools = getToolsData();
    tools.push({
      name: name.trim(),
      domain: (domain || 'github.com').trim(),
      color: "#22D3EE"
    });

    saveToolsData(tools);
    renderToolsGrid();
    populateToolsAdminList();
    showToast(`Tool "${name}" berhasil ditambahkan ke matriks!`, "success");
  };

  window.deleteToolAt = function(idx) {
    const tools = getToolsData();
    if (!tools[idx]) return;
    if (confirm(`Hapus "${tools[idx].name}" dari daftar tools?`)) {
      tools.splice(idx, 1);
      saveToolsData(tools);
      renderToolsGrid();
      populateToolsAdminList();
      closeToolEditor();
      showToast("Tool telah dihapus.", "info");
    }
  };

  // --- Sub-editor: Certs ---
  function populateAdminCertsList() {
    const listEl = document.getElementById('adm-certs-list');
    const countEl = document.getElementById('adm-certs-count');
    if (!listEl) return;

    const certs = getCertificates();
    if (countEl) countEl.textContent = `Total Terpasang: ${certs.length} Sertifikat`;

    listEl.innerHTML = certs.map(c => `
      <div class="p-3 rounded-xl bg-[#0A1222] border border-slate-800 flex items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-3 overflow-hidden">
          <img src="${c.image || 'https://drive.google.com/thumbnail?id=1WcczkN4HTN5qz5AVP-gTPsqUIGGAO_wI&sz=w800'}" alt="${escapeHTML(c.title)}" class="w-10 h-10 rounded-lg object-cover bg-slate-900 shrink-0 border border-slate-700">
          <div class="overflow-hidden">
            <h5 class="text-white font-semibold truncate">${escapeHTML(c.title)}</h5>
            <p class="text-[11px] text-slate-400 font-mono truncate">${escapeHTML(c.issuer || 'Official')} • ${c.date || '2026'}</p>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" onclick="editCertificateFromAdmin('${c.id}')" class="p-1.5 rounded-lg bg-pink-950/80 border border-pink-500/40 text-pink-300 hover:text-white" title="Edit Sertifikat Ini">
            <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
          </button>
          <a href="${c.gdriveUrl || c.verifyUrl}" target="_blank" rel="noreferrer" class="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 hover:text-white" title="Buka Dokumen Google Drive">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
          <button type="button" onclick="deleteCertificateFromAdmin('${c.id}')" class="p-1.5 rounded-lg bg-red-950/60 border border-red-500/30 text-red-400 hover:text-white" title="Hapus Sertifikat Ini">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  window.editCertificateFromAdmin = function(certId) {
    const certs = getCertificates();
    const c = certs.find(x => x.id === certId);
    if (!c) return;

    window.closeMasterAdminModal();
    window.openAddCertModal();

    const titleEl = document.getElementById('new-cert-title');
    const issuerEl = document.getElementById('new-cert-issuer');
    const dateEl = document.getElementById('new-cert-date');
    const catEl = document.getElementById('new-cert-category');
    const credEl = document.getElementById('new-cert-credid');
    const urlEl = document.getElementById('new-cert-url');
    const gdriveEl = document.getElementById('new-cert-gdrive');
    const descEl = document.getElementById('new-cert-desc');
    const form = document.getElementById('add-cert-form');

    if (titleEl) titleEl.value = c.title || '';
    if (issuerEl) issuerEl.value = c.issuer || '';
    if (dateEl) dateEl.value = c.date || '';
    if (catEl) catEl.value = c.category || '';
    if (credEl) credEl.value = c.credId || '';
    if (urlEl) urlEl.value = c.verifyUrl || '';
    if (gdriveEl) gdriveEl.value = c.gdriveUrl || c.verifyUrl || '';
    if (descEl) descEl.value = c.desc || '';
    if (form) form.setAttribute('data-edit-cert-id', c.id);
  };

    window.deleteCertificateFromAdmin = function(certId) {
    if (confirm("Hapus sertifikat ini dari tampilan website?")) {
      const allCerts = getCertificates().filter(c => c.id !== certId);
      localStorage.setItem('portfolio_user_certificates', JSON.stringify(allCerts));
          localStorage.setItem('riski_user_certificates', JSON.stringify(allCerts));
      renderCertificates();
      populateAdminCertsList();
      showToast("Sertifikat berhasil dihapus dari website.", "info");
    }
  };

  // --- Main Save Handler ---
  window.handleMasterAdminSave = function() {
    const getVal = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };

    const siteData = {
      about: {
        bio1: getVal('adm-about-bio1'),
        bio2: getVal('adm-about-bio2'),
        quote: getVal('adm-about-quote'),
        institution: getVal('adm-about-institution'),
        degree: getVal('adm-about-degree'),
        status: getVal('adm-about-status'),
        focus: getVal('adm-about-focus'),
        eduDesc: getVal('adm-about-edudesc')
      }
    };

    // Save site data (About)
    saveSiteData(siteData);

    // Save current experience draft if open
    saveCurrentExperienceDraft();

    // Re-apply to DOM
    applySiteDataToDOM();
    renderExperienceList();
    renderToolsGrid();

    showToast("✅ Berhasil! Bagian About, Pengalaman, dan Tools telah diperbarui secara langsung.", "success");
    setTimeout(() => {
      closeMasterAdminModal();
    }, 600);
  };

  // --- Backup, Export & Reset ---
  window.exportSiteDataJSON = function() {
    const fullBackup = {
      about: getSiteData().about,
      experiences: getExperienceData(),
      tools: getToolsData(),
      certificates: getCertificates(),
      exportedAt: new Date().toISOString(),
      owner: "Riski Ardiansyah"
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `riski_portfolio_data_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    showToast("File cadangan JSON berhasil diunduh!", "success");
  };

  window.importSiteDataJSON = function(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.about) {
          saveSiteData({ about: parsed.about });
        }
        if (parsed.experiences) {
          saveExperienceData(parsed.experiences);
        }
        if (parsed.tools) {
          saveToolsData(parsed.tools);
        }
        if (parsed.certificates && Array.isArray(parsed.certificates)) {
          localStorage.setItem('portfolio_user_certificates', JSON.stringify(parsed.certificates));
        }

        applySiteDataToDOM();
        renderExperienceList();
        renderToolsGrid();
        renderCertificates();
        openMasterAdminModal('about');
        showToast("Data cadangan berhasil dipulihkan secara penuh!", "success");
      } catch (err) {
        alert("Gagal membaca file JSON: Format tidak valid.");
      }
    };
    reader.readAsText(file);
  };

  window.resetSiteDataDefault = function() {
    if (confirm("PERINGATAN: Apakah Anda yakin ingin menghapus semua editan lokal dan kembali ke setelan default awal?")) {
      localStorage.removeItem('portfolio_site_custom');
      localStorage.removeItem('portfolio_experiences_custom');
      localStorage.removeItem('portfolio_tools_custom');
      applySiteDataToDOM();
      renderExperienceList();
      renderToolsGrid();
      openMasterAdminModal('about');
      showToast("Seluruh pengaturan telah dikembalikan ke kondisi default awal.", "info");
    }
  };

  // Hook floating bar
  const oldUpdateAdminUI = updateAdminUI;
  updateAdminUI = function() {
    if (typeof oldUpdateAdminUI === 'function') oldUpdateAdminUI();
    const floatingBar = document.getElementById('owner-floating-bar');
    const loggedIn = isOwnerLoggedIn();
    if (floatingBar) {
      if (loggedIn) {
        floatingBar.classList.remove('hidden');
        floatingBar.classList.add('flex');
      } else {
        floatingBar.classList.add('hidden');
        floatingBar.classList.remove('flex');
      }
    }
    if (window.lucide) lucide.createIcons();
  };

  // Initial boots
  applySiteDataToDOM();
  renderExperienceList();
  renderToolsGrid();

  // Expose globally
  window.applySiteDataToDOM = applySiteDataToDOM;
  window.renderExperienceList = renderExperienceList;
  window.renderToolsGrid = renderToolsGrid;
  window.getSiteData = getSiteData;
  window.getExperienceData = getExperienceData;
  window.getToolsData = getToolsData;
  window.escapeHTML = escapeHTML;

  // Initial render of certificates
  renderCertificates();
  updateAdminUI();

// CV Preview features removed per request

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Mengirim Pesan Aman...
      `;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        
        if (formStatus) {
          formStatus.innerHTML = `
            <div class="p-4 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 text-sm flex items-center gap-3">
              <i data-lucide="shield-check" class="w-5 h-5 text-cyan-400 shrink-0"></i>
              <div>
                <strong>Pesan Terkirim dengan Enkripsi!</strong> Terima kasih, Riski Ardiansyah akan merespons pesan Anda dalam waktu 1x24 jam.
              </div>
            </div>
          `;
          if (window.lucide) lucide.createIcons();
        }
      }, 1200);
    });
  }

  // Theme Toggle Notification
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      showToast("Mode Keamanan Cyber Aktif (Dark Futuristic Theme Default)");
    });
  }

  // ========================================================
  // PREMIUM SCROLL REVEAL & PROGRESS INTERACTIONS
  // ========================================================

  // 1. Reading Progress Bar & Back to Top Toggle
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  function handleScrollInteractions() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Progress Bar Calculation
    if (progressBar && scrollHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      progressBar.style.width = `${progressPercent}%`;
    }

    // Back to Top Button Visibility
    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', handleScrollInteractions, { passive: true });
  handleScrollInteractions();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Initialize AOS (Animate On Scroll) Library
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false, // Animates on scroll up AND down!
      mirror: true, // Elements animate out while scrolling past them
      offset: 70
    });
  }

  // 3. Initialize 3D Card Hover Tilt (Vanilla Tilt)
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.project-card, .glass-panel'), {
      max: 6,
      speed: 400,
      glare: true,
      'max-glare': 0.12,
      perspective: 1200,
      scale: 1.01
    });
  }

  // 4. Interactive Ambient Mouse Spotlight Glow for Cards
  document.querySelectorAll('.glass-panel, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
