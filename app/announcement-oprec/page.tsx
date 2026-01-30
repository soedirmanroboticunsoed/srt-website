'use client';

import { useState, useRef } from 'react';
import { Search, CheckCircle, XCircle, PartyPopper, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import Footer from '../components/Footer';

interface Applicant {
  id: number;
  name: string;
  division: string;
  status: 'accepted' | 'rejected';
}

const applicants: Applicant[] = [
    { 
        id: 1, 
        name: 'Widya Saraswati', 
        division: 'Secretary', 
        status: 'accepted' 
    },
];

// --- FUNGSI HELPER UNTUK MENGHITUNG LEVENSHTEIN DISTANCE ---
const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

// Komponen utama untuk Halaman Pengumuman
export default function InternshipAnnouncementPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<'idle' | 'not-found' | Applicant>('idle');
  const [isSearching, setIsSearching] = useState(false);

  const contactPerson = {
      name: "Laetare Clara Febrianti",
      whatsappNumber: "6281586023404"
  };

  const contactPerson2 = {
      name: "Agam Priatama",
      whatsappNumber: "6288239699686"
  };
  
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

  const fireConfetti = () => {
    if (confettiCanvasRef.current) {
      const myConfetti = confetti.create(confettiCanvasRef.current, {
        resize: true,
        useWorker: true,
      });
      myConfetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchResult('idle');

    setTimeout(() => {
      const query = searchQuery.trim().toLowerCase();
      
      // --- LOGIKA PENCARIAN DENGAN PENGECEKAN BERLAPIS ---
      const TYPO_THRESHOLD_FULLNAME = 3; 
      const TYPO_THRESHOLD_NICKNAME = 2;

      const foundApplicant = applicants.find(applicant => {
        const applicantNameLower = applicant.name.toLowerCase();
        
        // Cek 1: Bandingkan query dengan NAMA LENGKAP (untuk typo)
        const fullNameDistance = levenshteinDistance(applicantNameLower, query);
        if (fullNameDistance <= TYPO_THRESHOLD_FULLNAME) {
          return true;
        }

        const applicantParts = applicantNameLower.split(' ');
        const queryParts = query.split(' ');

        // Cek 2: Pencocokan Awalan (untuk "Budi S" atau "Budi Santo")
        if (queryParts.length > 1 && queryParts.length <= applicantParts.length) {
            const isPartialMatch = queryParts.every((queryPart, index) => {
                // Kata terakhir dari query bisa berupa awalan
                if (index === queryParts.length - 1) {
                    return applicantParts[index].startsWith(queryPart);
                }
                // Kata-kata lainnya harus sama persis
                return applicantParts[index] === queryPart;
            });
            if (isPartialMatch) {
                return true;
            }
        }
        
        // Cek 3: Bandingkan query dengan SETIAP BAGIAN NAMA (untuk nama panggilan & typo)
        return applicantParts.some(
          part => levenshteinDistance(part, query) <= TYPO_THRESHOLD_NICKNAME
        );
      });

      if (foundApplicant && foundApplicant.status === 'accepted') {
        setSearchResult(foundApplicant);
        setTimeout(fireConfetti, 100);
      } else {
        setSearchResult('not-found');
      }

      setIsSearching(false);
    }, 1000);
  };

  return (
    <main className='min-h-screen bg-gray-900 text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] px-4 sm:px-6 lg:px-8'>
      <div className="relative py-12">
        <canvas ref={confettiCanvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-20" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-500/20 p-3 rounded-xl mb-6">
              <PartyPopper size={32} className="text-blue-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Pengumuman Hasil Seleksi
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Internship Soedirman Robotic Team 2025
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Terima kasih kepada seluruh pendaftar atas antusiasme dan partisipasinya. Silakan masukkan nama lengkap Anda di bawah ini untuk melihat hasil seleksi.
          </p>

          <form onSubmit={handleSearch} className="mt-10 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ketik nama lengkap Anda di sini..."
                className="w-full pl-5 pr-12 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute inset-y-0 right-2.5 my-auto h-10 w-10 flex items-center justify-center bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition disabled:bg-gray-600"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                ) : (
                  <Search size={20} />
                )}
              </button>
            </div>
          </form>

          <div className="mt-12 min-h-[250px] flex items-center justify-center">
            {searchResult === 'idle' && (
              <p className="text-gray-500">Hasil akan ditampilkan di sini.</p>
            )}

            {typeof searchResult === 'object' && (
              <div className="relative w-full max-w-md p-8 bg-green-500/10 border border-green-500/30 rounded-xl shadow-lg shadow-green-500/10 text-center animate-fade-in">
                <CheckCircle size={48} className="mx-auto text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-green-300">Selamat, Anda Lolos!</h3>
                <p className="mt-4 text-3xl font-bold text-white">{searchResult.name}</p>
                <p className="mt-1 text-lg text-gray-300">
                  Diterima di <span className="font-semibold text-cyan-300">{searchResult.division}</span>
                </p>
              </div>
            )}

            {searchResult === 'not-found' && (
              <div className="w-full max-w-md p-8 bg-red-500/10 border border-red-500/30 rounded-xl shadow-lg shadow-red-500/10 text-center animate-fade-in">
                <XCircle size={48} className="mx-auto text-red-400 mb-4" />
                <h3 className="text-2xl font-bold text-red-300">Mohon Maaf</h3>
                <p className="mt-4 text-lg text-gray-300">
                  Anda belum lolos seleksi Internship Soedirman Robotic Team. Jangan berkecil hati, tetap semangat dan terus kembangkan potensimu!
                </p>
                <p className="mt-2 text-gray-400">Terima kasih banyak atas partisipasinya.</p>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3"><Send size={28}/> Langkah Selanjutnya Bagi yang Lolos</h2>
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <ul className="space-y-4 text-gray-300 list-decimal list-inside">
              <li>
                <strong>Konfirmasi Diterima:</strong> Harap segera melakukan konfirmasi dengan menghubungi narahubung yang tertera paling lambat tanggal <strong>12 September 2025 pukul 23:59 WIB</strong>
              </li>
              <li>
                <strong>Bergabung Grup WhatsApp:</strong> Wajib bergabung ke dalam grup WhatsApp resmi melalui tautan yang akan dikirimkan oleh narahubung.
              </li>
            </ul>
            <h3 className='my-6 text-center font-bold text-xl text-cyan-300'>Narahubung</h3>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
              <a 
                href={`https://wa.me/${contactPerson.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <p className="text-lg font-semibold text-white mt-1">{contactPerson.name}</p>
                <p className="text-gray-400">+62 815-8602-3404</p>
              </a>
              <a 
                href={`https://wa.me/${contactPerson2.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <p className="text-lg font-semibold text-white mt-1">{contactPerson2.name}</p>
                <p className="text-gray-400">+62 882-3969-9686</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}