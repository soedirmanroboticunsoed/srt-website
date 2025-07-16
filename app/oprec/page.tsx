// Menjadikan ini Client Component untuk menangani animasi
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

// --- Komponen Utama Halaman Coming Soon ---
export default function ComingSoonPageSimple() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Memicu animasi fade-in setelah komponen dimuat
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white 
                  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                  bg-[size:14px_24px]">
      <section className={`relative z-10 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className='items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24'>
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 tracking-wider uppercase transition-all duration-1000 delay-100">
                Coming Soon
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold my-4 transition-all duration-1000 delay-300">
                Open Recruitment Staff of Soedirman Robotic Team
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500">
                We are excited to announce that our open recruitment is coming soon! Stay tuned for more updates.
            </p>
            {/* Tombol Back to Home */}
            <div className="transition-all duration-1000 delay-700">
                <Link 
                    href="/" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-500"
                >
                <ArrowLeft size={18} />
                    Back to Home
                </Link>
            </div>
        </div>
      </section>
      <section id="footer" className="text-white">
        <Footer />
      </section>
    </div>
  );
}