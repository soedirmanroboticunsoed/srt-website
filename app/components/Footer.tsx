// components/Footer.js
import Link from 'next/link';
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
                  href="https://www.tiktok.com/@srtunsoed?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" 
                  className="hover:text-white"
                >
                  Robotech
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
            <Link href="https://www.instagram.com/srtunsoed/" className="hover:text-white"><FaInstagram size={20} /></Link>
            <Link href="https://www.youtube.com/@soedirmanroboticteam" className="hover:text-white"><FaYoutube size={20} /></Link>
            <Link href="https://www.tiktok.com/@srtunsoed?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1" className="hover:text-white"><FaTiktok size={20} /></Link>
            <Link href="https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=658206aaf3c14fa5" className="hover:text-white"><FaSpotify size={20} /></Link>
            <Link href="https://www.linkedin.com/company/soedirman-robotic-team" className="hover:text-white"><FaLinkedin size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaGithub size={20} /></Link>
            {/* Add other icons or custom SVGs here */}
            <Link href="#" className="hover:text-white">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/></svg>
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