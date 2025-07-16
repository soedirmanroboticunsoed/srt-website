// Menjadikan ini Client Component untuk menangani animasi
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import Footer from '../components/Footer';

// --- Tipe Data untuk setiap Postingan ---
type PostItem = {
  id: number;
  title: string;
  slug: string; // URL-friendly version of the title
  category: string;
  date: string;
  imageUrl: string;
  description: string;
};

// --- DATA DUMMY: Ganti dengan data kegiatan tim kamu ---
const activityPosts: PostItem[] = [
  {
    id: 1,
    title: "Workshop Internal Robotika 2025",
    slug: "workshop-internal-robotika-2025",
    category: "Edukasi",
    date: "22 Juni 2025",
    imageUrl: "/images/events/workshop.jpg",
    description: "Membagikan pengetahuan dasar tentang mikrokontroler dan sensor kepada lebih dari 50 mahasiswa baru.",
  },
  {
    id: 2,
    title: "Visitasi ke Universitas Muhammadiyah Purwokerto",
    slug: "visitasi-ump-2025",
    category: "Organisasi",
    date: "3 Mei 2025",
    imageUrl: "/images/events/visitasi.jpg",
    description: "Menghibur dan mengedukasi anak-anak melalui demonstrasi interaktif robot-robot karya tim kami.",
  },
  {
    id: 3,
    title: "Expo UKM Soedirman Robotic Team 2024",
    slug: "expo-ukm-2024",
    category: "Edukasi",
    date: "12-13 Agustus 2024",
    imageUrl: "/images/events/expo.jpg",
    description: "Suasana di balik layar saat tim bekerja keras menyempurnakan robot untuk kompetisi nasional.",
  },
  {
    id: 4,
    title: "Open House SRT 2024",
    slug: "open-house-srt-2024",
    category: "Edukasi",
    date: "23 Agustus 2024",
    imageUrl: "/images/events/openhouse.jpg",
    description: "Mendapatkan wawasan langsung tentang penerapan robotika di dunia industri manufaktur modern.",
  },
   {
    id: 5,
    title: "Panggih Sedulur 2024",
    slug: "panggih-sedulur-2024",
    category: "Organisasi",
    date: "18 Agustus 2024",
    imageUrl: "/images/events/panggihsedulur.jpg",
    description: "Mencari talenta-talenta baru yang bersemangat untuk bergabung dan berinovasi bersama kami.",
  },
   {
    id: 6,
    title: "Pengabdian Pengurus 2024 X SMAN 2 Purbalingga",
    slug: "pengabdian-2024",
    category: "Sosial",
    date: "21 April 2024",
    imageUrl: "/images/events/pengabdian2.jpg",
    description: "Tes penerbangan perdana drone Biantara V.2 untuk persiapan Kontes Robot Terbang Indonesia.",
  },
];
// --- Akhir Data Dummy ---

// --- Custom Hook untuk mendeteksi visibilitas elemen ---
function useIsVisible(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref]);
  return isIntersecting;
}

// --- Komponen untuk setiap Kartu Postingan ---
function PostCard({ post, index }: { post: PostItem, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`bg-gray-800/50 rounded-lg overflow-hidden group
                 transition-all duration-700 ease-out
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1f2937/ffffff?text=Event`; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-cyan-900/50 text-cyan-300 px-2 py-0.5 rounded-full">
            <Tag size={12} />
            <span>{post.category}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.description}</p>
      </div>
    </div>
  );
}


// --- Komponen Utama Halaman Postingan Kegiatan ---
export default function ActivityPostsPage() {
  return (
    <div className="text-white min-h-screen bg-gray-900 text-white 
                  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                  bg-[size:14px_24px]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">

        {/* Judul dan Subjudul */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
            Our Activities
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Follow the journey, research, and precious moments of the Soedirman Robotic Team.
          </p>
        </div>

        {/* Grid untuk Kartu Postingan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activityPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>
      <section id="footer" className="text-white">
        <Footer />
      </section>
    </div>
  );
}