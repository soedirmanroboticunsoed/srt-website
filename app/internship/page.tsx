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
          <li><strong>Pengisian Google Form:</strong> 1 - 6 September 2025</li>
          <li><strong>Screening:</strong> 7 - 9 September 2025</li>
          <li><strong>Pengumuman:</strong> 12 September 2025</li>
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
          <li>Mahasiswa/i aktif Unsoed angkatan 2024 dan 2025.</li>
          <li>Dalam kondisi sehat jasmani dan rohani.</li>
          <li>Siap mengikuti seluruh rangkaian kegiatan internship sesuai ketentuan yang berlaku.</li>
          <li>Mampu memberikan kontribusi dalam setiap kegiatan internship yang dilaksanakan.</li>
          <li>Memiliki komitmen yang kuat untuk belajar dan berpartisipasi dalam program internship.</li>
          <li>Memiliki ketertarikan atau minat dalam bidang robotika</li>
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
          <li><strong>Secretary</strong></li>
          <li><strong>Financial Manager</strong></li>
          <li><strong>Human Resource Development</strong></li>
          <li><strong>Public Relation</strong></li>
          <li><strong>Creative Media</strong></li>
          <li><strong>Sponsorship</strong></li>
          <li><strong>Team Manager</strong></li>
          <li><strong>KRAI Blakasutha:</strong> Mechanic, Electronic, Programmer</li>
          <li><strong>KRSRI Satria:</strong> Mechanic, Electronic, Programmer</li>
          <li><strong>KRTMI Yudishtira:</strong> Mechanic, Electronic, Programmer</li>
          <li><strong>KRTI Biantara FW:</strong> Mechanic, Electronic, System</li>
          <li><strong>KRTI Biantara RP:</strong> Mechanic, Electronic, System</li>
        </ul>
      </>
    )
  },
  {
    id: "documents",
    title: "Dokumen yang Diperlukan",
    icon: <FileText size={20} />,
    content: (
       <>
        <p className="mb-4">Curriculum Vitae</p>
        <a 
          href="https://docs.google.com/document/d/10FoKIrRvJ5mof068lNLzAx0rhO5t6d1z/edit?usp=drive_link&ouid=101567535938829812412&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
        >
          Unduh Template CV
        </a>
        <p className="my-4">Twibbon</p>
        <a 
          href="https://drive.google.com/file/d/1_zCoK3A4fSLJJxShjLtvIBkPhtnPuAIL/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
        >
          Unduh Template Twibbon
        </a>
        <p className="my-4">Caption Twibbon</p>
        <a 
          href="https://docs.google.com/document/d/1Vv1V5jvWgasfYi32dFZC-WmhPtVyFlAeqbqVFaKUCrw/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
        >
          Unduh Caption Twibbon
        </a>
      </>
    )
  },
  {
    id: "form",
    title: "Formulir Pendaftaran",
    icon: <ClipboardEdit size={20} />,
    content: (
       <>
        <p className="mb-4">Siap untuk mendaftar? Klik tombol di bawah ini untuk mengakses formulir pendaftaran resmi!</p>
        <a 
          href="https://forms.gle/AjY9vwF2xwxGNE1G9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-b from-cyan-300 to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105"
        >
          Daftar Sekarang!
        </a>
      </>
    )
  },
  {
    id: "call",
    title: "Contact Person",
    icon: <MessageCircle size={20} />,
    content: (
       <>
        <p className="mb-4">Butuh info pendaftaran? Tenang, kami siap bantu! Langsung aja chat CP Pendaftaran kami!</p>
        <a 
          href={`https://wa.me/${6281586023404}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-left my-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
        >
            <p className="font-bold text-cyan-300">Contact Person Pendaftaran</p>
            <p className="text-lg font-semibold text-white mt-1">Laetare Clara Febrianti</p>
            <p className="text-gray-400">+62 815-8602-3404</p>
        </a>
        <a 
          href={`https://wa.me/${6288239699686}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-left my-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
        >
            <p className="font-bold text-cyan-300">Contact Person Pendaftaran</p>
            <p className="text-lg font-semibold text-white mt-1">Agam Priatama</p>
            <p className="text-gray-400">+62 882-3969-9686</p>
        </a>
      </>
    )
  },
];

// --- Komponen Utama Halaman Open Recruitment ---
export default function OpenRecruitmentPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('timeline');

  useEffect(() => {
    // Memicu animasi setelah komponen dimuat
    setIsLoaded(true);
  }, []);

  // --- PENGATURAN: Ganti link ini dengan link formulir pendaftaran Anda ---
  const registrationLink = "https://forms.gle/AjY9vwF2xwxGNE1G9";
  
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // PERBAIKAN: Menambahkan fungsi untuk menangani smooth scroll dari tombol hero
  const handleHeroScrollClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Mencegah lompatan standar anchor link
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="bg-gray-900 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* Bagian Hero Open Recruitment */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 text-white overflow-hidden"
      >
        <div 
          className={`relative z-10 max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm p-3 rounded-xl mb-6">
            <UserPlus size={32} className="text-blue-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-500">
            Internship
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2">
            Soedirman Robotic Team 2025
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Halo Gensoed!! Buat kamu yang tertarik dengan dunia robotika, now is the perfect time to become the next fighters!!
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Unit Kegiatan Mahasiswa Soedirman Robotic Team membuka peluang kepada seluruh mahasiswa Universitas Jenderal Soedirman untuk bergabung menjadi bagian dari kami!
          </p>
          <div className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-lg text-gray-200">
            <p>Daftarkan dirimu sekarang juga! Semua informasi penting ada di bawah ini. Baca baik-baik, ya!</p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#alur-pendaftaran"
              onClick={handleHeroScrollClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg
                         transition-all duration-300 ease-in-out
                         hover:bg-gray-800 hover:text-white hover:border-gray-500"
            >
              <FileText size={18} />
              Lihat Alur Pendaftaran
            </a>
            <a 
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-cyan-300 to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
            >
              <UserPlus size={18} />
              Daftar Sekarang!
            </a>
          </div>
        </div>
      </section>

      {/* Bagian Alur Pendaftaran */}
      <section id="alur-pendaftaran" className="text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Navigasi Kiri (Sticky) */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Info Pendaftaran</h3>
                <nav className="flex flex-col gap-2">
                  {registrationSteps.map(step => (
                    <button
                      key={step.id}
                      onClick={() => handleNavClick(step.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors w-full
                                 ${activeSection === step.id ? 'bg-blue-500/20 text-blue-200' : 'hover:bg-gray-800'}`}
                    >
                      <div className={`p-1.5 rounded-md ${activeSection === step.id ? 'bg-blue-400/30' : 'bg-gray-700'}`}>
                        {step.icon}
                      </div>
                      <span className="font-medium">{step.title}</span>
                      <ChevronRight size={16} className="ml-auto" />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
            
            {/* Konten Kanan */}
            <main className="lg:col-span-8 xl:col-span-9">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                  <div className="space-y-16">
                  {registrationSteps.map(step => (
                    <div key={step.id} id={step.id} className="scroll-mt-24">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
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
              </div>
            </main>
          </div>
        </div>
      </section>
      <section id="footer" className="text-white">
        <Footer />
      </section>
    </main>
  );
}
