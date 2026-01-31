'use client';

import { useState, useEffect } from 'react';
import { FileText, UserPlus, Calendar, Users, CheckSquare, ChevronRight, MessageCircle, ClipboardEdit, Clock, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import Link from 'next/link';

const registrationSteps = [
  {
    id: "timeline",
    title: "Timeline Pendaftaran",
    icon: <Calendar size={20} />,
    content: (
      <>
        <p className="mb-4">Berikut adalah tanggal-tanggal penting yang harus kamu perhatikan selama proses rekrutmen:</p>
        <ul className="space-y-3 list-disc list-inside text-gray-300">
          <li><strong>Open Recruitment:</strong> 1 - 6 Februari 2026</li>
          <li><strong>Technical Meeting:</strong> 8 Februari 2026</li>
          <li><strong>Pengerjaan Misi:</strong> 8 - 11 Februari 2026</li>
          <li><strong>Screening:</strong> 12 - 15 Februari 2026</li>
          <li><strong>Pengumuman Akhir:</strong> 18 Februari 2026</li>
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
          <li>Mahasiswa/i aktif Universitas Jenderal Soedirman angkatan 2023, 2024, dan 2025.</li>
          <li>Dalam kondisi sehat jasmani dan rohani.</li>
          <li>Mampu memberikan kontribusi aktif dalam kegiatan dan pengembangan tim.</li>
          <li>Memiliki ketertarikan atau minat dalam bidang robotika.</li>
          <li>Memiliki komitmen yang kuat untuk belajar dan berpartisipasi.</li>
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
          <li><strong>Public Relation</strong></li>
          <li><strong>Human Resource and Development</strong></li>
          <li><strong>Creative Media</strong></li>
          <li><strong>Sponsorship</strong></li>
          <li><strong>Team Manager</strong></li>
          <li><strong>Kontes Robot ABU Indonesia (KRAI) </strong>Subdivisi: Mekanik, Elektronik, dan Programming</li>
          <li><strong>Kontes Robot SAR Indonesia (KRSRI) </strong>Subdivisi: Mekanik, Elektronik, dan Programming</li>
          <li><strong>Kontes Robot Tematik Indonesia (KRTMI) </strong>Subdivisi: Mekanik, Elektronik, dan Programming</li>
          <li><strong>Kontes Robot Terbang Indonesia - Fixed Wing (KRTI-FW) </strong>Subdivisi: Mekanik, Elektronik, dan System</li>
          <li><strong>Kontes Robot Terbang Indonesia - Racing Plane (KRTI-RP) </strong>Subdivisi: Mekanik, Elektronik, dan System</li>
          <li><strong>Kontes Robot Terbang Indonesia - Low Endurance Low Altitude (KRTI-LELA) </strong>Subdivisi: Mekanik, Elektronik, dan System</li>
        </ul>
      </>
    )
  },
  {
    id: "dokumen",
    title: "Dokumen Pendaftaran",
    icon: <FileText size={20} />,
    content: (
      <>
        <p className="mb-4">Silakan download dokumen yang dibutuhkan untuk melakukan pendaftaran! <strong><em>Catatan: Gunakan email Unsoed untuk mengakses!!</em></strong></p>
        <div className='flex flex-col md:flex-row items-start md:items-center w-full gap-4 mt-8'>
          <a 
            href="https://docs.google.com/document/d/1K_wF6rCFguv7d_ZWZ8kizq8Ao8y7X6d4/edit?usp=drive_link&ouid=114621677394057883206&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
          >
            Template CV
          </a>
          <a 
            href="https://twb.nz/bethenextfighter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
          >
            Twibbon
          </a>
        </div>
      </>
    )
  },
  {
    id: "formulir",
    title: "Formulir Pendaftaran",
    icon: <ClipboardEdit size={20} />,
    content: (
      <>
        <p className="text-gray-300 mb-6">Siap untuk mendaftar? Klik tombol di bawah ini untuk mengakses formulir pendaftaran resmi! <strong><em>Catatan: Gunakan email Unsoed untuk mengakses!!</em></strong></p>
        <a 
          href="https://forms.gle/jbzEnQYoMxmbr5Ur7"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-cyan-400 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105"
        >
          Daftar Sekarang
        </a>
      </>
    )
  },
  {
    id: "contact",
    title: "Contact Person",
    icon: <MessageCircle size={20} />,
    content: (
      <>
        <p className="text-gray-300 mb-6">Terdapat kesulitan saat melakukan pendaftaran? Tenang, kami siap bantu! Langsung saja chat Contact Person kami!</p>
        <div className='flex flex-col md:flex-row items-start md:items-center w-full gap-4 mt-8'>
          <a 
          href={`https://wa.me/628989948655`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-left p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <p className="text-lg font-semibold text-white mt-1">Hanif Muhamad Anam</p>
          <p className="text-gray-400">+62 898 9948 655</p>
        </a>
        <a 
          href={`https://wa.me/6282136154006`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-left p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <p className="text-lg font-semibold text-white mt-1">Pratiwi Rahmadiana</p>
          <p className="text-gray-400">+62 821 3615 4006</p>
        </a>
        </div>
      </>
    )
  },
];

export default function OpenRecruitmentPage() {
  // --- PENGATURAN UTAMA ---
  // Ganti nilai di bawah ini menjadi 'false' jika pendaftaran sudah ditutup.
  const isRecruitmentOpen = true;

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('timeline');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const registrationLink = "https://forms.gle/jbzEnQYoMxmbr5Ur7";

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
      <section className='py-8 sm:py-12 text-center'>
        <div 
          className={`relative z-10 max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {isRecruitmentOpen ? (
            // --- TAMPILAN SAAT PENDAFTARAN DIBUKA ---
            <>
              <div className="inline-block bg-blue-500/20 p-3 rounded-xl mb-6">
                <UserPlus size={32} className="text-blue-300" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Open Recruitment
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                Staff of Soedirman Robotic Team 2026
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-cyan-400 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105"
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
                <Clock size={32} className="text-blue-300" />
              </div>
              <h3 className="max-w-2xl mx-auto text-3xl font-bold text-gray-300 leading-relaxed">
                COMING SOON!!
              </h3>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Open Recruitment Staff of Soedirman Robotic Team
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                We are excited to announce that our open recruitment is coming soon! Stay tuned for more updates.
              </p>
              <div className="mt-8 max-w-xl mx-auto">
                <Link 
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
                >
                  <ArrowLeft size={18} />
                  Go to Homepage
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Bagian Alur Pendaftaran (Hanya muncul jika pendaftaran dibuka) */}
      {isRecruitmentOpen && (
        <section id="alur-pendaftaran" className="text-white py-20 sm:py-24 scroll-mt-16">
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
                        className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors w-full ${activeSection === step.id ? 'bg-blue-500/20 text-blue-200' : 'hover:bg-gray-800'}`}
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
              <main className="lg:col-span-8 xl:col-span-9">
                <div className="space-y-8">
                  {registrationSteps.map(step => (
                    <div key={step.id} id={step.id} className="scroll-mt-24 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {step.content}
                      </div>
                    </div>
                  ))}
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