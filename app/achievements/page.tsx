// Menjadikan ini Client Component untuk menangani animasi
'use client';

import { useState, useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import Footer from '../components/Footer';

// --- Tipe Data untuk Prestasi ---
type AchievementItem = {
  id: number;
  year: string;
  event: string;
  rank: string;
  description: string;
};

// --- DATA DUMMY: Ganti dengan data prestasi tim kamu ---
const achievementsList: AchievementItem[] = [
  {
    id: 1,
    year: "2025",
    event: "Kontes Robot ABU Indonesia (KRAI) 2025",
    rank: "Lolos 16 Besar",
    description: "Tim Blakasutha berhasil meraih posisi 16 besar dalam Kontes Robot ABU Indonesia (KRAI) 2025.",
  },
  {
    id: 2,
    year: "2024",
    event: "Kontes Robot Terbang Indonesia-Racing Plane (KRTI-RP) 2024",
    rank: "Lolos Kontes Nasional",
    description: "Tim Biantara RP berhasil lolos ke tahap nasional dalam KRTI 2024 Divisi Racing Plane.",
  },
  {
    id: 3,
    year: "2024",
    event: "Kontes Robot Terbang Indonesia-Fixed Wing (KRTI-FW) 2024",
    rank: "Lolos Kontes Nasional",
    description: "Tim Biantara FW berhasil lolos ke tahap nasional dalam KRTI 2024 Divisi Fixed Wing.",
  },
  {
    id: 4,
    year: "2024",
    event: "Kontes Robot SAR Indonesia (KRSRI) 2024",
    rank: "Lolos Kontes Nasional",
    description: "Tim Satria berhasil lolos ke tahap nasional dalam KRSRI 2024.",
  },
  {
    id: 5,
    year: "2024",
    event: "Kontes Robot SAR Indonesia (KRSRI) 2024",
    rank: "Juara Harapan Regional",
    description: "Tim Satria meraih Juara Harapan dalam KRSRI 2024 Regional Jawa Tengah.",
  },
  {
    id: 6,
    year: "2024",
    event: "Kontes Robot ABU Indonesia (KRAI) 2024",
    rank: "Lolos Kontes Nasional",
    description: "Tim Blakasutha berhasil lolos ke tahap nasional dalam KRAI 2024.",
  },
  {
    id: 7,
    year: "2023",
    event: "Kontes Robot Terbang Indonesia (KRTI) 2023",
    rank: "Juara Harapan Regional",
    description: "Tim Satria meraih Juara Harapan dalam KRSRI 2024 Regional Jawa Tengah.",
  },
  {
    id: 8,
    year: "2023",
    event: "Kontes Robot Terbang Indonesia (KRTI) 2023",
    rank: "Juara 3 KRTI Nasional",
    description: "Tim Biantara berhasil meraih Juara 3 dalam KRTI 2023.",
  },
  {
    id: 9,
    year: "2023",
    event: "Kontes Robot Tematik Indonesia (KRTMI) 2023",
    rank: "Lolos 16 Besar",
    description: "Tim Yudhistira berhasil masuk 16 besar dalam KRTMI Nasional 2023.",
  },
  {
    id: 10,
    year: "2021",
    event: "Kontes Robot SAR Indonesia (KRSRI) 2021",
    rank: "Lolos 5 Besar",
    description: "Tim Satria berhasil meraih posisi 5 besar dalam KRSRI 2021.",
  },
  {
    id: 11,
    year: "2020",
    event: "Kontes Robot Pemadam Api Indonesia (KRPAI) 2020",
    rank: "Juara 2 Regional 1",
    description: "Berhasil meraih Juara 2 dalam KRPAI 2020 Regional 1.",
  },
  {
    id: 12,
    year: "2020",
    event: "Kontes Robot Pemadam Api Indonesia (KRPAI) Regional 2020",
    rank: "Best Strategy",
    description: "Berhasil meraih penghargaan Best Strategy dalam KRPAI Regional 2020.",
  },
];
// --- Akhir Data Dummy ---

// --- Custom Hook untuk mendeteksi visibilitas elemen ---
function useIsVisible(ref: React.RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref]);
  return isIntersecting;
}


// --- Komponen untuk setiap baris Prestasi ---
function AchievementRow({ item, index }: { item: AchievementItem, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`border-b border-gray-800 transition-all duration-700 ease-out 
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-8 px-2">
        
        {/* Tahun */}
        <div className="md:col-span-2 text-center md:text-left">
          <p className="text-lg font-bold text-cyan-400">{item.year}</p>
        </div>
        
        {/* Nama Acara & Deskripsi */}
        <div className="md:col-span-7 text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">{item.event}</h3>
          <p className="text-gray-400 mt-1">{item.description}</p>
        </div>
        
        {/* Peringkat & Ikon */}
        <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-4 mt-4 md:mt-0">
          <Award size={32} className="text-amber-400" />
          <p className="text-xl font-medium text-white">{item.rank}</p>
        </div>

      </div>
    </div>
  );
}

// --- Komponen Utama Halaman Prestasi ---
export default function AchievementsPageNoImage() {
  return (
    <div className="text-white min-h-screen bg-gray-900 text-white 
                  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                  bg-[size:14px_24px]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-20 sm:py-24 ">
        {/* Judul dan Subjudul */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
            Hall of Fame
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A track record of dedication and innovation from our team in various competitions.
          </p>
        </div>

        {/* Daftar Prestasi */}
        <div>
          {achievementsList.map((item, index) => (
            <AchievementRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>
      <section id="footer" className="text-white">
        <Footer />
      </section>
    </div>
  );
}
