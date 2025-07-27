"use client";

// components/Footer.js
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok, FaSpotify, FaLinkedin} from 'react-icons/fa'; // Example social icons
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-gray-300 py-4">
      <div className="container mx-auto px-8 md:px-4">
        {/* Top Section: Links and Big Thanks To */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-5 pb-5 border-b border-gray-700">
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
              <li>
                <Link
                  href="https://medium.com/@soedirmanrobotic"
                  className="hover:text-white"
                >
                    Konten Edukasi
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.instagram.com/srtunsoed/" 
                  className="hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.tiktok.com/@srtunsoed?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" 
                  className="hover:text-white"
                >
                  Tiktok
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@soedirmanroboticteam"
                  className="hover:text-white"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Achievements</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/achievements" className="hover:text-white">Hall of Fame</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Events</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pengmas" className="hover:text-white">Our Activities</Link></li>
              <li><Link href="/internship" className="hover:text-white">Internship</Link></li>
              <li><Link href="/oprec" className="hover:text-white">Open Recruitment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Big Thanks to:</h3>
            <div className="flex flex-wrap gap-4">
              {/* Replace with actual Image components or img tags */}
              <Image
                src="/images/robosoedwear.png"
                alt="Sponsor 1"
                width={60}
                height={48}
              />
              <Image
                src="/images/logooemah.jpg"
                alt="Sponsor 2"
                width={40}
                height={40}
              />
              <Image
                src="/images/smartfren.png"
                alt="Sponsor 3"
                width={108}
                height={48}
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Team Info and Get in Touch */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-4 pb-4 border-b border-gray-700">
          <div className="flex items-start space-x-4">
            {/* Replace with your actual logo */}
            <div className="flex items-center gap-2">
                <Image 
                  src="/images/logounsoed.png"
                  alt="Logo Unsoed"
                  height={42}
                  width={42}
                />
                <Image 
                  src="/images/soedirmanrobotic.png"
                  alt="Logo Robotic"
                  height={36}
                  width={36}
                />
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
                We&apos;re a group of students with ambitions to be the winner of Kontes Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI).
                </p>
            </div>
          </div>
          <button
            onClick={() => window.open(`/contact`, '_blank')}
            className="border border-white text-white py-2 px-6 rounded-full hover:bg-white h-12 w-full hover:text-black transition-colors">
              Get in Touch
          </button>
        </div>

        {/* Bottom Section: Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 Soedirman Robotic Team</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.instagram.com/srtunsoed/" className="hover:text-white"><FaInstagram size={20} /></Link>
            <Link href="https://www.youtube.com/@soedirmanroboticteam" className="hover:text-white"><FaYoutube size={20} /></Link>
            <Link href="https://www.tiktok.com/@srtunsoed?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" className="hover:text-white"><FaTiktok size={20} /></Link>
            <Link href="https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=658206aaf3c14fa5" className="hover:text-white"><FaSpotify size={20} /></Link>
            <Link href="https://www.linkedin.com/company/soedirman-robotic-team" className="hover:text-white"><FaLinkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;