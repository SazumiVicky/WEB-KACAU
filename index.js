const NIBIKIBI_EXPRESS = require('express');
const NIBIKIBI_APP = NIBIKIBI_EXPRESS();
const NIBIKIBI_PORT = 3000;

NIBIKIBI_APP.set('view engine', 'ejs');
NIBIKIBI_APP.use(NIBIKIBI_EXPRESS.urlencoded({ extended: true }));
NIBIKIBI_APP.use(NIBIKIBI_EXPRESS.json());

const NIBIKIBI_DATA = {
  NIBIKIBI_NAMA: "Sazumi Viki",
  NIBIKIBI_ROLE: "Senior Full-Stack Engineer & Cloud System Architect",
  NIBIKIBI_BIO: "Berpengalaman lebih dari 8 tahun dalam membangun infrastruktur berskala enterprise, arsitektur microservices berkinerja tinggi, serta antarmuka pengguna yang presisi dan stabil.",
  NIBIKIBI_SKILLS: [
    { NIBIKIBI_SKILL: "Backend Architecture (Node.js / Go)", NIBIKIBI_LEVEL: "98%" },
    { NIBIKIBI_SKILL: "Cloud Infrastructure (AWS / Kubernetes)", NIBIKIBI_LEVEL: "95%" },
    { NIBIKIBI_SKILL: "Frontend Engineering (React / Next.js)", NIBIKIBI_LEVEL: "96%" },
    { NIBIKIBI_SKILL: "Database Optimization (PostgreSQL / Redis)", NIBIKIBI_LEVEL: "94%" },
    { NIBIKIBI_SKILL: "Cybersecurity & Automated Testing", NIBIKIBI_LEVEL: "99%" }
  ],
  NIBIKIBI_SERTIFIKAT: [
    {
      NIBIKIBI_NAMA_SERTIF: "AWS Certified Solutions Architect – Professional",
      NIBIKIBI_PENERBIT: "Amazon Web Services",
      NIBIKIBI_TAHUN: "2025",
      NIBIKIBI_KODE: "AWS-SV-998120"
    },
    {
      NIBIKIBI_NAMA_SERTIF: "Certified Kubernetes Administrator (CKA)",
      NIBIKIBI_PENERBIT: "Cloud Native Computing Foundation",
      NIBIKIBI_TAHUN: "2025",
      NIBIKIBI_KODE: "CNCF-SV-441092"
    },
    {
      NIBIKIBI_NAMA_SERTIF: "Offensive Security Certified Professional (OSCP)",
      NIBIKIBI_PENERBIT: "OffSec",
      NIBIKIBI_TAHUN: "2026",
      NIBIKIBI_KODE: "OSCP-SV-772310"
    }
  ],
  NIBIKIBI_PROJECTS: [
    {
      NIBIKIBI_JUDUL: "Enterprise Banking Core System",
      NIBIKIBI_DESC: "Sistem transaksi perbankan real-time dengan tingkat ketersediaan 99.999% dan enkripsi berlapis.",
      NIBIKIBI_STATUS: "Production Ready"
    },
    {
      NIBIKIBI_JUDUL: "Cloud Auto-Scaler Engine",
      NIBIKIBI_DESC: "Platform manajemen cluster otomatis untuk menangani jutaan request per detik tanpa latensi.",
      NIBIKIBI_STATUS: "Verified v4.2"
    },
    {
      NIBIKIBI_JUDUL: "AI Predictive Analytics Dashboard",
      NIBIKIBI_DESC: "Dashboard analitik prediktif berbasis machine learning untuk pemantauan metrik bisnis global.",
      NIBIKIBI_STATUS: "Enterprise License"
    }
  ],
  NIBIKIBI_TESTIMONI: [
    {
      NIBIKIBI_KLIEN: "Direktur Teknologi, PT Global Solusi Digital",
      NIBIKIBI_KOMEN: "Implementasi arsitektur dari Sazumi Viki sangat rapi, cepat, dan meningkatkan efisiensi server kami hingga 300%."
    },
    {
      NIBIKIBI_KLIEN: "VP of Engineering, FinTech Asia",
      NIBIKIBI_KOMEN: "Standar penulisan kode yang luar biasa bersih dan bebas dari kendala teknis."
    },
    {
      NIBIKIBI_KLIEN: "Lead Product Manager, CloudCorp",
      NIBIKIBI_KOMEN: "Pengalaman pengguna yang dirancang sangat intuitif dan mudah digunakan oleh seluruh tim kami."
    }
  ],
  NIBIKIBI_NOTIF: [
    "Sistem mendeteksi gerakan kursor Anda kurang presisi 0.42mm. Silakan ulangi.",
    "Peringatan Keamanan: Anda bernafas terlalu dekat dengan layar monitor.",
    "Galat 0x8821: Sesi melihat portofolio telah kedaluwarsa 3 detik yang lalu.",
    "Sinkronisasi memori gagal: Resolusi mata Anda tidak mendukung komponen ini.",
    "Pemberitahuan Sistem: Klik Anda ditolak karena kurang meyakinkan.",
    "Audit Sistem: Kecepatan scroll Anda melanggar batas kecepatan halaman."
  ]
};

NIBIKIBI_APP.get('/', (NIBIKIBI_REQ, NIBIKIBI_RES) => {
  NIBIKIBI_RES.render('index', { NIBIKIBI_DATA });
});

NIBIKIBI_APP.post('/api/bug', (NIBIKIBI_REQ, NIBIKIBI_RES) => {
  const NIBIKIBI_BALASAN = [
    "Galat Validasi 422: Nama Anda mengandung huruf yang sedang cuti hari ini.",
    "Pengiriman Ditolak: Formulir harus diisi sambil berdiri menghadap utara.",
    "Status 503: Server sengaja mengabaikan pesan Anda karena antrean sedang malas.",
    "Verifikasi Gagal: Tanda titik pada alamat email Anda kurang bulat.",
    "Pesan Terhapus Otomatis: Sistem menilai pesan Anda kurang penting untuk Sazumi Viki."
  ];
  const NIBIKIBI_ACAK = NIBIKIBI_BALASAN[Math.floor(Math.random() * NIBIKIBI_BALASAN.length)];
  NIBIKIBI_RES.json({ NIBIKIBI_PESAN: NIBIKIBI_ACAK });
});

NIBIKIBI_APP.post('/api/chat', (NIBIKIBI_REQ, NIBIKIBI_RES) => {
  const NIBIKIBI_JAWABAN_BOT = [
    "Mohon maaf, pertanyaan Anda telah diklasifikasikan sebagai beban pikiran server.",
    "Berdasarkan analisis AI, Anda sebenarnya tidak tahu apa yang ingin Anda tanyakan.",
    "Silakan lampirkan fotokopi KTP dan KK yang dilegalisir untuk melihat jawaban ini.",
    "Error: Asisten AI sedang istirahat makan siang, jangan diganggu.",
    "Permintaan ditolak. Coba ketik ulang menggunakan jari kelingking."
  ];
  const NIBIKIBI_PILIH = NIBIKIBI_JAWABAN_BOT[Math.floor(Math.random() * NIBIKIBI_JAWABAN_BOT.length)];
  NIBIKIBI_RES.json({ NIBIKIBI_BALAS: NIBIKIBI_PILIH });
});

NIBIKIBI_APP.listen(NIBIKIBI_PORT, () => {
  console.log(`NIBIKIBI_SERVER_JALAN_DI_HTTP_LOCALHOST_${NIBIKIBI_PORT}`);
});
