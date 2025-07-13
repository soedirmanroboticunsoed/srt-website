// components/ArticleCard.jsx
import Image from 'next/image'; // Untuk optimasi gambar Next.js

// Data contoh untuk kartu artikel
// Dalam aplikasi nyata, ini mungkin berasal dari API atau CMS
const articles = [
  {
    id: 1,
    date: 'Mar 16, 2020',
    author: 'KRAI - Blakasutha',
    authorAvatar: '/images/avatars/blakasuthaPutih.png', // Ganti dengan path avatar Anda
    title: 'Boost your conversion rate',
    imageUrl: '/images/articles/robot.jpg', // Ganti dengan path gambar Anda
    imageAlt: 'Desk with keyboard and office supplies',
  },
  {
    id: 2,
    date: 'Mar 10, 2020',
    author: 'KRSRI - Satria',
    authorAvatar: '/images/avatars/satria.png', // Ganti dengan path avatar Anda
    title: 'How to use search engine optimization to drive sales',
    imageUrl: '/images/articles/robot4.jpg', // Ganti dengan path gambar Anda
    imageAlt: 'Laptop on a desk with plants by a window',
  },
  {
    id: 3,
    date: 'Feb 12, 2020',
    author: 'KRTI - Biantara',
    authorAvatar: '/images/avatars/biantara.png', // Ganti dengan path avatar Anda
    title: 'Improve your customer experience',
    imageUrl: '/images/articles/robot7.jpg', // Ganti dengan path gambar Anda
    imageAlt: 'iMac computer on a desk showing a wave wallpaper',
  },
];

export default function ArticleGrid() {
  return (
    <div className="p-4 md:p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative rounded-xl overflow-hidden shadow-xl group h-104" // Atur tinggi kartu (h-96) atau sesuai kebutuhan
            >
              {/* Background Image */}
              <Image
                src={article.imageUrl}
                alt={article.imageAlt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient (opsional, untuk readability teks) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                <div className="flex items-center text-sm mb-2 opacity-90">
                  <span>{article.date}</span>
                  <span className="mx-2">&#8226;</span> {/* Separator */}
                  <div className="flex items-center">
                    {article.authorAvatar && (
                      <Image
                        src={article.authorAvatar}
                        alt={article.author}
                        width={18} // Ukuran avatar
                        height={18} // Ukuran avatar
                        className="rounded-full mr-2 object-cover"
                      />
                    )}
                    <span>{article.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-tight">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}