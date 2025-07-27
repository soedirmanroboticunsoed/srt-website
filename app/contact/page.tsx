// Menjadikan ini Client Component untuk menangani animasi
'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { FaTiktok, FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin, FaMedium, FaSpotify } from 'react-icons/fa';
import Footer from '../components/Footer';

// --- Tipe Data untuk setiap Kartu Kontak ---
type ContactCardProps = {
  icon: React.ReactNode;
  platform: string;
  username: string;
  linkText: string;
  href: string;
  bgColor: string;
  textColor: string;
  index: number;
};

// --- DATA KONTAK: Ganti dengan link dan username Anda ---
const contactData = [
  {
    platform: "Instagram",
    username: "@soedirmanrobotic",
    linkText: "Klik untuk mengikuti",
    href: "https://www.instagram.com/srtunsoed/",
    icon: <FaInstagram size={32} />,
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    textColor: "text-white",
  },
  {
    platform: "TikTok",
    username: "@srtunsoed",
    linkText: "Klik untuk mengikuti",
    href: "https://www.tiktok.com/@srtunsoed",
    icon: <FaTiktok size={32} />, // Contoh menggunakan SVG kustom
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    platform: "WhatsApp",
    username: "Our Public Relation",
    linkText: "Klik untuk chat",
    href: "https://wa.me/6285727259202", // Ganti dengan nomor WhatsApp
    icon: <FaWhatsapp size={32} />,
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
  {
    platform: "YouTube",
    username: "Soedirman Robotic Team",
    linkText: "Klik untuk subscribe",
    href: "https://www.youtube.com/@soedirmanroboticteam",
    icon: <FaYoutube size={32} />,
    bgColor: "bg-red-600",
    textColor: "text-white",
  },
  {
    platform: "Email",
    username: "soedirmanrobotic@gmail.com",
    linkText: "Klik untuk mengirim email",
    href: "mailto:soedirmanrobotic@gmail.com",
    icon: <Mail size={32} />,
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    platform: "Medium",
    username: "Read our articles",
    linkText: "Klik untuk membaca",
    href: "https://medium.com/@soedirmanrobotic",
    icon: <FaMedium size={32} />,
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    platform: "LinkedIn",
    username: "Soedirman Robotic Team",
    linkText: "Klik untuk membaca",
    href: "https://www.linkedin.com/company/soedirman-robotic-team/",
    icon: <FaLinkedin size={32} />,
    bgColor: "bg-blue-700",
    textColor: "text-white",
  },
  {
    platform: "Spotify",
    username: "Cast-Tic (Podcast Robotic)",
    linkText: "Klik untuk mendengar",
    href: "https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=6809c6eda0da4cfd",
    icon: <FaSpotify size={32} />,
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
];
// --- Akhir Data Kontak ---

// --- Custom Hook untuk mendeteksi visibilitas elemen ---
// PERBAIKAN: Menggunakan tipe 'Element' yang lebih umum agar bisa menerima semua jenis elemen HTML
function useIsVisible(ref: React.RefObject<Element>) {
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
      // Pastikan observer ada sebelum memanggil disconnect
      if (observer && ref.current) {
        observer.disconnect();
      }
    };
  }, [ref]);
  return isIntersecting;
}

// --- Komponen untuk setiap Kartu Kontak ---
function ContactCard({ icon, platform, username, linkText, href, bgColor, textColor, index }: ContactCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isVisible = useIsVisible(ref as React.RefObject<Element>);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact-card block p-6 rounded-2xl shadow-lg transition-all duration-700 ease-out
                 bg-gray-800/50 backdrop-blur-sm border border-transparent hover:border-cyan-500/50
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10`}
      style={{ '--transition-delay': `${index * 100}ms` } as React.CSSProperties}
    >
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-full ${bgColor} ${textColor}`}>
          {icon}
        </div>
        <ExternalLink size={20} className="text-gray-400" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{platform}</h3>
        <p className="text-gray-400 mt-1">{username}</p>
      </div>
      <div className="mt-6 border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-500">{linkText}</p>
      </div>
    </a>
  );
}

// --- Komponen Utama Halaman Kontak ---
export default function ContactUsCardsPage() {
  return (
    <div className="bg-gray-900 text-white 
                  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                  bg-[size:14px_24px]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Judul dan Subjudul */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with us through various platforms to get the latest information.  
          </p>
        </div>

        {/* Grid untuk Kartu Kontak */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <ContactCard
              key={item.platform}
              {...item}
              index={index}
            />
          ))}
        </div>
      </section>
      <section id="footer" className="text-white">
        <Footer />
      </section>
    </div>
  );
}