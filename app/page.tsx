'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Instagram, ArrowRight, Award, Bot, Users, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Footer from './components/Footer';

// Nomor WhatsApp tujuan
const whatsappNumber = "6285727259202";

// Pesan otomatis (opsional)
const message = "Halo, saya tertarik untuk menghubungi Soedirman Robotic Team.";

// Encode pesan agar aman untuk URL
const encodedMessage = encodeURIComponent(message);

// Ganti dengan path ke logo tim kamu
const teamLogoPath = '/images/soedirmanrobotic.png'; 

// --- Custom Hook untuk mendeteksi visibilitas elemen ---
function useIsVisible(ref: React.RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 }); // Anggap terlihat jika 20% elemen masuk layar

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

// --- Komponen untuk Animasi Angka Statistik ---
function StatItem({ value, label, icon }: { value: number, label: string, icon: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible) {
      const start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2000; // durasi animasi dalam ms
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

// --- Tipe Data untuk Sponsor ---
type Sponsor = {
  name: string;
  logoUrl: string; // Path ke logo di folder /public
  websiteUrl: string;
};

// --- DATA DUMMY: Ganti dengan data sponsor kamu ---
const sponsors: Sponsor[] = [
  { name: "Robosoed Wear", logoUrl: "/images/robosoedwear.png", websiteUrl: "#" },
  { name: "Smartfren", logoUrl: "/images/smartfren.png", websiteUrl: "#" },
  { name: "Rumah Arimbi", logoUrl: "/images/logooemah.jpg", websiteUrl: "#" },
];
// --- Akhir Data Dummy ---

// --- Tipe Data untuk Anggota Tim ---
type TeamMember = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  team: 'management' | 'technical';
  socials?: {
  linkedin?: string;
  github?: string;
  instagram?: string;
  };
};

// --- DATA DUMMY: Ganti dengan data tim kamu ---
const allTeamMembers: TeamMember[] = [
  // Management Team
  { id: 1, name: "Muhammad Rizqy Maulana Sarwono", role: "President", imageUrl: "/images/managementTeam/2.png", team: 'management', socials: { instagram: 'https://www.instagram.com/rizqysarwono13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 2, name: "Adhe Akbar Azanni", role: "Vice President", imageUrl: "/images/managementTeam/3.png", team: 'management', socials: { instagram: 'https://www.instagram.com/kangmas_akbar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 3, name: "Khoirunnisaa", role: "Head of Secretary", imageUrl: "/images/managementTeam/4.png", team: 'management', socials: { instagram: 'https://www.instagram.com/niskhr_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 4, name: "Khaerani Julieta Faestri", role: "Head of Financial Manager", imageUrl: "/images/managementTeam/7.png", team: 'management', socials: { instagram: 'https://www.instagram.com/khaeranijulieta/?utm_source=ig_web_button_share_sheet' } },
  { id: 5, name: "Ramania Nur Alifa", role: "Head of Human Resource Development", imageUrl: "/images/managementTeam/20.png", team: 'management', socials: { instagram: 'https://www.instagram.com/rnalifaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 6, name: "Farizza Ginna Zakkiya", role: "Head of Public Relation", imageUrl: "/images/managementTeam/47.png", team: 'management', socials: { instagram: 'https://www.instagram.com/fafakiyya/?utm_source=ig_web_button_share_sheet' } },
  { id: 7, name: "Rizka Nur Febriana", role: "Head of Sponsorship", imageUrl: "/images/managementTeam/28.png", team: 'management', socials: { instagram: 'https://www.instagram.com/bubkcart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 8, name: "Amanda Jovita Ardellya", role: "Head of Creative Media", imageUrl: "/images/managementTeam/11.png", team: 'management', socials: { instagram: 'https://www.instagram.com/amndaata?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 9, name: "Arimbi Sukma Kinanthi", role: "Head of Team Manager", imageUrl: "/images/managementTeam/36.png", team: 'management', socials: { instagram: 'https://www.instagram.com/arimbisukmaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },

  // Technical Team
  { id: 6, name: "Muhamad Kelvin Adiyasa", role: "Head of KRAI Blakasutha", imageUrl: "/images/kriTeams/54.png", team: 'technical', socials: { instagram: 'https://www.instagram.com/kelvinady_/?utm_source=ig_web_button_share_sheet' } },
  { id: 7, name: "Galuh Agung Wicaksono", role: "Head of KRSRI Satria", imageUrl: "/images/kriTeams/104.png", team: 'technical', socials: { instagram: 'https://www.instagram.com/galuh_agung/?utm_source=ig_web_button_share_sheet' } },
  { id: 8, name: "Rizki Nugroho Kurniawan", role: "Head of KRTMI Yudishtira", imageUrl: "/images/kriTeams/119.png", team: 'technical', socials: { instagram: 'https://www.instagram.com/rzkink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 9, name: "Farhan Ibnu Fajar", role: "Head of KRTI Biantara RP", imageUrl: "/images/krtiTeams/86.png", team: 'technical', socials: { instagram: 'https://www.instagram.com/fa.angg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { id: 10, name: "Muhammad Nur Bijak Bestari", role: "Head of KRTI Biantara FW", imageUrl: "/images/krtiTeams/102.png", team: 'technical', socials: { instagram: 'https://www.instagram.com/mnurbijak?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
];
// --- Akhir Data Dummy ---

// --- Komponen Kartu Anggota Tim ---
function TeamMemberCard({ member, index }: { member: TeamMember, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative rounded-lg overflow-hidden group aspect-[4/5]
                  transition-all duration-500 ease-in-out
                  ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
                  ${`delay-${index}`}
                  `}
    >
      <Image
        src={member.imageUrl}
        alt={member.name}
        fill
        className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-110"
        onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x500/1f2937/ffffff?text=${member.name.split(' ')[0]}`; }}
      />
      
      {/* Overlay Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Konten Info Anggota */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white
                      transform translate-y-1/2 group-hover:translate-y-0 
                      opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <h3 className="font-bold text-xl">{member.name}</h3>
        <p className="text-sm text-cyan-300 mb-2">{member.role}</p>
        <div className="flex items-center gap-3">
          {member.socials?.linkedin && <a href={member.socials.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>}
          {member.socials?.github && <a href={member.socials.github} title="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>}
          {member.socials?.instagram && <a href={member.socials.instagram} title="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>}
        </div>
      </div>
    </div>
  );
}

// --- Tipe Data untuk Prestasi ---
type Achievement = {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
};

// --- DATA DUMMY: Ganti dengan data prestasi tim kamu ---
const achievementsData: Achievement[] = [
  {
    id: 1,
    date: "July 8, 2025",
    category: "KRAI - Blakasutha",
    title: "16 Besar KRAI Nasional 2025",
    description: "Meraih posisi 16 besar dalam Kontes Robot ABU Indonesia (KRAI) 2025 dengan robot Blakasutha yang lincah dan presisi.",
    imageUrl: "/images/krai.jpg",
  },
  {
    id: 2,
    date: "2024",
    category: "KRSRI - Satria",
    title: "Lolos	Kontes Robot Nasional 2024",
    description: "Lolos dalam Kontes Robot SAR Indonesia (KRSRI) 2024 dengan robot Satria yang inovatif dan efisien.",
    imageUrl: "/images/krsri-2024.jpg",
  },
  {
    id: 3,
    date: "2024",
    category: "KRTI - Biantara",
    title: "Lolos	Kontes Robot Terbang Nasional 2024",
    description: "Meraih posisi untuk lolos ke Kontes Robot Terbang Indonesia (KRTI) 2024 dengan robot Biantara yang terbang tinggi.",
    imageUrl: "/images/articles/robot7.jpg",
  },
  {
    id: 4,
    date: "2023",
    category: "KRTMI - Yudhistira",
    title: "16	Besar	Pada Kontes Robot Indonesia Tingkat Nasional 2023",
    description: "Berhasil masuk 16 besar dalam Kontes Robot Tematik Indonesia (KRTMI) 2023 dengan robot Yudhistira yang inovatif.",
    imageUrl: "/images/krtmi.jpg",
  },
];
// --- Akhir Data Dummy ---

// --- Komponen Kartu Timeline ---
function TimelineItem({ item, index }: { item: Achievement, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const isEven = index % 2 === 0;

  return (
    // PERBAIKAN: Menggunakan pl-14 untuk memberi ruang bagi garis di mobile
    <div
      ref={ref}
      className={`relative md:flex md:justify-between items-center w-full mb-12
                  ${isEven ? 'md:flex-row-reverse' : ''}
                  transition-all duration-1000 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Spacer untuk layout desktop */}
      <div className="hidden md:block md:w-5/12"></div>
      
      {/* Ikon piala di garis timeline */}
      <div className="absolute z-20 flex items-center bg-cyan-500 shadow-xl w-12 h-12 rounded-full
                      left-0 md:left-1/2 md:-translate-x-1/2">
        <Trophy className="mx-auto text-white" size={24} />
      </div>

      {/* Konten Kartu */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl w-full md:w-5/12 p-6 ml-6 md:ml-0
                      transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500 border border-transparent">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-md mb-4"
          onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/500x300/1f2937/ffffff?text=Achievement`; }}
        />
        <p className="mb-2 text-sm font-semibold text-cyan-400">{item.date} • {item.category}</p>
        <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
        <p className="text-gray-300 leading-snug tracking-wide">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Memicu animasi setelah komponen dimuat
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const [activeTab, setActiveTab] = useState<'management' | 'technical'>('management');

  const filteredMembers = allTeamMembers.filter(member => member.team === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 text-white 
                  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                  bg-[size:14px_24px]">
      <section>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
            
            {/* Sisi Kiri: Logo */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Image
                src={teamLogoPath}
                alt="Soedirman Robotic Team Logo"
                width={300}
                height={300}
                priority
                className="w-full max-w-xs sm:max-w-sm mx-auto h-auto"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/500x500/111827/ffffff?text=SRT'; }}
              />
            </div>

            {/* Sisi Kanan: Teks, Statistik & Tombol CTA */}
            <div className={`text-center md:text-left transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-delay-200`}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-blue-600">
                Soedirman Robotic <br /> Team
              </h1>
              <p className="mt-4 text-gray-300 max-w-lg mx-auto md:mx-0 text-base sm:text-lg leading-relaxed">
                Soedirman Robotic Team is a student organization at Jenderal Soedirman University which is engaged in robotics research and student development in the organization.
              </p>

              {/* Statistik Kunci */}
              <div className="grid grid-cols-3 gap-4 my-10 max-w-md mx-auto md:mx-0">
                <StatItem value={10} label="Projects Completed" icon={<Bot size={28} />} />
                <StatItem value={5} label="Awards Won" icon={<Award size={28} />} />
                <StatItem value={110} label="Active Members" icon={<Users size={28} />} />
              </div>
              
              <div className="mt-8">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                  target="_blank" // Membuka di tab baru
                  rel="noopener noreferrer" // Praktik keamanan untuk link eksternal
                  className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20
                            transition-all duration-300 ease-in-out
                            hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30
                            transform hover:-translate-y-1"
                >
                    Contact Us
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Judul dan Subjudul */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
              Our Sponsors
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              We are proud to be supported by these amazing organizations who believe in our vision.
            </p>
          </div>

          {/* Container Logo Sponsor Statis */}
          <div className="flex justify-center items-center flex-wrap gap-12 sm:gap-16 lg:gap-24">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title={sponsor.name}
              >
                <Image
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  width={180} // Ukuran logo sedikit diperbesar agar lebih jelas
                  height={90}
                  className="object-contain h-24 w-48 filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out transform group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/180x90/e5e7eb/4b5563?text=${sponsor.name}`; }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Judul dan Subjudul */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
              Our Teams
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Get to Know Our Management and Technical Teams
            </p>
          </div>

          {/* Sistem Tab */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-lg flex gap-1">
              <button
                onClick={() => setActiveTab('management')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'management' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Management
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'technical' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Technical
              </button>
            </div>
          </div>

          {/* Grid Kartu Anggota */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>

        </div>
      </section>

      <section className="text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Judul dan Subjudul */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
              Our Achievements
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Perjalanan dan pencapaian yang membentuk kami.
            </p>
          </div>

          {/* Container Timeline */}
          <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
            {/* PERBAIKAN: Garis Vertikal yang responsif */}
            <div className="absolute border-2-2 border-cyan-500/30 h-full border
                        left-6 md:left-1/2 -translate-x-1/2"></div>
            
            {achievementsData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>

        </div>
      </section>

      <section className="text-white py-20 sm:py-24">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 to-blue-500">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Still got questions? Check out our FAQ down here & contact us if still got any.
          </p>
        </div>
        <div className="px-0 md:px-24 px-6 sm:px-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">
                How can we initiate a partnership with your organization?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! We&apos;re open to various partnership opportunities. For more details, feel free to reach out to us via email at soedirmanrobotic@gmail.com.<br />
                <br />
                You can also contact our Person In Charge through WhatsApp:<br />
                • Izzat Al Haq: +62 857-1785-3061<br />
                • Putri Anjune Paradysta: +62 821-7743-5365<br />
                <br />
                We&apos;d be thrilled to collaborate with you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">
                Do you offer any programs, booths, or the possibility for us to visit your organization?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer several programs designed to engage with external parties, including Open House, S3 Expo, Pengabdian Pengurus, and External Visitations. For students of Jenderal Soedirman University, participation is open for events like Open House and S3 Expo. For organizations, schools, and other external parties are welcome to collaborate with us through Pengabdian Pengurus and External Visitations.<br />
                <br />
                If you are interested, we kindly ask that you contact our Person In Charge in advance to check for availability:<br />
                Farizza Ginna Zakkiya: +62 857-2725-9202
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">When will you be opening recruitment for new members?</AccordionTrigger>
              <AccordionContent>
                We typically hold our Open Recruitment between November and January. However, please note that the exact timing may vary from year to year. To stay updated, make sure to follow us on Instagram, as all official announcements, including recruitment info will be posted there.<br />
                <br />
                Stay tuned and see yaa!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-bold">Is there an internship program available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer internship opportunities for those who are curious about our internal workflows and want to gain firsthand experience with how we operate. All information regarding the internship program will be announced on our Instagram, so be sure to follow us to stay updated and not miss out on any of our upcoming opportunities!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section id="footer" className="text-white">
        <Footer />
      </section>
    </div>
  );
}