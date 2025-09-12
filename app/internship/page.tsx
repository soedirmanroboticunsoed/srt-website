// Menjadikan ini Client Component untuk menangani animasi dan interaksi
'use client';

import { useState, useEffect } from 'react';
import { FileText, UserPlus, Calendar, Users, CheckSquare, ChevronRight, MessageCircle, ClipboardEdit } from 'lucide-react';
import Footer from '../components/Footer';

// --- DATA UNTUK ALUR PENDAFTARAN ---
const registrationSteps = [
  {
    id: "timeline",
    title: "Timeline Pendaftaran",
    icon: <Calendar size={20} />,
    content: (
      <>
        <p className="mb-4">Berikut adalah tanggal-tanggal penting yang harus kamu perhatikan selama proses rekrutmen:</p>
        <ul className="space-y-3 list-disc list-inside text-gray-300">
          <li><strong>Pendaftaran Online:</strong> 1 - 15 September 2025</li>
          <li><strong>Seleksi Berkas:</strong> 16 - 18 September 2025</li>
          <li><strong>Pengumuman Lolos Berkas:</strong> 20 September 2025</li>
          <li><strong>Tes Wawancara:</strong> 22 - 25 September 2025</li>
          <li><strong>Pengumuman Akhir:</strong> 30 September 2025</li>
        </ul>
      </>
    )
  },
  {
    id: "syarat",
    title: "Syarat & Ketentuan",
    icon: <CheckSquare size={20} />,
    content: (
       <>
        <p className="mb-4">Pastikan kamu memenuhi semua persyaratan di bawah ini sebelum mendaftar:</p>
        <ul className="space-y-3 list-disc list-inside text-gray-300">
          <li>Mahasiswa aktif Universitas Jenderal Soedirman (angkatan 2024 & 2025).</li>
          <li>Memiliki Indeks Prestasi Kumulatif (IPK) minimal 3.00.</li>
          <li>Berkomitmen tinggi untuk aktif dalam kegiatan dan pengembangan tim.</li>
          <li>Memiliki minat dan semangat belajar yang tinggi di bidang robotika.</li>
          <li>Mampu bekerja sama dalam tim dan memiliki kemampuan komunikasi yang baik.</li>
        </ul>
      </>
    )
  },
  {
    id: "divisi",
    title: "Divisi yang Dibuka",
    icon: <Users size={20} />,
    content: (
       <>
        <p className="mb-4">Pilih divisi yang paling sesuai dengan minat dan keahlianmu:</p>
        <ul className="space-y-3 list-disc list-inside text-gray-300">
          <li><strong>Divisi Mekanik:</strong> Bertanggung jawab atas desain, fabrikasi, dan perakitan fisik robot.</li>
          <li><strong>Divisi Elektronika:</strong> Merancang dan mengimplementasikan sirkuit elektronik serta sistem kontrol robot.</li>
          <li><strong>Divisi Pemrograman:</strong> Mengembangkan algoritma, kecerdasan buatan, dan software untuk menggerakkan robot.</li>
          <li><strong>Divisi Manajemen:</strong> Mengelola operasional tim, sponsorship, dan publikasi media.</li>
        </ul>
      </>
    )
  },
];

// --- Komponen Utama Halaman Open Recruitment ---
export default function OpenRecruitmentPage() {
  // --- PENGATURAN UTAMA ---
  // Ganti nilai di bawah ini menjadi 'false' jika pendaftaran sudah ditutup.
  const isRecruitmentOpen = false;

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('timeline');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // --- PENGATURAN: Ganti link dan nomor kontak di bawah ini ---
  const registrationLink = "https://forms.gle/your-google-form-link";
  const contactPerson = {
      name: "Abir Nuchiyah",
      whatsappNumber: "62881023049913"
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleHeroScrollClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] px-4 sm:px-6 lg:px-8">
      {/* Bagian Hero (Tampilan berubah tergantung status pendaftaran) */}
      <section className='py-8 sm:py-12 text-center'>
        <div 
          className={`relative z-10 max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {isRecruitmentOpen ? (
            // --- TAMPILAN SAAT PENDAFTARAN DIBUKA ---
            <>
              <div className="inline-block bg-purple-500/20 p-3 rounded-xl mb-6">
                <UserPlus size={32} className="text-purple-300" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                Open Recruitment
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                Anggota Baru SRT 2025
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                Halo, para inovator masa depan! Kami dari Soedirman Robotic Team membuka pintu bagi kalian yang punya semangat dan rasa penasaran tinggi di dunia robotika.
              </p>
              <div className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-lg text-gray-200">
                <p>Amankan posisimu sekarang juga! Semua informasi penting ada di bawah ini. Baca baik-baik, ya!</p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href="#alur-pendaftaran"
                  onClick={handleHeroScrollClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
                >
                  <FileText size={18} />
                  Lihat Alur Pendaftaran
                </a>
                <a 
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
                >
                  <UserPlus size={18} />
                  Daftar Sekarang!
                </a>
              </div>
            </>
          ) : (
            // --- TAMPILAN SAAT PENDAFTARAN DITUTUP ---
            <>
              <div className="inline-block bg-blue-500/20 p-3 rounded-xl mb-6">
                <CheckSquare size={32} className="text-blue-300" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Pengumuman Hasil Seleksi
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                Terima Kasih untuk 158 Pendaftar!
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                Terima kasih kepada seluruh pendaftar atas antusiasme dan partisipasinya. Proses seleksi telah selesai dan kami sangat terkesan dengan kualitas serta semangat yang ditunjukkan oleh semua calon anggota.
              </p>
              <div className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-lg text-gray-200">
                <p>Bagi yang sudah mendaftar, silahkan klik tombol dibawah untuk melihat pengumuman hasil seleksi Internship Soedirman Robotic Team 2025. Good luck guys!!</p>
              </div>
              <div className="mt-10">
                <a 
                  href='/announcement'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-cyan-400 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105"
                >
                  <ClipboardEdit size={18} />
                  Lihat Pengumuman Hasil Seleksi
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Bagian Alur Pendaftaran (Hanya muncul jika pendaftaran dibuka) */}
      {isRecruitmentOpen && (
        <section id="alur-pendaftaran" className="bg-gray-900 text-white py-20 sm:py-24 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Info Pendaftaran</h3>
                  <nav className="flex flex-col gap-2">
                    {registrationSteps.map(step => (
                      <button
                        key={step.id}
                        onClick={() => handleNavClick(step.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors w-full ${activeSection === step.id ? 'bg-purple-500/20 text-purple-200' : 'hover:bg-gray-800'}`}
                      >
                        <div className={`p-1.5 rounded-md ${activeSection === step.id ? 'bg-purple-400/30' : 'bg-gray-700'}`}>
                          {step.icon}
                        </div>
                        <span className="font-medium">{step.title}</span>
                        <ChevronRight size={16} className="ml-auto" />
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>
              
              <main className="lg:col-span-8 xl:col-span-9">
                <div className="space-y-16">
                  {registrationSteps.map(step => (
                    <div key={step.id} id={step.id} className="scroll-mt-24">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                          {step.icon}
                        </div>
                        <h2 className="text-3xl font-bold">{step.title}</h2>
                      </div>
                      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {step.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-24 grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-300">
                                <ClipboardEdit size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Formulir Pendaftaran</h3>
                        </div>
                        <p className="text-gray-300 mb-6">Siap untuk mendaftar? Klik tombol di bawah ini untuk mengakses formulir pendaftaran resmi!</p>
                        <a 
                            href={registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg shadow-green-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105"
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-300">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Butuh Info Pendaftaran?</h3>
                        </div>
                        <p className="text-gray-300 mb-6">Tenang, kami siap bantu! Langsung aja chat CP Pendaftaran kami!</p>
                        <a 
                            href={`https://wa.me/${contactPerson.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-left p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <p className="font-bold text-cyan-300">Kontak CP Pendaftaran</p>
                            <p className="text-lg font-semibold text-white mt-1">{contactPerson.name}</p>
                            <p className="text-gray-400">+62 {contactPerson.whatsappNumber.substring(2)}</p>
                        </a>
                    </div>
                </div>
              </main>

            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}