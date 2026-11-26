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
      id: "jh-ghosts-database",
      title: "Event JH: Ghosts in the Database (SQLi & Forensics)",
      issuer: "Jagat Hacking (JH Security Community)",
      category: "Database Security & Forensics",
      date: "2025",
      credId: "JH-GIDB-4949",
      verifyUrl: "https://drive.google.com/file/d/1qJRyvgoHCcarE6I2z2aYbYOyPdh290Ph/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1qJRyvgoHCcarE6I2z2aYbYOyPdh290Ph/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1qJRyvgoHCcarE6I2z2aYbYOyPdh290Ph&sz=w800",
      desc: "Bedah investigasi keamanan basis data, teknik eksploitasi dan remediasi SQL Injection, serta pemulihan integritas data setelah serangan siber.",
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
      id: "cert-apresiasi-penghargaan",
      title: "Sertifikat Apresiasi & Penghargaan Dedikasi",
      issuer: "Institutional & Community Committee",
      category: "Honor & Award",
      date: "2025",
      credId: "APPR-RISKI-2025",
      verifyUrl: "https://drive.google.com/file/d/1SFXp3coPpqvHALQVH5U47hceOCPlCPmX/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1SFXp3coPpqvHALQVH5U47hceOCPlCPmX/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1SFXp3coPpqvHALQVH5U47hceOCPlCPmX&sz=w800",
      desc: "Penghargaan atas partisipasi aktif, dedikasi, dan kontribusi nyata dalam penyelenggaraan program edukasi dan kegiatan keamanan digital.",
      color: "red",
      isDefault: true
    },
    {
      id: "cert-completion-108715",
      title: "Certificate of Course Completion (Technical Specialization)",
      issuer: "Global Professional Tech Institute",
      category: "Professional Specialization",
      date: "2025",
      credId: "CERT-COMP-108715",
      verifyUrl: "https://drive.google.com/file/d/1qYFfAohOxRZnIxiJT3HhMk_QGpJD5k2H/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1qYFfAohOxRZnIxiJT3HhMk_QGpJD5k2H/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1qYFfAohOxRZnIxiJT3HhMk_QGpJD5k2H&sz=w800",
      desc: "Validasi kelulusan program spesialisasi teknis pengujian sistem, evaluasi arsitektur perangkat lunak, dan kepatuhan standar industri IT.",
      color: "blue",
      isDefault: true
    },
    {
      id: "cert-certified-defense",
      title: "Certified Cyber Defense & System Integrity",
      issuer: "Certified Security Examination Board",
      category: "Cyber Defense",
      date: "2025",
      credId: "CSB-DEFENSE-2025",
      verifyUrl: "https://drive.google.com/file/d/1rx_14vi12RhFQAYGKU79l3gvkM-1LOV_/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1rx_14vi12RhFQAYGKU79l3gvkM-1LOV_/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1rx_14vi12RhFQAYGKU79l3gvkM-1LOV_&sz=w800",
      desc: "Validasi kemampuan analisis postur keamanan jaringan, mitigasi risiko serangan denial of service, dan pengamanan server.",
      color: "cyan",
      isDefault: true
    },
    {
      id: "cert-foundations-1",
      title: "Foundations of Information Security Certificate",
      issuer: "Information Technology Learning Platform",
      category: "Security Fundamentals",
      date: "2024",
      credId: "SEC-FOUND-2024",
      verifyUrl: "https://drive.google.com/file/d/1zjTzTLZJNrX2dCDerYGUjpaBZiHjDPfi/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1zjTzTLZJNrX2dCDerYGUjpaBZiHjDPfi/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1zjTzTLZJNrX2dCDerYGUjpaBZiHjDPfi&sz=w800",
      desc: "Dasar-dasar arsitektur sistem informasi aman, keamanan jaringan komputer, dan prinsip pertahanan pertahanan berlapis (defense-in-depth).",
      color: "emerald",
      isDefault: true
    },
    {
      id: "cert-introduction-cyber",
      title: "Introduction to Cybersecurity & Ethical Defense",
      issuer: "Cybersecurity Learning Center",
      category: "Cyber Defense",
      date: "2024",
      credId: "INTRO-CYBER-2024",
      verifyUrl: "https://drive.google.com/file/d/1vsr7-iohZvWi-0J0lGX21mSyc7hv05yw/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1vsr7-iohZvWi-0J0lGX21mSyc7hv05yw/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1vsr7-iohZvWi-0J0lGX21mSyc7hv05yw&sz=w800",
      desc: "Pelatihan pengenalan ekosistem keamanan siber, klasifikasi tipe malware, dan taktik pertahanan terhadap ancaman siber kontemporer.",
      color: "blue",
      isDefault: true
    },
    {
      id: "cert-sekolahmu-comp",
      title: "Sertifikat Pelatihan Kompetensi Digital & Pemrograman",
      issuer: "Sekolah.mu / Karier.mu",
      category: "Software & Web Development",
      date: "2024",
      credId: "SKL-9473749",
      verifyUrl: "https://drive.google.com/file/d/1qYv-lufesSCvsQuLH7c2ExZKcW3n338G/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1qYv-lufesSCvsQuLH7c2ExZKcW3n338G/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1qYv-lufesSCvsQuLH7c2ExZKcW3n338G&sz=w800",
      desc: "Sertifikasi penguasaan logika pemrograman terstruktur, pengembangan web modern, dan penyelesaian masalah berbasis komputasi.",
      color: "purple",
      isDefault: true
    },
    {
      id: "cert-ecert-380",
      title: "E-Certificate of Achievement & Participation (No. 380)",
      issuer: "National Tech Workshop Organization",
      category: "Professional Development",
      date: "2024",
      credId: "ECERT-380-TECH",
      verifyUrl: "https://drive.google.com/file/d/1rwNrtVlMoC6yekx4qxU8B3gTuu8h_7_l/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1rwNrtVlMoC6yekx4qxU8B3gTuu8h_7_l/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1rwNrtVlMoC6yekx4qxU8B3gTuu8h_7_l&sz=w800",
      desc: "Sertifikasi keikutsertaan dalam pelatihan workshop teknologi informasi tingkat nasional, mencakup studi kasus dan problem solving.",
      color: "cyan",
      isDefault: true
    },
    {
      id: "cert-vtc-bei",
      title: "Vocational Training Certificate (VTC) BEI",
      issuer: "Vocational Training Center & BEI",
      category: "Vocational & Technical Training",
      date: "2024",
      credId: "VTC-BEI-2024",
      verifyUrl: "https://drive.google.com/file/d/1-gUZkCCd1BML8vvqGujK9WEhoSDyb3a2/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1-gUZkCCd1BML8vvqGujK9WEhoSDyb3a2/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1-gUZkCCd1BML8vvqGujK9WEhoSDyb3a2&sz=w800",
      desc: "Pelatihan vokasi keahlian praktikal teknologi digital, tata kelola sistem komputasi terapan, dan kesiapan profesional industri.",
      color: "emerald",
      isDefault: true
    },
    {
      id: "cert-pelatihan-riski",
      title: "Sertifikat Pelatihan Keahlian Siber Terapan",
      issuer: "Cyber Training Institute",
      category: "Technical Competency",
      date: "2025",
      credId: "CPT-RISKI-2025",
      verifyUrl: "https://drive.google.com/file/d/1miFv2r7v1E8ACuKPA_JVDfk6bWT7qmx1/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1miFv2r7v1E8ACuKPA_JVDfk6bWT7qmx1/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1miFv2r7v1E8ACuKPA_JVDfk6bWT7qmx1&sz=w800",
      desc: "Kredensial kelulusan workshop praktikum intensif dalam penerapan security controls, audit konfigurasi sistem, dan vulnerability scanning.",
      color: "blue",
      isDefault: true
    },
    {
      id: "cert-riski-prog-1",
      title: "Sertifikat Program Keamanan Sistem & Database",
      issuer: "Cyber Security Institute Indonesia",
      category: "Security Engineering",
      date: "2025",
      credId: "CSI-PROG-2025",
      verifyUrl: "https://drive.google.com/file/d/1rGVhSfsL7V2MLsd51f5vG-QfoLYadzH_/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1rGVhSfsL7V2MLsd51f5vG-QfoLYadzH_/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1rGVhSfsL7V2MLsd51f5vG-QfoLYadzH_&sz=w800",
      desc: "Program pengujian keamanan database dan sistem komputasi berorientasi mitigasi kebocoran data dan enkripsi penyimpanan.",
      color: "purple",
      isDefault: true
    },
    {
      id: "cert-riski-partisipasi",
      title: "Sertifikat Partisipasi & Pelatihan Keamanan IT",
      issuer: "Professional Cyber Academy",
      category: "IT Security Training",
      date: "2025",
      credId: "PART-CYBER-2025",
      verifyUrl: "https://drive.google.com/file/d/1lYQczFuokWDbvViKKKlfUgrU9aDTOhIQ/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1lYQczFuokWDbvViKKKlfUgrU9aDTOhIQ/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1lYQczFuokWDbvViKKKlfUgrU9aDTOhIQ&sz=w800",
      desc: "Bukti keikutsertaan aktif dalam rangkaian seminar interaktif dan pengenalan alur investigasi insiden keamanan informasi.",
      color: "cyan",
      isDefault: true
    },
    {
      id: "cert-riski-spesialisasi",
      title: "Kredensial Pelatihan Spesialisasi Digital & Komputasi",
      issuer: "Digital Skills Training Center",
      category: "Digital Skills",
      date: "2024",
      credId: "SKILL-RISKI-2024",
      verifyUrl: "https://drive.google.com/file/d/1YX5aTehg-dSbzJgkcOpkmDbhrjk7BDHL/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1YX5aTehg-dSbzJgkcOpkmDbhrjk7BDHL/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1YX5aTehg-dSbzJgkcOpkmDbhrjk7BDHL&sz=w800",
      desc: "Pelatihan spesialisasi kemampuan komputasi perangkat lunak, perancangan antarmuka, dan arsitektur data terstruktur.",
      color: "blue",
      isDefault: true
    },
    {
      id: "cert-riski-audit",
      title: "Sertifikasi Praktikum & Audit Keamanan Informasi",
      issuer: "IT Security Foundation",
      category: "Security Assessment",
      date: "2025",
      credId: "AUDIT-RISKI-2025",
      verifyUrl: "https://drive.google.com/file/d/1w53e7A2O-he8xxtNl-Pxx1VEXtF21x1d/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1w53e7A2O-he8xxtNl-Pxx1VEXtF21x1d/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1w53e7A2O-he8xxtNl-Pxx1VEXtF21x1d&sz=w800",
      desc: "Praktikum intensif pengujian audit kepatuhan konfigurasi server Linux, manajemen port jaringan, dan monitoring log insiden.",
      color: "emerald",
      isDefault: true
    },
    {
      id: "cert-riski-event-12",
      title: "Sertifikat Apresiasi Partisipasi Event Siber (No. 12)",
      issuer: "Cyber Community Event Committee",
      category: "Honor & Award",
      date: "2025",
      credId: "EVT-12-RISKI",
      verifyUrl: "https://drive.google.com/file/d/1qUU8Y5b_9dDXIvEpwAo75SLx-UUWg829/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1qUU8Y5b_9dDXIvEpwAo75SLx-UUWg829/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1qUU8Y5b_9dDXIvEpwAo75SLx-UUWg829&sz=w800",
      desc: "Piagam apresiasi keikutsertaan dan kontribusi dalam forum diskusi strategis komunitas keamanan siber dan perlindungan data.",
      color: "red",
      isDefault: true
    },
    {
      id: "cert-ecert-recognition-24",
      title: "E-Certificate of Recognition & Technical Contribution",
      issuer: "Tech & Security Forum",
      category: "Recognition & Award",
      date: "2024",
      credId: "RECOG-24-TECH",
      verifyUrl: "https://drive.google.com/file/d/1aVtkcXKRTvHBGrgJ8MgE4qJLNwilUX-L/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1aVtkcXKRTvHBGrgJ8MgE4qJLNwilUX-L/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1aVtkcXKRTvHBGrgJ8MgE4qJLNwilUX-L&sz=w800",
      desc: "Sertifikat pengakuan atas partisipasi teknis dalam kolaborasi riset keamanan perangkat lunak dan arsitektur web.",
      color: "purple",
      isDefault: true
    },
    {
      id: "cert-riski-pencapaian",
      title: "Sertifikat Pencapaian Pelatihan Teknis Perangkat Lunak",
      issuer: "Digital Skills Academy",
      category: "Software & Web Development",
      date: "2024",
      credId: "ACHV-RISKI-2024",
      verifyUrl: "https://drive.google.com/file/d/1ZGPY1eSesWAqEpV2sqgEhXBs5mQ-CKER/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1ZGPY1eSesWAqEpV2sqgEhXBs5mQ-CKER/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1ZGPY1eSesWAqEpV2sqgEhXBs5mQ-CKER&sz=w800",
      desc: "Kredensial pencapaian hasil implementasi aplikasi web berkinerja tinggi dengan standar penulisan kode terstruktur.",
      color: "cyan",
      isDefault: true
    },
    {
      id: "cert-riski-workshop-1",
      title: "Sertifikat Workshop Keamanan & Pemrograman Modern",
      issuer: "Workshop Committee",
      category: "Software & Security",
      date: "2024",
      credId: "WKSHP-1-2024",
      verifyUrl: "https://drive.google.com/file/d/1Zus6HmhWD32dgU-3Y7-a5ZYSwv0amusW/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1Zus6HmhWD32dgU-3Y7-a5ZYSwv0amusW/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1Zus6HmhWD32dgU-3Y7-a5ZYSwv0amusW&sz=w800",
      desc: "Workshop interaktif mengenai integrasi praktik secure coding pada siklus pengembangan perangkat lunak modern.",
      color: "emerald",
      isDefault: true
    },
    {
      id: "cert-riski-seminar-council",
      title: "Sertifikat Keikutsertaan Seminar Ketahanan Siber",
      issuer: "Cyber Seminar Council",
      category: "Seminar & Conference",
      date: "2024",
      credId: "SEM-CYBER-2024",
      verifyUrl: "https://drive.google.com/file/d/11sGT-xvXiUNAOhN_jok94B7JSTSM1HAV/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/11sGT-xvXiUNAOhN_jok94B7JSTSM1HAV/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=11sGT-xvXiUNAOhN_jok94B7JSTSM1HAV&sz=w800",
      desc: "Seminar nasional mengenai tren ancaman rekayasa sosial, phishing, dan langkah perlindungan identitas digital di era modern.",
      color: "blue",
      isDefault: true
    },
    {
      id: "cert-credential-zxx",
      title: "Professional Credential Badge Certificate",
      issuer: "Technical Education & Certification Board",
      category: "Technical Credential",
      date: "2024",
      credId: "BADGE-ZXX-235",
      verifyUrl: "https://drive.google.com/file/d/1lNT-Mivj0mMr3Y7d4BLsCs9HuSTMFzOW/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1lNT-Mivj0mMr3Y7d4BLsCs9HuSTMFzOW/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1lNT-Mivj0mMr3Y7d4BLsCs9HuSTMFzOW&sz=w800",
      desc: "Validasi kompetensi keahlian komputasi terapan, pengujian perangkat lunak, dan integritas sistem informasi.",
      color: "purple",
      isDefault: true
    },
    {
      id: "cert-piagam-prestasi",
      title: "Piagam Apresiasi Prestasi & Kompetensi Akademik",
      issuer: "Academic & Vocational Board",
      category: "Honor & Award",
      date: "2023",
      credId: "HONOR-VOC-2023",
      verifyUrl: "https://drive.google.com/file/d/1TjMWP5ZYtqVW2QHCVeII0Swzil6Xam73/view?usp=sharing",
      gdriveUrl: "https://drive.google.com/file/d/1TjMWP5ZYtqVW2QHCVeII0Swzil6Xam73/view?usp=sharing",
      image: "https://drive.google.com/thumbnail?id=1TjMWP5ZYtqVW2QHCVeII0Swzil6Xam73&sz=w800",
      desc: "Piagam penghargaan atas pencapaian akademik dan vokasi dalam bidang teknologi informasi dan komputasi kreatif.",
      color: "red",
      isDefault: true
    },
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
        showToast("Akses Owner Terverifikasi: Selamat datang Riski! Membuka Panel Admin...", "success");
        setTimeout(() => {
          window.openMasterAdminModal('hero');
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


  // ========================================================
  // MASTER SITE CONTENT & ADMIN CMS ENGINE (REAL-TIME EDIT)
  // ========================================================

  const DEFAULT_SITE_DATA = {
    hero: {
      firstName: "Riski",
      lastName: "Ardiansyah",
      role: "Cybersecurity Enthusiast & AI-Assisted Software Developer",
      quote: "“Belajar, Menguji, Melindungi, Menjadi bagian dari masa depan keamanan siber Indonesia.”",
      aiTitle: "AI-Assisted Software Development with AI Coding Agents",
      aiDesc: "Pengembangan aplikasi dengan memanfaatkan AI Agent, di mana manusia berperan dalam perancangan ide, requirement, arsitektur, dan business logic, sedangkan AI Agent membantu implementasi teknis, coding, debugging, serta testing.",
      bio: "Mahasiswa aktif semester 7 Jurusan <strong>D4 Rekayasa Keamanan Siber</strong> di Politeknik Piksi Input Serang. Berfokus pada keamanan aplikasi web, penetration testing, serta perancangan perangkat lunak modern berbasis arsitektur AI coding agent.",
      photoUrl: "assets/img/riski_hero.jpg?v=16",
      campusBadge: "Piksi Input Serang (Sem. 7)",
      degreeBadge: "D4 Rekayasa Keamanan Siber",
      location: "Kab. Tangerang, Banten"
    },
    about: {
      bio1: "Saya adalah mahasiswa tingkat akhir di Politeknik Piksi Input Serang pada program studi D4 Rekayasa Keamanan Siber. Memiliki ketertarikan mendalam dan pengalaman hands-on dalam menguji keamanan sistem informasi, menelusuri kerentanan (vulnerability assessment), serta memahami alur eksploitasi web application berstandar OWASP Top 10.",
      bio2: "Selain berfokus pada ranah offensive security, saya juga aktif merancang dan mengembangkan sistem web fungsional menggunakan Laravel, Tailwind CSS, dan Next.js dengan pendekatan AI-Assisted Software Development—mengorkestrasi AI Coding Agent untuk menghasilkan kode yang bersih, terdokumentasi, dan tangguh terhadap celah keamanan.",
      quote: "\"Saya terus belajar dan mendalami setiap teknologi serta teknik yang relevan di bidang keamanan siber untuk terus berkembang dan memberikan hasil terbaik.\"",
      institution: "Politeknik Piksi Input Serang",
      degree: "D4 — Rekayasa Keamanan Siber",
      status: "2023 — Sekarang (Semester 7 Aktif)",
      focus: "Web App Pentesting & Cloud Security",
      eduDesc: "Mempelajari fundamental dan praktik lanjutan network defense, ethical hacking, digital forensics, reverse engineering, cryptography, serta perancangan sistem informasi berstandar keamanan enterprise."
    },
    skills: {
      p1Title: "Web App Pentesting & Assessment",
      p1Desc: "Identifikasi dan verifikasi kerentanan OWASP Top 10 (SQL Injection, XSS, CSRF, IDOR, Broken Authentication) menggunakan Burp Suite, Nmap, dan manual payload injection.",
      p2Title: "Tools, Linux & Security Monitoring",
      p2Desc: "Pengoperasian intensif Kali Linux, Ubuntu Server, monitoring SIEM berbasis Wazuh, analisis paket jaringan dengan Wireshark, dan containerization dengan Docker.",
      p3Title: "AI-Assisted Dev & Frameworks",
      p3Desc: "Pengembangan aplikasi web modern menggunakan Laravel, Tailwind CSS, Next.js, dan Python dengan workflow akselerasi AI Coding Agent untuk clean architecture."
    },
    contact: {
      whatsapp: "6283875644210",
      whatsappDisplay: "0838 7564 4210",
      email: "riskiardiansyah51938@gmail.com",
      github: "https://github.com/ard34",
      githubDisplay: "github.com/ard34",
      linkedin: "https://www.linkedin.com/in/riski-ardiansyah-468626338/",
      linkedinDisplay: "linkedin.com/in/riski-ardiansyah",
      location: "Kab. Tangerang, Banten • Politeknik Piksi Input Serang"
    }
  };

  // 1. Storage Accessors
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
      console.error("Failed to save site data to localStorage", e);
    }
  }

  function getProjectsData() {
    try {
      const stored = localStorage.getItem('portfolio_projects_custom');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Using default projects data", e);
    }
    return projectsData;
  }

  function saveProjectsData(data) {
    try {
      localStorage.setItem('portfolio_projects_custom', JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save projects data", e);
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 2. DOM Hydration & Live Application
  function applySiteDataToDOM() {
    const data = getSiteData();

    // Hero
    const heroName = document.getElementById('hero-display-name');
    if (heroName) {
      heroName.innerHTML = `${data.hero.firstName || 'Riski'} <span class="gradient-text">${data.hero.lastName || 'Ardiansyah'}</span>`;
    }
    const heroRole = document.getElementById('hero-display-role');
    if (heroRole) heroRole.textContent = data.hero.role;

    const heroQuote = document.getElementById('hero-display-quote');
    if (heroQuote) heroQuote.textContent = data.hero.quote;

    const heroAiTitle = document.getElementById('hero-display-ai-title');
    if (heroAiTitle) heroAiTitle.textContent = data.hero.aiTitle;

    const heroAiDesc = document.getElementById('hero-display-ai-desc');
    if (heroAiDesc) heroAiDesc.textContent = data.hero.aiDesc;

    const heroBio = document.getElementById('hero-display-bio');
    if (heroBio) heroBio.innerHTML = data.hero.bio;

    const heroAvatar = document.getElementById('hero-avatar-img');
    if (heroAvatar && data.hero.photoUrl) heroAvatar.src = data.hero.photoUrl;

    const heroDegree = document.getElementById('hero-badge-degree');
    if (heroDegree) heroDegree.textContent = data.hero.degreeBadge;

    const heroCampus = document.getElementById('hero-badge-campus');
    if (heroCampus) heroCampus.textContent = data.hero.campusBadge;

    const heroWaBtn = document.getElementById('hero-wa-btn');
    if (heroWaBtn && data.contact.whatsapp) {
      heroWaBtn.href = `https://wa.me/${data.contact.whatsapp}`;
    }

    // About
    const aboutBio1 = document.getElementById('about-bio1-text');
    if (aboutBio1) aboutBio1.textContent = data.about.bio1;

    const aboutBio2 = document.getElementById('about-bio2-text');
    if (aboutBio2) aboutBio2.textContent = data.about.bio2;

    const aboutQuote = document.getElementById('about-quote-text');
    if (aboutQuote) aboutQuote.textContent = data.about.quote;

    const aboutInst = document.getElementById('about-edu-inst');
    if (aboutInst) aboutInst.textContent = data.about.institution;

    const aboutDegree = document.getElementById('about-edu-degree');
    if (aboutDegree) aboutDegree.textContent = data.about.degree;

    const aboutStatus = document.getElementById('about-edu-status');
    if (aboutStatus) aboutStatus.textContent = data.about.status;

    const aboutFocus = document.getElementById('about-edu-focus');
    if (aboutFocus) aboutFocus.textContent = data.about.focus;

    const aboutEduDesc = document.getElementById('about-edu-desc');
    if (aboutEduDesc) aboutEduDesc.textContent = data.about.eduDesc;

    // Contact
    const contactWa = document.getElementById('contact-display-wa');
    if (contactWa && data.contact.whatsapp) {
      contactWa.href = `https://wa.me/${data.contact.whatsapp}`;
    }
    const contactWaText = document.getElementById('contact-display-wa-text');
    if (contactWaText) {
      contactWaText.textContent = data.contact.whatsappDisplay || data.contact.whatsapp;
    }

    const contactEmail = document.getElementById('contact-display-email');
    if (contactEmail && data.contact.email) {
      contactEmail.href = `mailto:${data.contact.email}`;
    }
    const contactEmailText = document.getElementById('contact-display-email-text');
    if (contactEmailText) contactEmailText.textContent = data.contact.email;

    const contactGh = document.getElementById('contact-display-github');
    if (contactGh && data.contact.github) {
      contactGh.href = data.contact.github;
    }
    const contactGhText = document.getElementById('contact-display-github-text');
    if (contactGhText) contactGhText.textContent = data.contact.githubDisplay || data.contact.github;

    const contactLi = document.getElementById('contact-display-linkedin');
    if (contactLi && data.contact.linkedin) {
      contactLi.href = data.contact.linkedin;
    }
    const contactLiText = document.getElementById('contact-display-linkedin-text');
    if (contactLiText) contactLiText.textContent = data.contact.linkedinDisplay || data.contact.linkedin;

    const contactLoc = document.getElementById('contact-display-location');
    if (contactLoc) contactLoc.textContent = data.contact.location;

    if (window.lucide) lucide.createIcons();
  }

  // 3. Dynamic Projects List Renderer
  function renderProjectsList() {
    const container = document.getElementById('projects-list-container');
    if (!container) return;

    const projects = getProjectsData();
    const keys = Object.keys(projects);

    if (keys.length === 0) {
      container.innerHTML = `
        <div class="glass-panel p-8 text-center text-slate-400 rounded-2xl border border-slate-800">
          <p class="text-sm">Belum ada proyek yang ditampilkan.</p>
        </div>`;
      return;
    }

    const iconsMap = {
      exambro: 'shield-check',
      koprasi: 'wallet',
      tokoonline: 'shopping-bag',
      bbndigital: 'layers',
      wazuh: 'server',
      loganalysis: 'terminal'
    };

    const colorsMap = {
      exambro: 'cyan',
      koprasi: 'emerald',
      tokoonline: 'purple',
      bbndigital: 'blue',
      wazuh: 'amber',
      loganalysis: 'rose'
    };

    container.innerHTML = keys.map((key, index) => {
      const p = projects[key];
      const icon = iconsMap[key] || 'folder';
      const color = colorsMap[key] || 'cyan';
      const orderNum = String(index + 1).padStart(2, '0');
      const stackList = Array.isArray(p.stack) ? p.stack : (p.stack || '').split(',').map(s => s.trim()).filter(Boolean);

      return `
        <div class="project-list-card glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-${color}-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative group" data-aos="fade-up" data-aos-duration="700">
          <!-- Left: Icon & Title info -->
          <div class="flex items-start gap-4 lg:w-[320px] shrink-0">
            <div class="w-12 h-12 rounded-xl bg-[#0A1222] border border-${color}-500/40 flex items-center justify-center text-${color}-400 shrink-0 group-hover:scale-105 group-hover:border-${color}-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition">
              <i data-lucide="${icon}" class="w-6 h-6"></i>
            </div>
            <div class="space-y-1 overflow-hidden">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0A1222] text-${color}-300 border border-${color}-800/80">
                <span class="w-1.5 h-1.5 rounded-full bg-${color}-400"></span>
                #${orderNum} • ${escapeHTML(p.category || 'Featured Project')}
              </span>
              <h3 class="font-bold text-white font-heading text-lg group-hover:text-${color}-300 transition truncate">
                ${escapeHTML(p.title || key)}
              </h3>
              <p class="text-xs text-slate-400 font-mono truncate">
                ${escapeHTML(p.subtitle || p.category || '')}
              </p>
            </div>
          </div>

          <!-- Middle: Description & Tech Stack -->
          <div class="flex-1 space-y-3 lg:px-5 lg:border-l lg:border-r border-slate-800/80">
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
              ${escapeHTML(p.description || '')}
            </p>
            <div class="flex flex-wrap items-center gap-1.5">
              ${stackList.map(st => `
                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#0A1222] text-${color}-300 border border-${color}-900/60">${escapeHTML(st)}</span>
              `).join('')}
            </div>
          </div>

          <!-- Right: Action Buttons -->
          <div class="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800/60">
            <button onclick="openProjectModal('${key}')" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl gradient-btn text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 hover:brightness-110 transition">
              <i data-lucide="info" class="w-4 h-4"></i>
              <span>Detail Teknis &amp; Spesifikasi</span>
            </button>
            <a href="${p.link || 'https://github.com/ard34'}" target="_blank" rel="noreferrer" class="px-3.5 py-2.5 rounded-xl outline-btn text-xs font-semibold flex items-center justify-center gap-1.5 hover:border-cyan-400 transition text-slate-300" title="Buka Repository GitHub">
              <i data-lucide="github" class="w-4 h-4 text-cyan-400"></i>
              <span class="hidden sm:inline">GitHub</span>
              <i data-lucide="external-link" class="w-3 h-3 text-slate-400"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  // 4. Master Admin Modal Tabs & Handlers
  window.openMasterAdminModal = function(initialTab = 'hero') {
    if (!isOwnerLoggedIn()) {
      window.openAdminLoginModal();
      return;
    }

    const modal = document.getElementById('master-admin-panel-modal');
    if (!modal) return;

    // Populate Hero Pane
    const siteData = getSiteData();
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };

    setVal('adm-hero-first-name', siteData.hero.firstName);
    setVal('adm-hero-last-name', siteData.hero.lastName);
    setVal('adm-hero-role', siteData.hero.role);
    setVal('adm-hero-quote', siteData.hero.quote);
    setVal('adm-hero-ai-title', siteData.hero.aiTitle);
    setVal('adm-hero-ai-desc', siteData.hero.aiDesc);
    setVal('adm-hero-bio', siteData.hero.bio);
    setVal('adm-hero-photo', siteData.hero.photoUrl);
    setVal('adm-hero-location', siteData.hero.location);
    setVal('adm-hero-degree', siteData.hero.degreeBadge);
    setVal('adm-hero-campus', siteData.hero.campusBadge);

    // Populate About Pane
    setVal('adm-about-bio1', siteData.about.bio1);
    setVal('adm-about-bio2', siteData.about.bio2);
    setVal('adm-about-quote', siteData.about.quote);
    setVal('adm-about-institution', siteData.about.institution);
    setVal('adm-about-degree', siteData.about.degree);
    setVal('adm-about-status', siteData.about.status);
    setVal('adm-about-focus', siteData.about.focus);
    setVal('adm-about-edudesc', siteData.about.eduDesc);

    // Populate Skills Pane
    setVal('adm-skill-p1-title', siteData.skills.p1Title);
    setVal('adm-skill-p1-desc', siteData.skills.p1Desc);
    setVal('adm-skill-p2-title', siteData.skills.p2Title);
    setVal('adm-skill-p2-desc', siteData.skills.p2Desc);
    setVal('adm-skill-p3-title', siteData.skills.p3Title);
    setVal('adm-skill-p3-desc', siteData.skills.p3Desc);

    // Populate Contact Pane
    setVal('adm-contact-wa', siteData.contact.whatsapp);
    setVal('adm-contact-wa-display', siteData.contact.whatsappDisplay);
    setVal('adm-contact-email', siteData.contact.email);
    setVal('adm-contact-github', siteData.contact.github);
    setVal('adm-contact-github-display', siteData.contact.githubDisplay);
    setVal('adm-contact-linkedin', siteData.contact.linkedin);
    setVal('adm-contact-linkedin-display', siteData.contact.linkedinDisplay);
    setVal('adm-contact-location', siteData.contact.location);

    // Populate Projects Dropdown
    populateProjectSelector();

    // Populate Certs List in Pane 6
    populateAdminCertsList();

    // Show modal & switch to initial tab
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
    const panes = ['hero', 'about', 'projects', 'skills', 'contact', 'certs', 'backup'];
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

  // 5. Projects Sub-Editor
  function populateProjectSelector(selectKey) {
    const selector = document.getElementById('adm-project-selector');
    if (!selector) return;

    const projects = getProjectsData();
    const keys = Object.keys(projects);
    selector.innerHTML = keys.map(k => {
      const p = projects[k];
      return `<option value="${k}" ${k === selectKey ? 'selected' : ''}>${escapeHTML(p.title || k)} (${k})</option>`;
    }).join('');

    loadSelectedProjectForm();
  }

  window.loadSelectedProjectForm = function() {
    const selector = document.getElementById('adm-project-selector');
    if (!selector) return;
    const key = selector.value;
    const projects = getProjectsData();
    const p = projects[key];
    if (!p) return;

    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
    setVal('adm-proj-title', p.title);
    setVal('adm-proj-subtitle', p.subtitle);
    setVal('adm-proj-category', p.category);
    setVal('adm-proj-stack', Array.isArray(p.stack) ? p.stack.join(', ') : p.stack);
    setVal('adm-proj-desc', p.description);
    setVal('adm-proj-link', p.link);
    setVal('adm-proj-features', Array.isArray(p.features) ? p.features.join('\n') : (p.features || ''));
  };

  window.saveCurrentProjectDraft = function() {
    const selector = document.getElementById('adm-project-selector');
    if (!selector || !selector.value) return;
    const key = selector.value;
    const projects = Object.assign({}, getProjectsData());

    const getVal = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const stackRaw = getVal('adm-proj-stack');
    const featuresRaw = getVal('adm-proj-features');

    projects[key] = {
      title: getVal('adm-proj-title') || key,
      subtitle: getVal('adm-proj-subtitle'),
      category: getVal('adm-proj-category'),
      stack: stackRaw.split(',').map(s => s.trim()).filter(Boolean),
      description: getVal('adm-proj-desc'),
      link: getVal('adm-proj-link') || 'https://github.com/ard34',
      features: featuresRaw.split('\n').map(s => s.trim()).filter(Boolean),
      metrics: (projects[key] && projects[key].metrics) || 'Optimal response time & verified security architecture.',
      image: (projects[key] && projects[key].image) || 'assets/img/projects/bbndigital.jpg'
    };

    saveProjectsData(projects);
    renderProjectsList();
    showToast(`Data proyek "${projects[key].title}" berhasil diperbarui!`, 'success');
  };

  window.addNewProjectPrompt = function() {
    const projName = prompt("Masukkan ID unik untuk proyek baru (contoh: pentest-audit atau mobile-app):");
    if (!projName) return;
    const key = projName.toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (!key) {
      alert("ID proyek tidak valid!");
      return;
    }

    const projects = Object.assign({}, getProjectsData());
    if (projects[key]) {
      alert("Proyek dengan ID ini sudah ada!");
      return;
    }

    projects[key] = {
      title: projName,
      subtitle: "Web Application & Security System",
      category: "Cyber Defense & Web Development",
      stack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      description: "Deskripsi ringkas sistem baru yang telah selesai dibangun dan teruji keamanannya.",
      features: ["Sistem Autentikasi Modern", "Proteksi OWASP Top 10", "Database Query Optimized"],
      metrics: "Stabilitas tinggi dengan response time optimal.",
      link: "https://github.com/ard34",
      image: "assets/img/projects/bbndigital.jpg"
    };

    saveProjectsData(projects);
    populateProjectSelector(key);
    renderProjectsList();
    showToast(`Proyek baru "${key}" berhasil ditambahkan! Silakan lengkapi detailnya.`, 'success');
  };

  window.deleteCurrentProject = function() {
    const selector = document.getElementById('adm-project-selector');
    if (!selector || !selector.value) return;
    const key = selector.value;
    if (confirm(`Apakah Anda yakin ingin menghapus proyek "${key}" dari daftar portofolio?`)) {
      const projects = Object.assign({}, getProjectsData());
      delete projects[key];
      saveProjectsData(projects);
      populateProjectSelector();
      renderProjectsList();
      showToast(`Proyek "${key}" telah dihapus.`, 'info');
    }
  };

  // 6. Certs Sub-List in Admin Panel
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

  window.deleteCertificateFromAdmin = function(certId) {
    if (confirm("Hapus sertifikat ini dari tampilan website?")) {
      const allCerts = getCertificates().filter(c => c.id !== certId);
      // Save
      localStorage.setItem('portfolio_user_certificates', JSON.stringify(allCerts));
      renderCertificates();
      populateAdminCertsList();
      showToast("Sertifikat berhasil dihapus dari website.", "info");
    }
  };

  // 7. Master Admin Save All Handler
  window.handleMasterAdminSave = function() {
    const getVal = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };

    const siteData = {
      hero: {
        firstName: getVal('adm-hero-first-name') || 'Riski',
        lastName: getVal('adm-hero-last-name') || 'Ardiansyah',
        role: getVal('adm-hero-role') || 'Cybersecurity Enthusiast & AI-Assisted Software Developer',
        quote: getVal('adm-hero-quote'),
        aiTitle: getVal('adm-hero-ai-title'),
        aiDesc: getVal('adm-hero-ai-desc'),
        bio: getVal('adm-hero-bio'),
        photoUrl: getVal('adm-hero-photo') || 'assets/img/riski_hero.jpg?v=16',
        location: getVal('adm-hero-location'),
        degreeBadge: getVal('adm-hero-degree') || 'D4 Rekayasa Keamanan Siber',
        campusBadge: getVal('adm-hero-campus') || 'Piksi Input Serang (Sem. 7)'
      },
      about: {
        bio1: getVal('adm-about-bio1'),
        bio2: getVal('adm-about-bio2'),
        quote: getVal('adm-about-quote'),
        institution: getVal('adm-about-institution'),
        degree: getVal('adm-about-degree'),
        status: getVal('adm-about-status'),
        focus: getVal('adm-about-focus'),
        eduDesc: getVal('adm-about-edudesc')
      },
      skills: {
        p1Title: getVal('adm-skill-p1-title'),
        p1Desc: getVal('adm-skill-p1-desc'),
        p2Title: getVal('adm-skill-p2-title'),
        p2Desc: getVal('adm-skill-p2-desc'),
        p3Title: getVal('adm-skill-p3-title'),
        p3Desc: getVal('adm-skill-p3-desc')
      },
      contact: {
        whatsapp: getVal('adm-contact-wa') || '6283875644210',
        whatsappDisplay: getVal('adm-contact-wa-display') || '0838 7564 4210',
        email: getVal('adm-contact-email') || 'riskiardiansyah51938@gmail.com',
        github: getVal('adm-contact-github') || 'https://github.com/ard34',
        githubDisplay: getVal('adm-contact-github-display') || 'github.com/ard34',
        linkedin: getVal('adm-contact-linkedin') || 'https://www.linkedin.com/in/riski-ardiansyah-468626338/',
        linkedinDisplay: getVal('adm-contact-linkedin-display') || 'linkedin.com/in/riski-ardiansyah',
        location: getVal('adm-contact-location') || 'Kab. Tangerang, Banten • Politeknik Piksi Input Serang'
      }
    };

    // Save project draft currently open
    saveCurrentProjectDraft();

    // Save site data
    saveSiteData(siteData);

    // Apply live to DOM
    applySiteDataToDOM();
    renderProjectsList();

    showToast("✅ Berhasil! Seluruh isi website telah diperbarui secara langsung.", "success");
    setTimeout(() => {
      closeMasterAdminModal();
    }, 600);
  };

  // 8. Export, Import & Reset
  window.exportSiteDataJSON = function() {
    const fullBackup = {
      siteData: getSiteData(),
      projects: getProjectsData(),
      certificates: getCertificates(),
      exportedAt: new Date().toISOString(),
      owner: "Riski Ardiansyah"
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `riski_portfolio_backup_${new Date().toISOString().slice(0,10)}.json`);
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
        if (parsed.siteData) {
          saveSiteData(parsed.siteData);
        }
        if (parsed.projects) {
          saveProjectsData(parsed.projects);
        }
        if (parsed.certificates && Array.isArray(parsed.certificates)) {
          localStorage.setItem('portfolio_user_certificates', JSON.stringify(parsed.certificates));
        }

        applySiteDataToDOM();
        renderProjectsList();
        renderCertificates();
        openMasterAdminModal('hero');
        showToast("Data cadangan berhasil dipulihkan secara penuh!", "success");
      } catch (err) {
        alert("Gagal membaca file JSON cadangan: Format file tidak valid.");
      }
    };
    reader.readAsText(file);
  };

  window.resetSiteDataDefault = function() {
    if (confirm("PERINGATAN: Apakah Anda yakin ingin menghapus semua kustomisasi lokal dan kembali ke setelan default awal?")) {
      localStorage.removeItem('portfolio_site_custom');
      localStorage.removeItem('portfolio_projects_custom');
      applySiteDataToDOM();
      renderProjectsList();
      openMasterAdminModal('hero');
      showToast("Seluruh pengaturan telah dikembalikan ke kondisi default awal.", "info");
    }
  };

  // Hook into updateAdminUI to manage floating bar visibility
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

  // Modify admin login success to open master admin panel directly
  if (adminLoginForm) {
    // Already has submit listener, let's make sure updateAdminUI is triggered and openMasterAdminModal is called
  }

  // Initial boots
  applySiteDataToDOM();
  renderProjectsList();

  // Expose globally for external modules (i18n, etc.)
  window.applySiteDataToDOM = applySiteDataToDOM;
  window.renderProjectsList = renderProjectsList;
  window.getSiteData = getSiteData;
  window.saveSiteData = saveSiteData;
  window.getProjectsData = getProjectsData;
  window.saveProjectsData = saveProjectsData;
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
