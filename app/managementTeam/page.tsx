import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Footer from "../components/Footer";

const teamData = [
  {
    title: "President & Vice President",
    members: [
      {
        name: "M. Rizqy Maulana Sarwono",
        role: "President",
        img: "/images/managementTeam/2.png",
      },
      {
        name: "Adhe Akbar Azanni",
        role: "Vice President",
        img: "/images/managementTeam/3.png",
      },
    ],
  },
  {
    title: "Secretary",
    members: [
      {
        name: "Khoirunnisaa",
        role: "Head of Secretary",
        img: "/images/managementTeam/4.png",
      },
      {
        name: "Dewi Nurisma",
        role: "Staff of Secretary",
        img: "/images/managementTeam/6.png",
      },
      {
        name: "Shafira Arintia Zen",
        role: "Staff of Secretary",
        img: "/images/managementTeam/5.png",
      },
    ],
  },
  {
    title: "Financial Manager",
    members: [
      {
        name: "Khaerani Julieta Faestri",
        role: "Head of Financial Manager",
        img: "/images/managementTeam/7.png",
      },
      {
        name: "Ardelia Vivian Zahra",
        role: "Staff of Financial Manager",
        img: "/images/managementTeam/8.png",
      },
      {
        name: "Salsabila Arvani Hasibuan",
        role: "Staff of Financial Manager",
        img: "/images/managementTeam/9.png",
      },
    ],
  },
  {
    title: "Human Resources Development",
    members: [
      {
        name: "Ramania Nur Alifa",
        role: "Head of Human Resources Development",
        img: "/images/managementTeam/20.png",
      },
      {
        name: "Agam Priatama",
        role: "Staff of Human Resources Development",
        img: "/images/managementTeam/21.png",
      },
      {
        name: "Dewi Sita Agustin",
        role: "Staff of Human Resources Development",
        img: "/images/managementTeam/24.png",
      },
      {
        name: "Laetare Clara Febrianti",
        role: "Staff of Human Resources Development",
        img: "/images/managementTeam/23.png",
      },
      {
        name: "Muhammad Hakam Adli",
        role: "Staff of Human Resources Development",
        img: "/images/managementTeam/25.png",
      },
      {
        name: "Nabilla Putri Andini",
        role: "Staff of Human Resources Development",
        img: "/images/managementTeam/22.png",
      },
      {
        name: "Pratiwi Rahmadiana",
        role: "Staff of Human Resources Development",
        img: "/images/managementTeam/26.png",
      },
    ],
  },
  {
    title: "Public Relations",
    members: [
      {
        name: "Farizza Ginna Zakkiya",
        role: "Head of Public Relations",
        img: "/images/managementTeam/47.png",
      },
      {
        name: "Aisyah Nurul Natasya",
        role: "Staff of Public Relations",
        img: "/images/managementTeam/48.png",
      },
      {
        name: "Fondra Nafi",
        role: "Staff of Public Relations",
        img: "/images/managementTeam/51.png",
      },
      {
        name: "Hasna Tri Arfiyanti",
        role: "Staff of Public Relations",
        img: "/images/managementTeam/49.png",
      },
      {
        name: "Izzat Al Haq",
        role: "Staff of Public Relations",
        img: "/images/managementTeam/52.png",
      },
      {
        name: "Widya Raisa Lestari",
        role: "Staff of Public Relations",
        img: "/images/managementTeam/50.png",
      },
    ],
  },
  {
    title: "Creative Media",
    members: [
      {
        name: "Amanda Jovita Ardellya",
        role: "Head of Creative Media",
        img: "/images/managementTeam/11.png",
      },
      {
        name: "Aqsha Ramadhan Dimas Haryanto",
        role: "Staff of Creative Media",
        img: "/images/managementTeam/17.png",
      },
      {
        name: "Citra Salsabila",
        role: "Staff of Creative Media",
        img: "/images/managementTeam/14.png",
      },
      {
        name: "Diva Syahita Mawarni",
        role: "Staff of Creative Media",
        img: "/images/managementTeam/12.png",
      },
      {
        name: "Fahreza Adi Prabowo",
        role: "Staff of Creative Media",
        img: "/images/managementTeam/15.png",
      },
      {
        name: "Nursyafika",
        role: "Staff of Creative Media",
        img: "/images/managementTeam/13.png",
      },
      {
        name: "Wini Maulani Putri",
        role: "Staff of Creative Media",
        img: "/images/managementTeam/16.png",
      },
      {
        name: "Nisa Ul Wafa",
        role: "Staff of Creative Media",
        img: "/images/managementTeam/18.png",
      },
    ],
  },
  {
    title: "Team Manager",
    members: [
      {
        name: "Arimbi Sukma Kinanthi",
        role: "Head of Team Manager",
        img: "/images/managementTeam/36.png",
      },
      {
        name: "Muh Nur Bayu Arya Tama",
        role: "Manager of KRAI Blakasutha",
        img: "/images/managementTeam/42.png",
      },
      {
        name: "Faiz Habibi Syauqi",
        role: "Manager of KRSRI Satria",
        img: "/images/managementTeam/39.png",
      },
      {
        name: "Faiza Kamelia",
        role: "Manager of KRSRI Satria",
        img: "/images/managementTeam/40.png",
      },
      {
        name: "Erlind Rachman Putrie",
        role: "Manager of KRTMI Yudhistira",
        img: "/images/managementTeam/38.png",
      },
      {
        name: "Muhammad Habib Al Fatih",
        role: "Manager of KRTMI Yudhistira",
        img: "/images/managementTeam/43.png",
      },
      {
        name: "Nadia Satti Maduma Gultom",
        role: "Manager of KRTI Biantara Racing Plane",
        img: "/images/managementTeam/45.png",
      },
      {
        name: "Hanna Aufa Azmy",
        role: "Manager of KRTI Biantara Racing Plane",
        img: "/images/managementTeam/41.png",
      },
      {
        name: "Klara Rosalia Imelda",
        role: "Manager of KRTI Biantara Fixed Wing",
        img: "/images/managementTeam/37.png",
      },
      {
        name: "Aliya Karunia Putri",
        role: "Manager of KRTI Biantara Fixed Wing",
        img: "/images/managementTeam/44.png",
      },
    ],
  },
  {
    title: "Sponsorship",
    members: [
      {
        name: "Rizka Nur Febriana",
        role: "Head of Sponsorship",
        img: "/images/managementTeam/28.png",
      },
      {
        name: "Arya Samandika",
        role: "Staff of Sponsorship",
        img: "/images/managementTeam/29.png",
      },
      {
        name: "Cinta Adhwaa Nabiilah S.",
        role: "Staff of Sponsorship",
        img: "/images/managementTeam/30.png",
      },
      {
        name: "Nayla Octavia Ramadhani",
        role: "Staff of Sponsorship",
        img: "/images/managementTeam/31.png",
      },
      {
        name: "Muhammad Faizal Khabibi",
        role: "Staff of Sponsorship",
        img: "/images/managementTeam/32.png",
      },
      {
        name: "Putri Anjune Paradysta",
        role: "Staff of Sponsorship",
        img: "/images/managementTeam/33.png",
      },
      {
        name: "Yoana Ardiana",
        role: "Staff of Sponsorship",
        img: "/images/managementTeam/34.png",
      },
    ],
  },
]

export const metadata = {
  title: "Management Teams | Soedirman Robotic Team",
};

export default function AboutPage() {
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
            <BreadcrumbPage>Management Team</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section id="title" className="px-5 py-10">
        <div className="flex flex-col items-center justify-center mb-10 gap-2">
          <h1 className="text-8xl font-black my-2">MANAGEMENT TEAM</h1>
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