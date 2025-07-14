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
    title: "Biantara Fixed Wing",
    members: [
      {
        name: "Muhammad Nur Bijak Bestari",
        role: "Head of Biantara Fixed Wing",
        img: "/images/krtiTeams/102.png",
      },
      {
        name: "Ikrar Akbar Nusantara",
        role: "Mechanic of Biantara Fixed Wing",
        img: "/images/krtiTeams/93.png",
      },
      {
        name: "Denis Fajar Wicaksono",
        role: "Mechanic of Biantara Fixed Wing",
        img: "/images/krtiTeams/94.png",
      },
      {
        name: "Rio Juharno Putra",
        role: "Mechanic of Biantara Fixed Wing",
        img: "/images/krtiTeams/95.png",
      },
      {
        name: "Akhdan Luthfi Najmudin",
        role: "Mechanic of Biantara Fixed Wing",
        img: "/images/krtiTeams/96.png",
      },
      {
        name: "Krisna Dzaki Brillianto",
        role: "Mechanic of Biantara Fixed Wing",
        img: "/images/krtiTeams/97.png",
      },
      {
        name: "Daffa Faris Azmi",
        role: "Mechanic of Biantara Fixed Wing",
        img: "/images/krtiTeams/98.png",
      },
      {
        name: "Billy Hermawan",
        role: "Electronic of Biantara Fixed Wing",
        img: "/images/krtiTeams/90.png",
      },
      {
        name: "Bisma Prayoga Pambudi",
        role: "Electronic of Biantara Fixed Wing",
        img: "/images/krtiTeams/88.png",
      },
      {
        name: "Faiz Khoirul Fuadi",
        role: "Electronic of Biantara Fixed Wing",
        img: "/images/krtiTeams/89.png",
      },
      {
        name: "Ibnu Abbas",
        role: "Electronic of Biantara Fixed Wing",
        img: "/images/krtiTeams/91.png",
      },
      {
        name: "Fillipus Aditya Nugroho",
        role: "Electronic of Biantara Fixed Wing",
        img: "/images/krtiTeams/92.png",
      },
      {
        name: "Oky Rinaldi Saputra",
        role: "System of Biantara Fixed Wing",
        img: "/images/krtiTeams/99.png",
      },
      {
        name: "Rizki Arif Saifudin",
        role: "System of Biantara Fixed Wing",
        img: "/images/krtiTeams/100.png",
      },
      {
        name: "Nathanael Jovan Wahyudi",
        role: "System of Biantara Fixed Wing",
        img: "/images/krtiTeams/101.png",
      },
    ],
  },
    {
    title: "Biantara Racing Plane",
    members: [
      {
        name: "Farhan Ibnu Fajar",
        role: "Head of Biantara Racing Plane",
        img: "/images/krtiTeams/86.png",
      },
      {
        name: "Ihya Ulumudin",
        role: "Mechanic of Biantara Racing Plane",
        img: "/images/krtiTeams/80.png",
      },
      {
        name: "Satria Megantara",
        role: "Mechanic of Biantara Racing Plane",
        img: "/images/krtiTeams/82.png",
      },
      {
        name: "Adyuta Nayottama Rakha W.",
        role: "Mechanic of Biantara Racing Plane",
        img: "/images/krtiTeams/81.png",
      },
      {
        name: "Danendra Adhyaksa Emiko Widodo",
        role: "Mechanic of Biantara Racing Plane",
        img: "/images/krtiTeams/83.png",
      },
      {
        name: "Shidqi Abiyyu Ghazy",
        role: "Electronic of Biantara Racing Plane",
        img: "/images/krtiTeams/76.png",
      },
      {
        name: "Fauzi Malik Nashrullah",
        role: "Electronic of Biantara Racing Plane",
        img: "/images/krtiTeams/79.png",
      },
      {
        name: "Kevin Jonathan",
        role: "Electronic of Biantara Racing Plane",
        img: "/images/krtiTeams/78.png",
      },
      {
        name: "Daud Anugrah Rimu",
        role: "Electronic of Biantara Racing Plane",
        img: "/images/krtiTeams/77.png",
      },
      {
        name: "Cholid Muntaha",
        role: "Electronic of Biantara Racing Plane",
        img: "/images/krtiTeams/84.png",
      },
      {
        name: "Muhammad Umar Faiz Alfa Rizqy",
        role: "Electronic of Biantara Racing Plane",
        img: "/images/krtiTeams/85.png",
      },
    ],
    },
];

export const metadata = {
  title: "KRTI Teams | Soedirman Robotic Team",
};

export default function KrtiTeamsPage() {
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
            <BreadcrumbPage>KRTI Teams</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section id="title" className="px-5 py-10">
        <div className="flex flex-col items-center justify-center mb-10 gap-2">
          <h1 className="text-8xl font-black my-2">KRTI TEAMS</h1>
          <p className="text-2xl italic">&quot;The Future We Make, For the Better Life&quot;</p>
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