'use client';

import React, { useState } from 'react';
import { 
  Target, 
  Settings, 
  AlertTriangle, 
  Briefcase, 
  ExternalLink,
  Calendar,
  Folder,
  Info
} from 'lucide-react';
import Footer from '@/app/components/Footer';

type Division = "KRAI" | "KRSRI" | "KRTMI" | "KRTI-RP" | "KRTI-FW" | "KRTI-LELA" | "Creative Media";

interface Mission {
  id: string;
  title: string;
  desc: string;
  link: string;
}

const missionDatabase: Record<Division, Mission[]> = {
  "KRAI": [
    { 
      id: 'BLAKASUTHA-MK', 
      title: "Misi Subdivisi Mekanik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1-NgtTeo1OrDKaQfNyQMiyaw-EBsZHXzC/view?usp=drive_link" 
    },
    { 
      id: 'BLAKASUTHA-EL', 
      title: "Misi Subdivisi Elektronik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1WZkdO_3bLMg-Y8qb6FRovhejkmxVV19J/view?usp=drive_link" 
    },
    { 
      id: 'BLAKASUTHA-PRO', 
      title: "Misi Subdivisi Programmer", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1ZG-aTHHfDpruiwnH8EcpfVAQM-AHMUSA/view?usp=drive_link" 
    }
  ],
    "KRSRI": [
    { 
      id: 'SATRIA-MK', 
      title: "Misi Subdivisi Mekanik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://docs.google.com/document/d/1fKsw69zJCc5W3a826YndiA7DrHOSZPIq/edit?usp=drive_link&ouid=114621677394057883206&rtpof=true&sd=true" 
    },
    { 
      id: 'SATRIA-EL', 
      title: "Misi Subdivisi Elektronik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://docs.google.com/document/d/1IciXodXe-leO6hT3vRi6w44vZ3aPbxwY/edit?usp=drive_link&ouid=114621677394057883206&rtpof=true&sd=true" 
    },
    { 
      id: 'SATRIA-PRO', 
      title: "Misi Subdivisi Programmer", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1ie-0fgpHLFWWDO8Uarud4HQBd1KDjDu3/view?usp=drive_link" 
    }
  ],
    "KRTMI": [
    { 
      id: 'YUDISHTIRA-MK', 
      title: "Misi Subdivisi Mekanik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1pOevd1tJ2UozgvjZPJTeNccS-oJ6JXkY/view?usp=drive_link" 
    },
    { 
      id: 'YUDISHTIRA-EL', 
      title: "Misi Subdivisi Elektronik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1IWi0ywyUlUXXgbtgPpDOutRxKlthbwVa/view?usp=drive_link" 
    },
    { 
      id: 'YUDISHTIRA-PRO', 
      title: "Misi Subdivisi Programmer", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1ESU7xatMbPM65-axex0Dsmgf2vN6bEuR/view?usp=drive_link" 
    },
  ],
    "KRTI-RP": [
    { 
      id: 'BIANTARA RP-MK', 
      title: "Misi Subdivisi Mekanik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/13_qdZuRn0CJLTfMuC-auT1hWA-MlmV6X/view?usp=drive_link" 
    },
    { 
      id: 'BIANTARA RP-EL', 
      title: "Misi Subdivisi Elektronik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/10YY0INX5KStp6LwYtBvUzl-REjo6c4x7/view?usp=drive_link" 
    },
    { 
      id: 'BIANTARA RP-SYS', 
      title: "Misi Subdivisi System", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1vmL3PDwiIaFQFgu51Ak3TiAqcHSutVvK/view?usp=drive_link" 
    }
  ],
  "KRTI-FW": [
    { 
      id: 'BIANTARA FW-MK', 
      title: "Misi Subdivisi Mekanik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1tt8LH3yaqwuIQoRGd9swCf7enStgYvP_/view?usp=drive_link" 
    },
    { 
      id: 'BIANTARA FW-EL', 
      title: "Misi Subdivisi Elektronik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1tt6MgscnzZUFVfa96mRiyEZoVww2umfc/view?usp=drive_link" 
    },
    { 
      id: 'BIANTARA FW-SYS', 
      title: "Misi Subdivisi System", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1G2ZVPnB8eCHWhE45f-saa5znz1xqofCS/view?usp=drive_link" 
    },
  ],
  "KRTI-LELA": [
    { 
      id: 'BIANTARA LELA-MK', 
      title: "Misi Subdivisi Mekanik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1ifS2cPcvPYmTeP7HeNGlsGAKnfrDAaI0/view?usp=drive_link" 
    },
    { 
      id: 'BIANTARA LELA-EL', 
      title: "Misi Subdivisi Elektronik", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/11TzuHhp4g5pQRWnOxKETTPL4yT_GnUIM/view?usp=drive_link" 
    },
    { 
      id: 'BIANTARA LELA-SYS', 
      title: "Misi Subdivisi System", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/143-KT7c7xOa7g21XoXMPWy5dA0C-dSoJ/view?usp=drive_link" 
    },
  ],
  "Creative Media": [
    { 
      id: 'MEDIA', 
      title: "Misi Divisi Creative Media", 
      desc: "Perhatikan dan cermati instruksi yang telah diberikan dengan baik!",
      link: "https://drive.google.com/file/d/1Uwtgd5aeZqUWehQ2qDQs65tlYtvebVMF/view?usp=drive_link" 
    }
  ]
};

const divisions = Object.keys(missionDatabase) as Division[];

export default function MissionControlPage() {
  const [activeTab, setActiveTab] = useState<Division>("KRTI-LELA");

  return (
    <div className="min-h-screen bg-gray-900 text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-8 sm:py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block bg-blue-500/20 p-3 rounded-2xl mb-4 border border-cyan-500/30">
            <Target size={40} className="text-blue-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Mission Board
          </h1>
          <p className="mt-3 text-gray-400 text-lg">
            Silahkan kerjakan misi sesuai dengan divisi yang anda pilih!
          </p>
        </header>

        {/* --- PANDUAN SINGKAT --- */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/40 border border-gray-700 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <Info size={20} />
            </div>
            <div>
                <h4 className="font-bold text-sm">Pilih Misi</h4>
                <p className="text-xs text-gray-400 mt-1">Sesuaikan misi dengan divisi yang anda pilih saat pendaftaran!</p>
            </div>
          </div>
          <div className="bg-gray-800/40 border border-gray-700 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                <Settings size={20} />
            </div>
            <div>
                <h4 className="font-bold text-sm">Perhatikan Instruksi</h4>
                <p className="text-xs text-gray-400 mt-1">Selesaikan instruksi misi dengan baik dan benar, serta kumpulkan tepat waktu!</p>
            </div>
          </div>
          <div className="bg-gray-800/40 border border-gray-700 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <AlertTriangle size={20} />
            </div>
            <div>
                <h4 className="font-bold text-sm">Gunakan Email Mahasiswa</h4>
                <p className="text-xs text-gray-400 mt-1">Gunakan Email Unsoed (.mhs.unsoed.ac.id) untuk mengakses soal dan mengirim penugasan!</p>
            </div>
          </div>
          <div className="bg-gray-800/40 border border-gray-700 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                <Calendar size={20} />
            </div>
            <div>
                <h4 className="font-bold text-sm">Deadline 11 Februari 2026 Pukul 23.59 WIB</h4>
                <p className="text-xs text-gray-400 mt-1">Pastikan anda mengirim penugasan tepat waktu!</p>
            </div>
          </div>
          <div className="bg-gray-800/40 border border-gray-700 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                <Folder size={20} />
            </div>
            <div>
                <h4 className="font-bold text-sm">Open for Public</h4>
                <p className="text-xs text-gray-400 mt-1"> Pastikan akses folder pengumpulan misi yang kamu unggah dalam kondisi publik!</p>
            </div>
          </div>
        </div>

        {/* --- MISSION BOARD --- */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
               Daftar Misi
            </h2>
            <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent ml-6"></div>
          </div>

          {/* Tab Divisi */}
          <div className="flex flex-wrap gap-2 mb-10 bg-gray-800/30 p-1.5 rounded-2xl border border-gray-800 w-full sm:w-fit">
            {divisions.map(div => (
              <button
                key={div}
                onClick={() => setActiveTab(div)}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm
                  ${activeTab === div ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white hover:bg-gray-800'}
                `}
              >
                {div === "KRAI" && <Settings size={16} />}
                {div === "KRSRI" && <Settings size={16} />}
                {div === "KRTMI" && <Settings size={16} />}
                {div === "KRTI-RP" && <Settings size={16} />}
                {div === "KRTI-FW" && <Settings size={16} />}
                {div === "KRTI-LELA" && <Settings size={16} />}
                {div === "Creative Media" && <Briefcase size={16} />}
                {div}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {missionDatabase[activeTab].map((mission) => (
              <div 
                key={mission.id}
                className="bg-gray-800/40 border border-gray-700 p-6 rounded-3xl hover:border-cyan-500/50 transition-all group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20">
                      {mission.id}
                    </span>
                    <h3 className="text-xl font-bold mt-6 text-white group-hover:text-cyan-300 transition-colors">
                      {mission.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {mission.desc}
                </p>
                <div className="pt-4 border-t border-gray-700/50">
                    <a 
                      href={mission.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-all font-bold shadow-lg shadow-cyan-500/10 active:scale-95"
                    >
                      Lihat Instruksi <ExternalLink size={18} />
                    </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='mb-20'>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                    Submission
                </h2>
                <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent ml-6"></div>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 p-6 rounded-3xl hover:border-cyan-500/50 transition-all group flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            Form Pengumpulan Misi
                        </h3>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    Pastikan tugas yang anda kerjakan sudah sesuai dengan format dan instruksi yang telah diberikan! <em><strong>Note: </strong></em>Gunakan Email Unsoed untuk mengakses form pengumpulan!
                </p>
                <div className="pt-4 border-t border-gray-700/50">
                    <a 
                      href="https://forms.gle/NLb24zXDKS8C7Pn88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-cyan-400 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105"
                    >
                      Kumpulkan disini!<ExternalLink size={18} />
                    </a>
                </div>
              </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}