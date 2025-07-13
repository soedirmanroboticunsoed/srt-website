// components/Footer.js
import Link from 'next/link';
import Image from 'next/image'; // Import Image component if you plan to use next/image for logos
import { FaInstagram, FaYoutube, FaTiktok, FaSpotify, FaLinkedin, FaGithub } from 'react-icons/fa'; // Example social icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-4">
      <div className="container mx-auto px-4">
        {/* Top Section: Links and Big Thanks To */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10 pb-10 border-b border-gray-700">
          <div>
            <h3 className="text-white font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/managementTeam" className="hover:text-white">Management Team</Link></li>
              <li><Link href="/kri-teams" className="hover:text-white">KRI Teams</Link></li>
              <li><Link href="/krti-teams" className="hover:text-white">KRTI Teams</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Media</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/konten-edukasi" className="hover:text-white">Konten Edukasi</Link></li>
              <li><Link href="/robotech" className="hover:text-white">Robotech</Link></li>
              <li><Link href="/tiktok" className="hover:text-white">Tiktok</Link></li>
              <li><Link href="/youtube" className="hover:text-white">Youtube</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Achievements</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dokumentasi" className="hover:text-white">Penghargaan</Link></li>
              <li><Link href="/dokumentasi" className="hover:text-white">Dokumentasi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Events</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pengabdian-masyarakat" className="hover:text-white">Pengabdian Masyarakat</Link></li>
              <li><Link href="/internship" className="hover:text-white">Internship</Link></li>
              <li><Link href="/open-recruitment" className="hover:text-white">Open Recruitment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Big Thanks to:</h3>
            <div className="flex space-x-4">
              {/* Replace with actual Image components or img tags */}
              <img src="/images/robosoedwear.png" alt="Sponsor 1" className="h-12" />
              <img src="/images/gudangbotol.png" alt="Sponsor 2" className="h-12" />
            </div>
          </div>
        </div>

        {/* Middle Section: Team Info and Get in Touch */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-4 pb-4 border-b border-gray-700">
          <div className="flex items-start space-x-4">
            {/* Replace with your actual logo */}
            <div className="flex items-center gap-2">
                <img src="/images/unsoed.png" alt="Logo Unsoed" className="h-10" />
                <img src="/images/soedirmanrobotic.png" alt="Logo Robotic" className="h-10" />
                <div>
                <div className="text-xs font-bold">SOEDIRMAN</div>
                <div className="text-xs font-bold">ROBOTIC</div>
                <div className="text-xs font-bold">TEAM</div>
                </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">ADDRESS</h3>
            <p className="text-sm">
              Jl. Dr. HR Boenyamin No. 708,<br />
              Grendeng, Purwokerto Utara,<br />
              Kabupaten Banyumas
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end justify-center">
            <div>
                <h3 className="text-white font-semibold mb-2">SOEDIRMAN ROBOTIC TEAM</h3>
                <p className="text-sm mb-4">
                We’re a group of students with ambitions to be the winner of Kontes Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI).
                </p>
            </div>
          </div>
          <button className="border border-white text-white py-2 px-6 rounded-full hover:bg-white h-12 w-full hover:text-black transition-colors">
              Get in Touch
          </button>
        </div>

        {/* Bottom Section: Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 Soedirman Robotic Team</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaYoutube size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaTiktok size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaSpotify size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaLinkedin size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaGithub size={20} /></Link>
            {/* Add other icons or custom SVGs here */}
            <Link href="#" className="hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> {/* Placeholder for last two icons */}
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
            </Link>
            <Link href="#" className="hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                     <circle cx="12" cy="12" r="5" fill="currentColor"/>
                </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;