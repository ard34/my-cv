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

  // Default Verified Certificates from Riski's Official Google Drive Folder
  const defaultCertificates = [
    {
      id: "bssn-vvip-2026",
      title: "Peserta VVIP BSSN Region Jateng 2026",
      issuer: "Badan Siber dan Sandi Negara (BSSN)",
      category: "National Cyber Defense",
      date: "2026",
      credId: "BSSN-VVIP-JTG-2026",
      verifyUrl: "https://drive.google.com/file/d/1WcczkN4HTN5qz5AVP-gTPsqUIGGAO_wI/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1WcczkN4HTN5qz5AVP-gTPsqUIGGAO_wI/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1WcczkN4HTN5qz5AVP-gTPsqUIGGAO_wI&sz=w800",
      desc: "Partisipasi resmi dalam agenda strategis ketahanan siber nasional BSSN Region Jawa Tengah, berfokus pada penguatan infrastruktur informasi vital dan tata kelola regulasi keamanan digital.",
      color: "red",
      isDefault: true
    },
    {
      id: "crtom-red-team",
      title: "Certified Red Team Operations Management (CRTOM)",
      issuer: "Red Team Management Board",
      category: "Red Team Operations",
      date: "2026",
      credId: "CRTOM-2026-9918",
      verifyUrl: "https://drive.google.com/file/d/181TCznmHXVevOc5-hXuCpDTVOEoccn8S/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/181TCznmHXVevOc5-hXuCpDTVOEoccn8S/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=181TCznmHXVevOc5-hXuCpDTVOEoccn8S&sz=w800",
      desc: "Sertifikasi profesional tingkat lanjut yang memvalidasi penguasaan manajemen operasi red team, simulasi penyerangan terencana (adversary emulation), dan mitigasi kerentanan sistem.",
      color: "red",
      isDefault: true
    },
    {
      id: "idnetwork-3bln",
      title: "Beasiswa Bootcamp Cyber Security (3 Bulan)",
      issuer: "IDNetwork / IDNetworkers",
      category: "Merit Scholarship Bootcamp",
      date: "2025",
      credId: "IDN-BOOTCAMP-3M-2025",
      verifyUrl: "https://drive.google.com/file/d/1OGrzGHWynMCyJewpFAL5lPq6dG_LqARq/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1OGrzGHWynMCyJewpFAL5lPq6dG_LqARq/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1OGrzGHWynMCyJewpFAL5lPq6dG_LqARq&sz=w800",
      desc: "Program beasiswa intensif selama 3 bulan mencakup security hardening, network packet analysis, vulnerability assessment pada web application, dan hands-on lab penetration testing.",
      color: "emerald",
      isDefault: true
    },
    {
      id: "soc-siem-wazuh",
      title: "Professional SOC & SIEM: Master Wazuh and Splunk",
      issuer: "SOC & SIEM Professional Academy",
      category: "SOC & SIEM Operations",
      date: "2025",
      credId: "SOC-WAZUH-SPLUNK-09",
      verifyUrl: "https://drive.google.com/file/d/1HOn7Et_9LJqm1SadpXhjucljJiENNc1-/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1HOn7Et_9LJqm1SadpXhjucljJiENNc1-/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1HOn7Et_9LJqm1SadpXhjucljJiENNc1-&sz=w800",
      desc: "Penyelesaian pelatihan spesialis Security Operations Center (SOC) menggunakan Wazuh dan Splunk untuk integrasi log, deteksi anomali real-time, dan respon insiden keamanan siber.",
      color: "blue",
      isDefault: true
    },
    {
      id: "digital-forensics-101",
      title: "Digital Forensics 101 Event Certification",
      issuer: "Digital Forensics Community / JH",
      category: "Digital Forensics",
      date: "2025",
      credId: "DF-101-JH-2025",
      verifyUrl: "https://drive.google.com/file/d/19ZpZnegYheKGnWQF2vqblf0deJEjO6yJ/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/19ZpZnegYheKGnWQF2vqblf0deJEjO6yJ/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=19ZpZnegYheKGnWQF2vqblf0deJEjO6yJ&sz=w800",
      desc: "Sertifikasi keikutsertaan investigasi forensik digital, analisis bukti digital, pelacakan jejak artefak penyerang, dan metodologi rekonstruksi timeline insiden siber.",
      color: "purple",
      isDefault: true
    },
    {
      id: "ceh-mini-class",
      title: "Mini Class Certified Ethical Hacker (CEH)",
      issuer: "Cyber Security Learning Lab",
      category: "Ethical Hacking",
      date: "2025",
      credId: "CEH-MINI-69",
      verifyUrl: "https://drive.google.com/file/d/1KkFeofVC7INfyla8m0K7UohP1Zh9oxNf/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1KkFeofVC7INfyla8m0K7UohP1Zh9oxNf/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1KkFeofVC7INfyla8m0K7UohP1Zh9oxNf&sz=w800",
      desc: "Praktik pengujian keamanan sistem, scanning jaringan dengan Nmap, identifikasi kerentanan web OWASP Top 10, dan metodologi exploit beretika.",
      color: "cyan",
      isDefault: true
    },
    {
      id: "fundamental-it-security",
      title: "Fundamental IT Security",
      issuer: "IT Security Academy",
      category: "Security Fundamentals",
      date: "2024",
      credId: "FITS-RISKI-2024",
      verifyUrl: "https://drive.google.com/file/d/1bJVxYuT_L-OoG3mQ8qOSovMtdQDitLTl/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1bJVxYuT_L-OoG3mQ8qOSovMtdQDitLTl/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1bJVxYuT_L-OoG3mQ8qOSovMtdQDitLTl&sz=w800",
      desc: "Sertifikasi pemahaman dasar prinsip keamanan informasi CIA Triad, kontrol akses, manajemen kata sandi dan enkripsi, serta proteksi endpoint.",
      color: "cyan",
      isDefault: true
    },
    {
      id: "growia-software-tester",
      title: "Software Tester Certificate (QA & Testing)",
      issuer: "Growia Academy",
      category: "Quality Assurance",
      date: "2024",
      credId: "GROWIA-QA-8812",
      verifyUrl: "https://drive.google.com/file/d/1GJ64OjqqIH4s51qNu-qBCmJk4wfD4j5s/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1GJ64OjqqIH4s51qNu-qBCmJk4wfD4j5s/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1GJ64OjqqIH4s51qNu-qBCmJk4wfD4j5s&sz=w800",
      desc: "Validasi kompetensi pengujian perangkat lunak, manual testing, penyusunan test case, boundary value analysis, dan pelaporan bug aplikasi web.",
      color: "purple",
      isDefault: true
    },
    {
      id: "webinar-red-team",
      title: "Webinar Red Team Cyber Defense",
      issuer: "Red Team Leaders",
      category: "Red Team Operations",
      date: "2025",
      credId: "RTL-WEBINAR-2025",
      verifyUrl: "https://drive.google.com/file/d/1qNjmOl_hnncyiqRFWBPWG2uHWfkPwypM/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1qNjmOl_hnncyiqRFWBPWG2uHWfkPwypM/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1qNjmOl_hnncyiqRFWBPWG2uHWfkPwypM&sz=w800",
      desc: "Pembahasan teknik ofensif terkini, bypass pertahanan perimeter jaringan, dan strategi mitigasi ancaman modern.",
      color: "red",
      isDefault: true
    },
    {
      id: "idnetwork-1bln",
      title: "Bootcamp Cyber Security (1 Bulan)",
      issuer: "IDNetworkers",
      category: "Intensive Bootcamp",
      date: "2025",
      credId: "IDN-BOOTCAMP-1M-2025",
      verifyUrl: "https://drive.google.com/file/d/1i3VUmyjFH_PhXdr8jJUuPRNrnXn8cBye/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1i3VUmyjFH_PhXdr8jJUuPRNrnXn8cBye/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1i3VUmyjFH_PhXdr8jJUuPRNrnXn8cBye&sz=w800",
      desc: "Pelatihan intensif 1 bulan dasar-dasar keamanan siber, konfigurasi firewall, audit kerentanan, dan simulasi CTF.",
      color: "emerald",
      isDefault: true
    }
  ];

  // Load All Certificates (Default + LocalStorage)
  function getAllCertificates() {
    let userCerts = [];
    try {
      const stored = localStorage.getItem('riski_user_certificates');
      if (stored) userCerts = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to load user certs from localStorage:", e);
    }
    return [...defaultCertificates, ...userCerts];
  }

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
              <i data-lucide="shield-check" class="w-3 h-3 text-cyan-400"></i> Verified GDrive
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
            ${c.verifyUrl ? `
              <a href="${c.verifyUrl}" target="_blank" rel="noreferrer" title="Buka Tautan Kredensial" class="p-2 rounded-xl bg-[#0A1222] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            ` : ''}
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
      if (cert.gdriveUrl) {
        verifyBtn.innerHTML = `<span>Buka Dokumen di Google Drive</span><i data-lucide="external-link" class="w-4 h-4"></i>`;
      } else {
        verifyBtn.innerHTML = `<span>Buka Tautan Verifikasi</span><i data-lucide="external-link" class="w-4 h-4"></i>`;
      }
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

      try {
        let stored = JSON.parse(localStorage.getItem('riski_user_certificates') || '[]');
        stored.push(newCert);
        localStorage.setItem('riski_user_certificates', JSON.stringify(stored));
        
        addCertForm.reset();
        uploadedCertBase64 = '';
        if (certImagePreview) certImagePreview.classList.add('hidden');
        
        window.closeAddCertModal();
        renderCertificates();
        showToast("Sertifikat Berhasil Ditambahkan dengan Link Google Drive!");
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
  const validPasskeys = ['riski34', 'riskiardiansyah', 'admincyber', 'cybersecurity2026'];

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
      const isMatch = validPasskeys.includes(enteredPass.toLowerCase()) || (customPwd && enteredPass === customPwd);

      if (isMatch) {
        sessionStorage.setItem('portfolio_owner_auth', 'true');
        if (rememberMe && rememberMe.checked) {
          localStorage.setItem('portfolio_owner_auth', 'true');
        }
        window.closeAdminLoginModal();
        updateAdminUI();
        showToast("Akses Diberikan: Selamat datang Riski! Mode Kelola Sertifikat Aktif.", "success");
        setTimeout(() => {
          window.openAddCertModal();
        }, 300);
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

  // Initial render of certificates
  renderCertificates();
  updateAdminUI();

  // CV Preview Modal Function
  window.openCVPreview = function() {
    const cvModal = document.getElementById('cv-modal');
    if (cvModal) {
      cvModal.classList.remove('hidden');
      cvModal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }
  };

  window.closeCVPreview = function() {
    const cvModal = document.getElementById('cv-modal');
    if (cvModal) {
      cvModal.classList.add('hidden');
      cvModal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

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
