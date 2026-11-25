// i18n Translation Engine for Riski Ardiansyah Portfolio
// Supported languages: 'id' (Bahasa Indonesia) and 'en' (English)

const translations = {
  id: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.certificates": "Certificates",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.preview_cv": "Preview CV",
    "nav.download_cv": "Download CV",

    // Mobile Drawer
    "mobile.title_role": "D4 Rekayasa Keamanan Siber",
    "mobile.home": "Home",
    "mobile.about": "Tentang Saya & Pendidikan",
    "mobile.skills": "Keahlian & Tools",
    "mobile.projects": "Proyek Portfolio",
    "mobile.experience": "Pengalaman & Perjalanan Belajar",
    "mobile.certificates": "Sertifikasi & Program",
    "mobile.blog": "Blog & Writeups",
    "mobile.contact": "Kontak",
    "mobile.preview_cv": "Preview CV Resmi",
    "mobile.download_cv": "Unduh CV (Gambar Asli)",
    "mobile.dual_view": "Dual Desktop / Mobile Frame View",

    // Hero Section
    "hero.badge": "Cybersecurity Enthusiast • Web App Testing",
    "hero.greeting": "Halo, Saya",
    "hero.role": "Cybersecurity Enthusiast & AI-Assisted Software Developer",
    "hero.quote": "“Belajar, Menguji, Melindungi, Menjadi bagian dari masa depan keamanan siber Indonesia.”",
    "hero.ai_title": "AI-Assisted Software Development with AI Coding Agents",
    "hero.ai_desc": "Pengembangan aplikasi dengan memanfaatkan AI Agent, di mana manusia berperan dalam perancangan ide, requirement, arsitektur, dan business logic, sedangkan AI Agent membantu implementasi teknis, coding, debugging, serta testing.",
    "hero.bio": "Mahasiswa aktif semester 7 Jurusan <strong>D4 Rekayasa Keamanan Siber</strong> di Politeknik Piksi Input Serang. Berfokus pada keamanan aplikasi web, penetration testing, serta perancangan perangkat lunak modern berbasis arsitektur AI coding agent.",
    "hero.btn_projects": "View My Projects",
    "hero.btn_cv": "Preview CV",
    "hero.btn_wa": "WhatsApp Me",
    "hero.connect": "Connect:",
    "hero.location": "Kab. Tangerang, Banten",
    "hero.badge_degree": "D4 Rekayasa Keamanan Siber",
    "hero.badge_campus": "Piksi Input Serang (Sem. 7)",

    // About Section
    "about.badge": "01 // TENTANG SAYA",
    "about.title": "Dedikasi untuk Keamanan Informasi & Rekayasa Perangkat Lunak",
    "about.subtitle": "Mengkombinasikan ketajaman analisis keamanan web, ketelitian audit kerentanan, dan efisiensi rekayasa perangkat lunak modern berbasis AI Coding Agent.",
    "about.bio1": "Saya adalah mahasiswa tingkat akhir di Politeknik Piksi Input Serang pada program studi D4 Rekayasa Keamanan Siber. Memiliki ketertarikan mendalam dan pengalaman hands-on dalam menguji keamanan sistem informasi, menelusuri kerentanan (vulnerability assessment), serta memahami alur eksploitasi web application berstandar OWASP Top 10.",
    "about.bio2": "Selain berfokus pada ranah offensive security, saya juga aktif merancang dan mengembangkan sistem web fungsional menggunakan Laravel, Tailwind CSS, dan Next.js dengan pendekatan AI-Assisted Software Development—mengorkestrasi AI Coding Agent untuk menghasilkan kode yang bersih, terdokumentasi, dan tangguh terhadap celah keamanan.",
    "about.edu_heading": "Pendidikan Formal",
    "about.edu_institution": "Politeknik Piksi Input Serang",
    "about.edu_degree": "D4 — Rekayasa Keamanan Siber",
    "about.edu_status": "2023 — Sekarang (Semester 7 Aktif)",
    "about.edu_desc": "Mempelajari fundamental dan praktik lanjutan network defense, ethical hacking, digital forensics, reverse engineering, cryptography, serta perancangan sistem informasi berstandar keamanan enterprise.",
    "about.edu_gpa_label": "IPK Terakhir",
    "about.edu_focus_label": "Fokus Studi",
    "about.edu_focus_val": "Web App Pentesting & Cloud Security",
    "about.highlights_title": "Nilai Utama & Etos Kerja",
    "about.hl1_title": "Ethics & Integrity First",
    "about.hl1_desc": "Menjunjung tinggi kode etik profesional dalam setiap pengujian keamanan dan kepatuhan hukum siber.",
    "about.hl2_title": "Continuous Learning & Research",
    "about.hl2_desc": "Selalu memperbarui pengetahuan terkait threat landscape terbaru, CVE harian, dan teknik mitigasi proaktif.",
    "about.hl3_title": "AI Synergy & Engineering Speed",
    "about.hl3_desc": "Mengakselerasi penyelesaian masalah dan pengujian kode secara presisi menggunakan ekosistem agen AI cerdas.",

    // Skills Section
    "skills.badge": "02 // KEAHLIAN & TEKNOLOGI",
    "skills.title": "Pilar Keahlian & Tech Stack",
    "skills.subtitle": "Kombinasi kompetensi pengujian keamanan ofensif, arsitektur pertahanan, serta implementasi perangkat lunak cerdas.",
    "skills.p1_title": "Web App Pentesting & Assessment",
    "skills.p1_desc": "Identifikasi dan verifikasi kerentanan OWASP Top 10 (SQL Injection, XSS, CSRF, IDOR, Broken Authentication) menggunakan Burp Suite, Nmap, dan manual payload injection.",
    "skills.p2_title": "Tools, Linux & Security Monitoring",
    "skills.p2_desc": "Pengoperasian intensif Kali Linux, Ubuntu Server, monitoring SIEM berbasis Wazuh, analisis paket jaringan dengan Wireshark, dan containerization dengan Docker.",
    "skills.p3_title": "AI-Assisted Dev & Frameworks",
    "skills.p3_desc": "Pengembangan aplikasi web modern menggunakan Laravel, Tailwind CSS, Next.js, dan Python dengan workflow akselerasi AI Coding Agent untuk clean architecture.",
    "skills.matrix_title": "Matriks Alat & Perangkat Kerja",
    "skills.matrix_subtitle": "Seluruh tool dan ekosistem yang digunakan secara profesional dalam operasional harian.",
    "skills.tab_all": "Semua",
    "skills.tab_sec": "Security & Pentesting",
    "skills.tab_dev": "Development & Web",
    "skills.tab_ai": "AI & Agent Tools",
    "skills.tab_os": "OS & Infrastructure",

    // Projects Section
    "projects.badge": "03 // PORTOFOLIO KARYA",
    "projects.title": "Proyek Pilihan & Hasil Karya Digital",
    "projects.subtitle": "Sistem aplikasi web nyata, platform CBT sekolah, POS pesantren, dan arsitektur pengujian keamanan yang telah berhasil dibangun.",
    "projects.btn_view_live": "Buka Hasil Karya",
    "projects.btn_details": "Detail Teknis",
    "projects.cta_box_title": "Kunjungi Etalase Portofolio Lengkap",
    "projects.cta_box_desc": "Seluruh hasil karya sistem digital, aplikasi web production, dan rilis proyek terbaru saya dirangkum secara lengkap di portal BBN Digital Forge.",
    "projects.cta_box_btn": "Buka Semua Portofolio di BBN Digital Forge",

    // Experience Section
    "experience.badge": "04 // PERJALANAN & PENGALAMAN",
    "experience.title": "Jejak Langkah & Rekam Prestasi",
    "experience.subtitle": "Pengalaman kegiatan keamanan siber, kepesertaan strategis nasional, dan pelatihan intensif yang membentuk dedikasi profesional.",
    "exp.e1_role": "Peserta VVIP Agenda Ketahanan Siber",
    "exp.e1_inst": "BSSN Region Jawa Tengah",
    "exp.e1_date": "2026 • Resmi",
    "exp.e1_desc": "Terpilih sebagai peserta VVIP dalam forum strategis Badan Siber dan Sandi Negara (BSSN) Region Jawa Tengah, berdiskusi mengenai pengamanan infrastruktur kritis dan kesiapan regulasi nasional.",
    "exp.e2_role": "Certified Red Team Operations Management (CRTOM)",
    "exp.e2_inst": "Red Team Professional Board",
    "exp.e2_date": "2026 • Kredensial Lanjutan",
    "exp.e2_desc": "Menyelesaikan program sertifikasi CRTOM yang menguji kapabilitas perancangan adversary emulation, taktik red teaming terkoordinasi, dan strategi bypass pertahanan terukur.",
    "exp.e3_role": "Peserta Beasiswa Bootcamp Cyber Security (3 Bulan)",
    "exp.e3_inst": "IDNetworkers (IDN)",
    "exp.e3_date": "2025 • Program Intensif",
    "exp.e3_desc": "Mengikuti pelatihan komprehensif selama 3 bulan penuh mencakup packet analysis, network defense, Linux server hardening, dan simulasi penyerangan web aplikasi.",
    "exp.e4_role": "Lead Developer & Security Implementer",
    "exp.e4_inst": "BBN Digital Forge & Mitra Proyek",
    "exp.e4_date": "2024 — Sekarang",
    "exp.e4_desc": "Memimpin perancangan arsitektur perangkat lunak aman untuk berbagai klien, termasuk sistem CBT ExamBro anti-curang dan platform pembayaran kasir santri.",

    // Certificates Section
    "certs.badge": "05 // SERTIFIKASI & KREDENSIAL",
    "certs.title": "Sertifikat Terverifikasi & Rekognisi",
    "certs.subtitle": "Daftar kredensial resmi dari lembaga nasional, akademi keamanan siber, dan program keikutsertaan profesional.",
    "certs.btn_add": "Tambah Sertifikat",
    "certs.btn_view_detail": "Lihat Detail",
    "certs.badge_verified": "Verified GDrive",
    "certs.badge_user_added": "User Added",
    "certs.organizer": "Penyelenggara:",
    "certs.year": "Tahun:",

    // Blog Section
    "blog.badge": "06 // INSIGHT & WRITEUPS",
    "blog.title": "Artikel Teknis & Analisis Keamanan",
    "blog.subtitle": "Catatan penelitian, writeup kerentanan, dan perspektif seputar tren keamanan siber terkini.",
    "blog.b1_badge": "Offensive Security",
    "blog.b1_title": "Memahami Anatomi IDOR pada Aplikasi Web Modern",
    "blog.b1_desc": "Bedah teknis kerentanan Insecure Direct Object References: bagaimana penyerang memanipulasi parameter request dan langkah mitigasi berbasis validasi otoritas di level query.",
    "blog.b2_badge": "Defensive & SOC",
    "blog.b2_title": "Membangun Lab SIEM Wazuh Mandiri dengan Docker Compose",
    "blog.b2_desc": "Panduan langkah demi langkah mengkonfigurasi Wazuh Manager, Indexer, dan Dashboard di Ubuntu Server untuk mendeteksi serangan brute force SSH secara instan.",
    "blog.b3_badge": "AI & Software Eng",
    "blog.b3_title": "Workflow AI Coding Agent: Antara Kecepatan dan Validasi Keamanan",
    "blog.b3_desc": "Strategi mempekerjakan AI coding assistant tanpa mengorbankan keamanan kode: pentingnya review manual, dependency check, dan input sanitization.",
    "blog.read_more": "Baca Selengkapnya",

    // Contact Section
    "contact.badge": "07 // HUBUNGI SAYA",
    "contact.title": "Mari Berkolaborasi & Berdiskusi",
    "contact.subtitle": "Terbuka untuk peluang karir di bidang penetration testing, konsultasi keamanan sistem, atau kolaborasi proyek perangkat lunak.",
    "contact.email_label": "Email Resmi",
    "contact.wa_label": "WhatsApp Langsung",
    "contact.loc_label": "Domisili & Lokasi",
    "contact.loc_val": "Kab. Tangerang, Banten, Indonesia",
    "contact.status_label": "Status Ketersediaan",
    "contact.status_val": "Terbuka untuk Proyek & Magang (Aktif)",
    "contact.form_title": "Kirimkan Pesan Langsung",
    "contact.form_name": "Nama Lengkap",
    "contact.form_name_ph": "Masukkan nama Anda",
    "contact.form_email": "Alamat Email",
    "contact.form_email_ph": "nama@domain.com",
    "contact.form_subject": "Subjek Diskusi",
    "contact.form_subject_ph": "Contoh: Diskusi Pengujian Keamanan Web / Peluang Kerja",
    "contact.form_message": "Pesan Anda",
    "contact.form_message_ph": "Tuliskan detail pesan, kebutuhan proyek, atau pertanyaan Anda di sini...",
    "contact.btn_send": "Kirim Pesan Sekarang",
    "contact.msg_sent_title": "Pesan Berhasil Terkirim!",
    "contact.msg_sent_desc": "Terima kasih telah menghubungi saya. Saya akan segera membalas email Anda secepat mungkin.",

    // Footer
    "footer.role": "D4 Rekayasa Keamanan Siber • Politeknik Piksi Input Serang",
    "footer.tagline": "“Belajar, Menguji, Melindungi, Menjadi bagian dari masa depan keamanan siber Indonesia.”",
    "footer.rights": "Hak Cipta Dilindungi Undang-Undang.",
    "footer.top": "Kembali ke Atas",

    // Modals
    "modal.project_features": "Fitur & Keunggulan Utama",
    "modal.project_impact": "Dampak & Metrik Kinerja",
    "modal.project_view": "Buka Hasil Karya di BBN Digital Forge",
    "modal.project_close": "Tutup",
    "modal.cert_organizer": "Penyelenggara:",
    "modal.cert_date": "Tanggal / Tahun:",
    "modal.cert_cat": "Kategori:",
    "modal.cert_credid": "ID Kredensial:",
    "modal.cert_open_gdrive": "Buka Dokumen di Google Drive",
    "modal.cert_open_verify": "Buka Tautan Verifikasi",
    "modal.cert_close": "Tutup Detail",
    "modal.add_cert_title": "Tambah Sertifikat Baru",
    "modal.add_cert_name": "Nama / Judul Sertifikat",
    "modal.add_cert_org": "Penerbit / Penyelenggara",
    "modal.add_cert_cat": "Kategori Bidang",
    "modal.add_cert_year": "Tahun Perolehan",
    "modal.add_cert_cred": "ID Kredensial (Opsional)",
    "modal.add_cert_link": "Link Dokumen / GDrive",
    "modal.add_cert_img": "Link Gambar Thumbnail (Opsional)",
    "modal.add_cert_desc": "Deskripsi Ringkas",
    "modal.add_cert_save": "Simpan Sertifikat",
    "modal.add_cert_cancel": "Batal",
    "modal.cv_title": "Curriculum Vitae Resmi — Riski Ardiansyah",
    "modal.cv_download": "Unduh Berkas Gambar Asli",
    "modal.cv_close": "Tutup Preview"
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.certificates": "Certificates",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.preview_cv": "Preview CV",
    "nav.download_cv": "Download CV",

    // Mobile Drawer
    "mobile.title_role": "Bachelor of Applied Cybersecurity",
    "mobile.home": "Home",
    "mobile.about": "About Me & Education",
    "mobile.skills": "Skills & Tech Stack",
    "mobile.projects": "Portfolio Projects",
    "mobile.experience": "Experience & Learning Journey",
    "mobile.certificates": "Certifications & Credentials",
    "mobile.blog": "Blog & Writeups",
    "mobile.contact": "Contact",
    "mobile.preview_cv": "Preview Official CV",
    "mobile.download_cv": "Download CV (Original Image)",
    "mobile.dual_view": "Dual Desktop / Mobile Frame View",

    // Hero Section
    "hero.badge": "Cybersecurity Enthusiast • Web App Testing",
    "hero.greeting": "Hello, I'm",
    "hero.role": "Cybersecurity Enthusiast & AI-Assisted Software Developer",
    "hero.quote": "“Learning, Testing, Protecting, Becoming an integral part of Indonesia's cybersecurity future.”",
    "hero.ai_title": "AI-Assisted Software Development with AI Coding Agents",
    "hero.ai_desc": "Application development leveraging autonomous AI Agents: human engineers lead conceptualization, requirements, system architecture, and core business logic, while AI Agents accelerate implementation, coding, debugging, and testing.",
    "hero.bio": "Active 7th-semester student pursuing a <strong>Bachelor of Applied Science in Cybersecurity Engineering</strong> at Politeknik Piksi Input Serang. Focused on web application security, penetration testing, and modern software engineering built on AI coding agent workflows.",
    "hero.btn_projects": "View My Projects",
    "hero.btn_cv": "Preview CV",
    "hero.btn_wa": "WhatsApp Me",
    "hero.connect": "Connect:",
    "hero.location": "Tangerang Regency, Banten, Indonesia",
    "hero.badge_degree": "D4 Cybersecurity Engineering",
    "hero.badge_campus": "Piksi Input Serang (Sem. 7)",

    // About Section
    "about.badge": "01 // ABOUT ME",
    "about.title": "Dedicated to Information Security & Software Engineering",
    "about.subtitle": "Combining sharp web security analysis, rigorous vulnerability assessment, and the efficiency of modern AI Coding Agent engineering.",
    "about.bio1": "I am a final-year undergraduate at Politeknik Piksi Input Serang majoring in D4 Cybersecurity Engineering. I possess a deep passion and hands-on experience in evaluating information system security, conducting systematic vulnerability assessments, and understanding real-world web exploitation flows aligned with the OWASP Top 10 framework.",
    "about.bio2": "Beyond offensive security, I actively design and build functional web applications using Laravel, Tailwind CSS, and Next.js through an AI-Assisted Software Development approach—orchestrating AI coding agents to deliver clean, well-documented, and resilient codebases hardened against vulnerabilities.",
    "about.edu_heading": "Formal Education",
    "about.edu_institution": "Politeknik Piksi Input Serang",
    "about.edu_degree": "D4 — Applied Cybersecurity Engineering",
    "about.edu_status": "2023 — Present (Active 7th Semester)",
    "about.edu_desc": "Studying core fundamentals and advanced practices in network defense, ethical hacking, digital forensics, reverse engineering, cryptography, and enterprise-grade secure system design.",
    "about.edu_gpa_label": "Cumulative GPA",
    "about.edu_focus_label": "Academic Focus",
    "about.edu_focus_val": "Web App Pentesting & Cloud Security",
    "about.highlights_title": "Core Values & Work Ethics",
    "about.hl1_title": "Ethics & Integrity First",
    "about.hl1_desc": "Upholding high professional ethics across all security assessments and ensuring strict legal compliance.",
    "about.hl2_title": "Continuous Learning & Research",
    "about.hl2_desc": "Constantly monitoring emerging threat landscapes, daily CVE disclosures, and proactive defense mechanisms.",
    "about.hl3_title": "AI Synergy & Engineering Speed",
    "about.hl3_desc": "Accelerating problem resolution and code verification with precision using intelligent AI agent ecosystems.",

    // Skills Section
    "skills.badge": "02 // SKILLS & TECHNOLOGIES",
    "skills.title": "Core Pillars & Technology Stack",
    "skills.subtitle": "A blend of offensive security testing, defensive architecture, and intelligent software implementation.",
    "skills.p1_title": "Web App Pentesting & Assessment",
    "skills.p1_desc": "Identification and verification of OWASP Top 10 flaws (SQL Injection, XSS, CSRF, IDOR, Broken Authentication) utilizing Burp Suite, Nmap, and manual payload crafting.",
    "skills.p2_title": "Tools, Linux & Security Monitoring",
    "skills.p2_desc": "Intensive daily operations on Kali Linux, Ubuntu Server, Wazuh-based SIEM monitoring, network packet dissection with Wireshark, and Docker containerization.",
    "skills.p3_title": "AI-Assisted Dev & Modern Frameworks",
    "skills.p3_desc": "Modern web application development utilizing Laravel, Tailwind CSS, Next.js, and Python accelerated by AI coding agent workflows for clean, robust architecture.",
    "skills.matrix_title": "Interactive Tools & Stack Matrix",
    "skills.matrix_subtitle": "Professional tools and platforms utilized in daily engineering and security workflows.",
    "skills.tab_all": "All Stack",
    "skills.tab_sec": "Security & Pentesting",
    "skills.tab_dev": "Development & Web",
    "skills.tab_ai": "AI & Agent Tools",
    "skills.tab_os": "OS & Infrastructure",

    // Projects Section
    "projects.badge": "03 // FEATURED PROJECTS",
    "projects.title": "Featured Projects & Digital Creations",
    "projects.subtitle": "Real-world web systems, high-integrity school CBT platforms, cashless Islamic boarding school POS, and security monitoring setups.",
    "projects.btn_view_live": "View Live Project",
    "projects.btn_details": "Technical Specs",
    "projects.cta_box_title": "Explore Full Portfolio Showcase",
    "projects.cta_box_desc": "All my completed digital systems, production web applications, and newest software releases are hosted live on the BBN Digital Forge portal.",
    "projects.cta_box_btn": "Open All Projects on BBN Digital Forge",

    // Experience Section
    "experience.badge": "04 // JOURNEY & EXPERIENCE",
    "experience.title": "Experience & Key Milestones",
    "experience.subtitle": "National cybersecurity summits, advanced credentials, and intensive training shaping a disciplined career.",
    "exp.e1_role": "VVIP Participant — National Cyber Defense Agenda",
    "exp.e1_inst": "National Cyber and Crypto Agency (BSSN) Central Java",
    "exp.e1_date": "2026 • Official",
    "exp.e1_desc": "Selected as a VVIP delegate at the strategic summit of the National Cyber and Crypto Agency (BSSN) Central Java Region, addressing critical infrastructure defense and national digital regulatory frameworks.",
    "exp.e2_role": "Certified Red Team Operations Management (CRTOM)",
    "exp.e2_inst": "Red Team Management Board",
    "exp.e2_date": "2026 • Advanced Credential",
    "exp.e2_desc": "Earned advanced professional certification validating proficiency in adversary emulation planning, coordinated red teaming methodologies, and systematic defense bypassing strategies.",
    "exp.e3_role": "Cyber Security Bootcamp Merit Scholar (3 Months)",
    "exp.e3_inst": "IDNetworkers (IDN)",
    "exp.e3_date": "2025 • Intensive Program",
    "exp.e3_desc": "Completed a rigorous 3-month scholarship covering deep packet analysis, network defense engineering, Linux server hardening, and hands-on web application attack simulations.",
    "exp.e4_role": "Lead Developer & Security Implementer",
    "exp.e4_inst": "BBN Digital Forge & Project Partners",
    "exp.e4_date": "2024 — Present",
    "exp.e4_desc": "Leading secure software architecture for multiple client systems, including the anti-cheating ExamBro CBT engine and cashless student POS financial platforms.",

    // Certificates Section
    "certs.badge": "05 // CERTIFICATIONS & CREDENTIALS",
    "certs.title": "Verified Certificates & Recognition",
    "certs.subtitle": "Official credentials from national bodies, cybersecurity academies, and professional training programs.",
    "certs.btn_add": "Add Certificate",
    "certs.btn_view_detail": "View Details",
    "certs.badge_verified": "Verified GDrive",
    "certs.badge_user_added": "User Added",
    "certs.organizer": "Issuer / Org:",
    "certs.year": "Year:",

    // Blog Section
    "blog.badge": "06 // INSIGHTS & WRITEUPS",
    "blog.title": "Technical Articles & Security Analysis",
    "blog.subtitle": "Research findings, vulnerability writeups, and perspectives on emerging cybersecurity dynamics.",
    "blog.b1_badge": "Offensive Security",
    "blog.b1_title": "Demystifying IDOR in Modern Web Architectures",
    "blog.b1_desc": "A technical dissection of Insecure Direct Object References: how attackers tamper with request identifiers and robust query-level authorization countermeasures.",
    "blog.b2_badge": "Defensive & SOC",
    "blog.b2_title": "Setting Up an Isolated Wazuh SIEM Lab with Docker Compose",
    "blog.b2_desc": "A step-by-step walkthrough to deploy Wazuh Manager, Indexer, and Dashboard on Ubuntu Server for instantaneous detection of SSH brute-force campaigns.",
    "blog.b3_badge": "AI & Software Eng",
    "blog.b3_title": "AI Coding Agent Workflows: Balancing Speed and Security Rigor",
    "blog.b3_desc": "Effective strategies to harness autonomous coding agents without inheriting security debt: why manual audits, dependency validation, and strict sanitization remain crucial.",
    "blog.read_more": "Read Full Writeup",

    // Contact Section
    "contact.badge": "07 // CONTACT & INQUIRIES",
    "contact.title": "Let's Connect & Collaborate",
    "contact.subtitle": "Open for opportunities in web penetration testing, system security consultation, or software development engineering.",
    "contact.email_label": "Official Email",
    "contact.wa_label": "Direct WhatsApp",
    "contact.loc_label": "Location & Base",
    "contact.loc_val": "Tangerang Regency, Banten, Indonesia",
    "contact.status_label": "Current Availability",
    "contact.status_val": "Open for Projects & Internships (Active)",
    "contact.form_title": "Send Direct Message",
    "contact.form_name": "Full Name",
    "contact.form_name_ph": "Enter your full name",
    "contact.form_email": "Email Address",
    "contact.form_email_ph": "name@domain.com",
    "contact.form_subject": "Subject of Inquiry",
    "contact.form_subject_ph": "e.g., Web Pentest Inquiry / Job Opportunity",
    "contact.form_message": "Your Message",
    "contact.form_message_ph": "Write your project scope, questions, or message here...",
    "contact.btn_send": "Send Message Now",
    "contact.msg_sent_title": "Message Successfully Sent!",
    "contact.msg_sent_desc": "Thank you for reaching out. I will get back to your inquiry promptly.",

    // Footer
    "footer.role": "Bachelor of Applied Cybersecurity • Politeknik Piksi Input Serang",
    "footer.tagline": "“Learning, Testing, Protecting, Becoming an integral part of Indonesia's cybersecurity future.”",
    "footer.rights": "All Rights Reserved.",
    "footer.top": "Back to Top",

    // Modals
    "modal.project_features": "Key Features & Architecture",
    "modal.project_impact": "Performance & Security Impact",
    "modal.project_view": "View Project on BBN Digital Forge",
    "modal.project_close": "Close",
    "modal.cert_organizer": "Issuer / Organizer:",
    "modal.cert_date": "Date / Year:",
    "modal.cert_cat": "Category:",
    "modal.cert_credid": "Credential ID:",
    "modal.cert_open_gdrive": "Open Document in Google Drive",
    "modal.cert_open_verify": "Open Verification Link",
    "modal.cert_close": "Close Details",
    "modal.add_cert_title": "Add New Certificate",
    "modal.add_cert_name": "Certificate Title / Name",
    "modal.add_cert_org": "Issuer / Institution",
    "modal.add_cert_cat": "Category / Field",
    "modal.add_cert_year": "Year of Achievement",
    "modal.add_cert_cred": "Credential ID (Optional)",
    "modal.add_cert_link": "Document / GDrive Link",
    "modal.add_cert_img": "Thumbnail Image Link (Optional)",
    "modal.add_cert_desc": "Brief Description",
    "modal.add_cert_save": "Save Certificate",
    "modal.add_cert_cancel": "Cancel",
    "modal.cv_title": "Official Curriculum Vitae — Riski Ardiansyah",
    "modal.cv_download": "Download Original Image",
    "modal.cv_close": "Close Preview"
  }
};

// Bilingual Projects Data for Modal
const bilingualProjects = {
  id: {
    exambro: {
      title: "ExamBro — CBT Digital Examination",
      subtitle: "Secure Computer-Based Testing Platform & Android Client",
      category: "Web & Mobile App • Cyber Defense",
      description: "Sistem ujian digital berbasis web terintegrasi dengan ExamBro Android Client anti-curang untuk Madrasah Aliyah Al Jauharatunnaqiyah. Mengamankan integritas pelaksanaan ujian melalui lock browser environment, token session guard, dan sistem multi-role bertingkat.",
      features: [
        "Anti-Cheating Lock Browser Client untuk Android & Web",
        "Multi-role RBAC: Super Admin, Admin Madrasah, Guru, dan Siswa",
        "PostgreSQL database cluster untuk concurrency ratusan siswa bersamaan",
        "Real-time token validation dan automated exam timer lock"
      ],
      metrics: "Mampu melayani sesi ujian digital sekolah dengan response time di bawah 200ms secara stabil."
    },
    koprasi: {
      title: "Koperasi Santri — SantriWallet",
      subtitle: "Cashless Payment Ecosystem & POS Web Admin",
      category: "Fintech & Security Operations",
      description: "Ekosistem keuangan digital dan pembayaran nirsentuh (cashless) pesantren. Menggabungkan aplikasi kasir POS, top-up saldo santri, pencatatan transaksi audit-trail, serta standar operasional keamanan (Threat Modeling & Incident Response SOP).",
      features: [
        "Sistem pembayaran nirsentuh (Cashless) & Top-up saldo santri",
        "POS Kasir cepat dengan slip transaksi dan daily cash closing SOP",
        "Kontrol keamanan ketat berstandar Threat Model & Card Lost Incident Handling",
        "Laporan mutasi keuangan real-time dan rekonsiliasi kas terintegrasi"
      ],
      metrics: "Mampu memproses transaksi kasir POS secara instan dengan verifikasi PIN dan zero double-spend error."
    },
    tokoonline: {
      title: "BBn Muslim — Toko Online & Inventory",
      subtitle: "Smart E-Commerce & Automated Stock Engine",
      category: "Web Development & E-Commerce",
      description: "Platform toko online dan manajemen inventaris cerdas. Menyediakan katalog produk multi-varian, sistem mutasi dan reservasi stok otomatis saat checkout, keranjang belanja interaktif, serta portal manajemen order admin.",
      features: [
        "Smart Inventory: mutasi stok otomatis & reservation hold saat order",
        "Manajemen katalog produk multi-varian (ukuran, warna, kategori)",
        "Keranjang belanja interaktif berbasis Alpine.js dengan kalkulasi real-time",
        "Role-Based Access Control (RBAC) untuk manajemen operasional admin"
      ],
      metrics: "Arsitektur database teroptimasi dengan query indexing untuk menangani ribuan SKU produk."
    },
    bbndigital: {
      title: "BBN Digital Forge",
      subtitle: "Digital Service Platform & Web Development Engine",
      category: "Web Development",
      description: "Platform digital terpadu untuk agensi kreatif dan pengembangan aplikasi web. Menyediakan sistem client onboarding, quotation generator otomatis, project tracker real-time, dan portal pembayaran terintegrasi dengan arsitektur backend yang aman.",
      features: [
        "Role-Based Access Control (RBAC) yang ketat untuk multi-tenant",
        "Automated sanitization & CSRF protection pada semua payload form",
        "Integrasi payment gateway lokal dengan webhook verification terenkripsi",
        "Dashboard analitik performa proyek berbasis Filament"
      ],
      metrics: "Telah melayani 15+ klien UMKM & korporasi dengan uptime 99.9%."
    },
    wazuh: {
      title: "Wazuh Monitoring & SIEM",
      subtitle: "Enterprise Threat Detection & Log Analysis System",
      category: "SOC & Security Operations",
      description: "Implementasi sistem SIEM (Security Information and Event Management) dan XDR berbasis Wazuh di lingkungan kontainer Docker. Dikonfigurasi untuk mendeteksi brute-force attack, file integrity monitoring (FIM), dan compliance audit.",
      features: [
        "Integrasi agent Wazuh pada multi-node server Linux & Windows",
        "Custom rule detection untuk percobaan eksploitasi web (SQLi, XSS, LFI)",
        "Telegram & Slack bot alert otomatis untuk alert severity tinggi (Level 10+)",
        "Visualisasi dashboard log terpusat dengan filter timeline mendalam"
      ],
      metrics: "Berhasil mengidentifikasi dan memitigasi lebih dari 1.200 upaya unauthorized SSH probe per minggu."
    },
    loganalysis: {
      title: "Multi-Source Log Analysis",
      subtitle: "Cross-Platform Security Investigation & Incident Response",
      category: "Security Investigation",
      description: "Proyek investigasi forensik dan analisis log komprehensif yang mengumpulkan data dari Apache/Nginx web server logs, auth logs, dan firewall event. Dilengkapi toolkit parser otomatis untuk merekonstruksi rantai serangan penyerang.",
      features: [
        "Automated attack timeline reconstructor dari raw syslog & web access logs",
        "Geographic IP mapping & threat intelligence correlation (AbuseIPDB)",
        "Deteksi anomali volume traffic mencurigakan dengan baseline statistik",
        "Dokumentasi laporan incident response berstandar NIST SP 800-61"
      ],
      metrics: "Mampu membedah 500.000 baris log hanya dalam waktu 45 detik menggunakan pipeline CLI teroptimasi."
    }
  },
  en: {
    exambro: {
      title: "ExamBro — CBT Digital Examination",
      subtitle: "Secure Computer-Based Testing Platform & Android Client",
      category: "Web & Mobile App • Cyber Defense",
      description: "A secure web-based testing platform integrated with a dedicated anti-cheating Android Client for Madrasah Aliyah Al Jauharatunnaqiyah. Enforces exam integrity via kiosk browser lock, cryptographic session tokens, and a multi-tiered RBAC architecture.",
      features: [
        "Anti-Cheating Kiosk Lock Browser Client for Android & Web",
        "Multi-role RBAC: Super Admin, School Admin, Teachers, and Students",
        "PostgreSQL cluster architected for concurrent loads of hundreds of examinees",
        "Real-time token validation and automated countdown session lock"
      ],
      metrics: "Consistently serves large-scale school exam sessions with sub-200ms latency and zero downtime."
    },
    koprasi: {
      title: "Santri Cooperative — SantriWallet",
      subtitle: "Cashless Payment Ecosystem & POS Web Admin",
      category: "Fintech & Security Operations",
      description: "A digital financial and contactless cashless payment ecosystem tailored for Islamic boarding schools. Combines POS cashier terminals, student digital balances, immutable audit logs, and formal security SOPs (Threat Modeling & Incident Response).",
      features: [
        "Contactless cashless payment & student account top-up workflow",
        "High-speed POS checkout with instant receipts and daily closing reconciliations",
        "Strict security controls adhering to Threat Modeling & Lost Card Incident SOPs",
        "Real-time transaction mutation reports and integrated cash balancing"
      ],
      metrics: "Processes instant POS cashier checkouts with cryptographic PIN verification and zero double-spend anomalies."
    },
    tokoonline: {
      title: "BBn Muslim — E-Commerce & Inventory",
      subtitle: "Smart E-Commerce & Automated Stock Engine",
      category: "Web Development & E-Commerce",
      description: "An intelligent e-commerce and inventory management platform. Features multi-variant product catalogs, automated stock hold reservation during checkout, dynamic reactive carts, and a comprehensive order fulfillment admin portal.",
      features: [
        "Smart Inventory: automated stock mutations & reservation hold during orders",
        "Multi-variant catalog management (sizing, colors, stock categories)",
        "Interactive reactive shopping cart powered by Alpine.js with real-time tax calculation",
        "Role-Based Access Control (RBAC) for segmented administrative operations"
      ],
      metrics: "Indexed database architecture tuned to smoothly handle thousands of product SKUs under traffic surges."
    },
    bbndigital: {
      title: "BBN Digital Forge",
      subtitle: "Digital Service Platform & Web Development Engine",
      category: "Web Development",
      description: "An integrated agency engine for digital services and web software engineering. Features automated client onboarding, instant quotation generators, live milestone trackers, and secure local payment gateways.",
      features: [
        "Strict multi-tenant Role-Based Access Control (RBAC)",
        "Automated input sanitization & CSRF protection across all forms",
        "Local payment gateway integration with encrypted webhook verification",
        "Executive project telemetry dashboard built with Filament"
      ],
      metrics: "Successfully delivered 15+ SME & corporate client projects with 99.9% operational uptime."
    },
    wazuh: {
      title: "Wazuh Monitoring & SIEM",
      subtitle: "Enterprise Threat Detection & Log Analysis System",
      category: "SOC & Security Operations",
      description: "Deployment of an enterprise SIEM (Security Information and Event Management) and XDR environment powered by Wazuh inside Docker containers. Configured for real-time brute-force detection, File Integrity Monitoring (FIM), and regulatory compliance audits.",
      features: [
        "Cross-platform Wazuh Agent telemetry across Linux and Windows server nodes",
        "Custom rule detection engine tailored for web exploitation (SQLi, XSS, LFI)",
        "Automated Telegram & Slack incident alerting for high-severity events (Level 10+)",
        "Centralized Kibana/OpenSearch dashboards with granular timeline filtering"
      ],
      metrics: "Successfully triages and neutralizes over 1,200 unauthorized SSH probing attempts weekly."
    },
    loganalysis: {
      title: "Multi-Source Log Analysis",
      subtitle: "Cross-Platform Security Investigation & Incident Response",
      category: "Security Investigation",
      description: "A comprehensive digital forensics and log investigation project aggregating syslog, Apache/Nginx web logs, and firewall event feeds. Powered by custom automated CLI parsers to reconstruct adversary attack chains.",
      features: [
        "Automated adversary kill-chain timeline reconstruction from raw logs",
        "Geographic IP attribution & threat intelligence correlation (AbuseIPDB)",
        "Statistical anomaly detection for abnormal request volume spikes",
        "Formal Incident Response reporting conforming to NIST SP 800-61"
      ],
      metrics: "Parses and structures 500,000 raw log entries in under 45 seconds using optimized Unix pipeline scripts."
    }
  }
};

let currentLang = 'id';

function setLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') lang = 'id';
  currentLang = lang;
  try {
    localStorage.setItem('portfolio_lang', lang);
  } catch (e) {
    console.warn('Could not save language to localStorage:', e);
  }

  document.documentElement.lang = lang;

  // Update all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all elements with data-i18n-html
  const htmlElements = document.querySelectorAll('[data-i18n-html]');
  htmlElements.forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-ph]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update switcher button styles (Desktop & Mobile)
  updateSwitcherUI(lang);

  // If project modal is currently open, refresh its content in the active language
  refreshOpenModals(lang);

  // Re-run Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

function updateSwitcherUI(lang) {
  // Desktop
  const btnId = document.getElementById('lang-id-btn');
  const btnEn = document.getElementById('lang-en-btn');
  // Mobile
  const btnIdMobile = document.getElementById('mobile-lang-id-btn');
  const btnEnMobile = document.getElementById('mobile-lang-en-btn');

  const activeClasses = ['font-bold', 'text-cyan-400', 'bg-cyan-950/80', 'border', 'border-cyan-800'];
  const inactiveClasses = ['text-slate-400', 'hover:text-white'];

  function applyBtnState(btnActive, btnInactive) {
    if (!btnActive || !btnInactive) return;
    activeClasses.forEach(cls => {
      btnActive.classList.add(cls);
      btnInactive.classList.remove(cls);
    });
    inactiveClasses.forEach(cls => {
      btnInactive.classList.add(cls);
      btnActive.classList.remove(cls);
    });
  }

  if (lang === 'id') {
    applyBtnState(btnId, btnEn);
    applyBtnState(btnIdMobile, btnEnMobile);
  } else {
    applyBtnState(btnEn, btnId);
    applyBtnState(btnEnMobile, btnIdMobile);
  }
}

function refreshOpenModals(lang) {
  const modal = document.getElementById('project-modal');
  if (modal && !modal.classList.contains('hidden') && window.currentProjectKey) {
    window.openProjectModal(window.currentProjectKey);
  }
}

// Expose globally
window.translations = translations;
window.bilingualProjects = bilingualProjects;
window.setLanguage = setLanguage;
window.getCurrentLanguage = () => currentLang;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'id';
  try {
    savedLang = localStorage.getItem('portfolio_lang') || 'id';
  } catch (e) {
    savedLang = 'id';
  }
  setLanguage(savedLang);
});
