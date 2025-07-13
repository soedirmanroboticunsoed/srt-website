import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "../components/Footer";

const teamData = [
  {
    title: "Blakasutha",
    members: [
      {
        name: "Muhamad Kelvin Adiyasa",
        role: "Head of Blakasutha",
        img: "/images/kriTeams/54.png",
      },
      {
        name: "Zaidan Al Ghoffari",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/67.png",
      },
      {
        name: "Christian Ardy Artha Sanjaya",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/64.png",
      },
      {
        name: "Mahavira Rabbani",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/62.png",
      },
      {
        name: "Naf’an Yazid",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/60.png",
      },
      {
        name: "Daffa Arya Riovaldo",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/68.png",
      },
      {
        name: "Muhammad Fauzan Ramadhan D.",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/65.png",
      },
      {
        name: "Bramantyo Al Fajri",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/61.png",
      },
      {
        name: "Al Jatsiya Profitar Taqwala",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/66.png",
      },
      {
        name: "Ezra Zackysa Yendi Putra",
        role: "Mechanic of Blakasutha",
        img: "/images/kriTeams/63.png",
      },
      {
        name: "Ahmad Faisal Falah",
        role: "Electronic of Blakasutha",
        img: "/images/kriTeams/70.png",
      },
      {
        name: "Faiz Weka Surya Zein",
        role: "Electronic of Blakasutha",
        img: "/images/kriTeams/69.png",
      },
      {
        name: "Rahmat Amalul Ahlin",
        role: "Electronic of Blakasutha",
        img: "/images/kriTeams/71.png",
      },
      {
        name: "Naufal Zaky Ramadhan",
        role: "Electronic of Blakasutha",
        img: "/images/kriTeams/72.png",
      },
      {
        name: "Rafi Bahtiar",
        role: "Electronic of Blakasutha",
        img: "/images/kriTeams/74.png",
      },
      {
        name: "Raul Abrar Palmawanto",
        role: "Electronic of Blakasutha",
        img: "/images/kriTeams/73.png",
      },
      {
        name: "Daffa Randika",
        role: "Programmer of Blakasutha",
        img: "/images/kriTeams/57.png",
      },
      {
        name: "Athallah Tsany Satriyaji",
        role: "Programmer of Blakasutha",
        img: "/images/kriTeams/58.png",
      },
      {
        name: "Arlen Bayu Wijaya",
        role: "Programmer of Blakasutha",
        img: "/images/kriTeams/59.png",
      },
      {
        name: "Muhammad Syhamsudin",
        role: "Programmer of Blakasutha",
        img: "/images/kriTeams/55.png",
      },
      {
        name: "Pancar Wahyu Setiabi",
        role: "Programmer of Blakasutha",
        img: "/images/kriTeams/56.png",
      },
    ],
  },
  {
    title: "Satria",
    members: [
      {
        name: "Galuh Agung Wicaksono",
        role: "Head of Satria",
        img: "/images/kriTeams/104.png",
      },
      {
        name: "Nadaa Mufiidah Sari",
        role: "Mechanic of Satria",
        img: "/images/kriTeams/111.png",
      },
      {
        name: "Enggar Seto Ginalih",
        role: "Mechanic of Satria",
        img: "/images/kriTeams/112.png",
      },
      {
        name: "Rahmat Faldi Pratama",
        role: "Mechanic of Satria",
        img: "/images/kriTeams/113.png",
      },
      {
        name: "Mohamad Risqiy Al- Amin",
        role: "Mechanic of Satria",
        img: "/images/kriTeams/110.png",
      },
      {
        name: "Khoiri Faldi Marwan Hakim",
        role: "Mechanic of Satria",
        img: "/images/kriTeams/109.png",
      },
      {
        name: "Rafid Zaki Nurrohman",
        role: "Electronic of Satria",
        img: "/images/kriTeams/116.png",
      },
      {
        name: "Hermawan",
        role: "Electronic of Satria",
        img: "/images/kriTeams/117.png",
      },
      {
        name: "Hilmy Tsaqif Firdaus",
        role: "Electronic of Satria",
        img: "/images/kriTeams/115.png",
      },
      {
        name: "Galindra Feoras Ugary",
        role: "Electronic of Satria",
        img: "/images/kriTeams/114.png",
      },
      {
        name: "Tegar Dwi Agung Saputra",
        role: "Programmer of Satria",
        img: "/images/kriTeams/108.png",
      },
      {
        name: "Probo Dwi Yulastono",
        role: "Programmer of Satria",
        img: "/images/kriTeams/107.png",
      },
      {
        name: "Farhan Hakim",
        role: "Programmer of Satria",
        img: "/images/kriTeams/106.png",
      },
      {
        name: "Gandhi Dhuta Nirvana",
        role: "Programmer of Satria",
        img: "/images/kriTeams/105.png",
      },
    ],
  },
  {
    title: "Yudishtira",
    members: [
      {
        name: "Rizki Nugroho Kurniawan",
        role: "Head of Yudishtira",
        img: "/images/kriTeams/119.png",
      },
      {
        name: "Nabil Emillul Fata",
        role: "Mechanic of Yudishtira",
        img: "/images/kriTeams/121.png",
      },
      {
        name: "Muhammad Husein Al Rasyid",
        role: "Mechanic of Yudishtira",
        img: "/images/kriTeams/120.png",
      },
      {
        name: "Muhammad Firros Azka",
        role: "Mechanic of Yudishtira",
        img: "/images/kriTeams/122.png",
      },
      {
        name: "Melody Salman Billaahi",
        role: "Mechanic of Yudishtira",
        img: "/images/kriTeams/123.png",
      },
      {
        name: "Muhammad Bayu Adjie Sutrisno",
        role: "Mechanic of Yudishtira",
        img: "/images/kriTeams/124.png",
      },
      {
        name: "Indah Karisma Hidayah Riyanto",
        role: "Electronic of Yudishtira",
        img: "/images/kriTeams/125.png",
      },
      {
        name: "Hanif Muhammad Anam",
        role: "Electronic of Yudishtira",
        img: "/images/kriTeams/126.png",
      },
      {
        name: "Patu Muhammad Harits",
        role: "Electronic of Yudishtira",
        img: "/images/kriTeams/127.png",
      },
      {
        name: "Talitha Ayunda Maritsa",
        role: "Electronic of Yudishtira",
        img: "/images/kriTeams/128.png",
      },
      {
        name: "Muhammad Sholahatul Haq",
        role: "Programmer of Yudishtira",
        img: "/images/kriTeams/131.png",
      },
      {
        name: "Rahmadani Hafsari",
        role: "Programmer of Yudishtira",
        img: "/images/kriTeams/132.png",
      },
      {
        name: "Raden Demas Amirul Plawirakusumah",
        role: "Programmer of Yudishtira",
        img: "/images/kriTeams/130.png",
      },
      {
        name: "Gunady Sidik",
        role: "Programmer of Yudishtira",
        img: "/images/kriTeams/129.png",
      },
    ],
  },
];

export const metadata = {
  title: "KRI Teams | Soedirman Robotic Team",
};

export default function KriTeamsPage() {
  return (
    <main>
      <Breadcrumb className="p-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/about">About Us</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-white">
            <BreadcrumbPage>KRI Teams</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section id="title" className="px-5 py-10">
        <div className="flex flex-col items-center justify-center mb-10 gap-2">
          <h1 className="text-8xl font-black my-2">KRI TEAMS</h1>
          <p className="text-2xl italic">"The Future We Make, For the Better Life"</p>
        </div>
      </section>
      <section id="teamPage">
        <div className="min-h-screen bg-black text-white px-6 py-16">
          {teamData.map((section) => (
            <div key={section.title} className="mb-24 text-center">
              <h2 className="text-4xl font-bold mb-12">{section.title}</h2>
              <div className="flex flex-wrap justify-center gap-24">
                {section.members.map((member) => (
                  <div key={member.name} className="w-40 text-center">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="mt-4 font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="footer" className="px-5 py-10 text-white">
        <Footer />
      </section>
    </main>
  );
}