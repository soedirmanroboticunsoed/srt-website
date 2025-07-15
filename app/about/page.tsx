"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { BrainCircuit, BookOpen, Users, Trophy, Shield, ArrowRight, ArrowLeft, Award, Bot } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState, MouseEvent } from 'react';

// Nomor WhatsApp tujuan
const whatsappNumber = "6285727259202";

// Pesan otomatis (opsional)
const message = "Halo, saya tertarik untuk menghubungi Soedirman Robotic Team.";

// Encode pesan agar aman untuk URL
const encodedMessage = encodeURIComponent(message);

// Ganti path ini dengan path ke logo tim kamu (dari gambar yang baru)
const teamLogoPath = '/images/soedirmanrobotic.png'; 

// Ganti path ini dengan path ke gambar maskot robot kamu
const robotMascotPath = '/images/maskot.png';

// --- Komponen untuk Animasi Angka ---
function StatItem({ value, label, icon }: { value: number, label: string, icon: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1500; // durasi animasi dalam ms
      const startTime = Date.now();

      const animate = () => {
        const currentTime = Date.now();
        const progress = Math.min(1, (currentTime - startTime) / duration);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-cyan-400 mb-2">{icon}</div>
      <p className="text-4xl font-bold text-white">{count}+</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

// --- Custom Hook untuk mendeteksi visibilitas elemen ---
function useIsVisible(ref: React.RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

// Data untuk misi, agar mudah dikelola
const missionData = [
  {
    icon: <BrainCircuit size={36} />,
    title: "Forum Riset & Pengembangan",
    description: "Menjadi wadah riset ilmiah dan pengembangan di bidang robotika bagi mahasiswa yang tergabung dalam organisasi."
  },
  {
    icon: <BookOpen size={36} />,
    title: "Pelatihan & Edukasi",
    description: "Menyelenggarakan pelatihan dan pendidikan untuk mengaplikasikan ilmu di bidang robotika kepada mahasiswa dan masyarakat sekitar."
  },
  {
    icon: <Users size={36} />,
    title: "Hubungan Eksternal",
    description: "Membangun hubungan baik dengan alumni, masyarakat, dan institusi di luar."
  },
  {
    icon: <Trophy size={36} />,
    title: "Peran Aktif Kompetisi",
    description: "Berperan aktif dalam berbagai kompetisi, khususnya di bidang Robotika."
  },
  {
    icon: <Shield size={36} />,
    title: "Landasan Nilai Luhur",
    description: "Menjunjung tinggi nilai-nilai religius, toleransi, dan Tri Dharma Perguruan Tinggi sebagai landasan utama."
  }
];

export default function AboutUsPage() {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!logoContainerRef.current) return;
    const { left, top, width, height } = logoContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    logoContainerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!logoContainerRef.current) return;
    logoContainerRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white 
                    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                    bg-[size:14px_24px]">
      <section className="relative w-full bg-gray-900 text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

            {/* === Sisi Kiri: Logo Interaktif 3D === */}
            <div 
              className="w-full max-w-md mx-auto h-80 md:h-96 flex items-center justify-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                ref={logoContainerRef}
                style={{ transition: 'transform 0.1s ease-out' }}
                className="relative w-full h-full"
              >
                <Image
                  src={teamLogoPath} // Pastikan path ini benar
                  alt="Soedirman Robotic Team Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x500/111827/7DD3FC?text=Logo'; }}
                />
              </div>
            </div>

            {/* === Sisi Kanan: Teks, Statistik & Tombol CTA === */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
                Soedirman Robotic Team
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Soedirman Robotic Team is a student organization at Jenderal Soedirman University which is engaged in robotics research and student development in the organization.
              </p>

              {/* Statistik Kunci */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <StatItem value={10} label="Projects Completed" icon={<Bot size={30} />} />
                <StatItem value={5} label="Awards Won" icon={<Award size={30} />} />
                <StatItem value={110} label="Active Members" icon={<Users size={30} />} />
              </div>
              
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Praktik keamanan untuk link eksternal
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20
                              transition-all duration-300 ease-in-out
                              hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30
                              transform hover:-translate-y-1">
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
          {/* Container utama menggunakan Flexbox untuk layout responsif */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* === Sisi Kiri: Teks & Tombol CTA === */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
                About Us
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
                Soedirman Robotic Team is a student organization at Jenderal Soedirman University which is engaged in robotics research and student development in the organization.
              </p>
              {/* Tombol Call-to-Action*/}
              <Link href="/managementTeam" className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20
                              transition-all duration-300 ease-in-out
                              hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30
                              transform hover:-translate-y-1">
                Meet Our Team
                <ArrowRight size={20} />
              </Link>
            </div>
            {/* === Sisi Kanan: Gambar Maskot yang Mengambang === */}
            <div className="md:w-2/5">
              {/* Wrapper untuk animasi */}
              <div style={{ animation: 'float 6s ease-in-out infinite' }}>
                <Image
                  src={robotMascotPath} // Pastikan path ini benar
                  alt="Soedirman Robotic Team Mascot"
                  width={500}
                  height={500}
                  priority // Penting untuk gambar di atas layar (Above the Fold)
                  className="w-full h-auto"
                  // Fallback jika gambar gagal dimuat
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x500/111827/7DD3FC?text=Mascot'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-12 px-5 py-10">
          {/* Mengurangi padding vertikal di layar kecil (py-16) dan memperbesarnya di layar lebih besar (sm:py-20) */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
            {/* === Bagian Visi === */}
            {/* Mengurangi margin bawah di layar kecil (mb-20) */}
            <section className="text-center mb-20 md:mb-24">
              {/* Menyesuaikan ukuran font judul untuk layar kecil (text-4xl) */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
                Vision
              </h1>
              {/* Menyesuaikan ukuran font paragraf untuk layar kecil (text-lg) */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed italic">
                "Menjadikan Soedirman Robotic Team sebagai tim robotika yang unggul, berdaya saing tinggi, inspiratif, edukatif dan menjadi pusat Pengembangan Teknologi di Bidang Robotika dan Informasi bagi mahasiswa dan masyarakat sekitar."
              </p>
            </section>

            {/* === Bagian Misi === */}
            <section>
              {/* Menyesuaikan ukuran font judul dan margin bawah untuk layar kecil */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
                Missions
              </h2>
              
              {/* Grid ini sudah responsif secara default (1 kolom di HP, 2 di tablet, 3 di desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {missionData.map((mission, index) => (
                  <MissionCard 
                    key={index} 
                    icon={mission.icon} 
                    title={mission.title}
                    // Menambahkan delay animasi yang berbeda untuk setiap kartu
                    animationDelay={index * 150} 
                  >
                    {mission.description}
                  </MissionCard>
                ))}
              </div>
            </section>
          </main>

        <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20
                              transition-all duration-300 ease-in-out
                              hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30
                              transform hover:-translate-y-1">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </section>
      <section id="footer" className="pt-10 text-white">
        <Footer />
      </section>
    </div>
  )
}

// Komponen Kartu Misi dengan animasi saat scroll
interface MissionCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  animationDelay: number;
}

function MissionCard({ icon, title, children, animationDelay }: MissionCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      // Mengurangi padding di dalam kartu untuk layar kecil (p-6)
      className={`bg-gray-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700
                  transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div className="text-cyan-400 mb-4">
        {icon}
      </div>
      {/* Menyesuaikan ukuran font judul kartu untuk layar kecil */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}