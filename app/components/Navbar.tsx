'use client';

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Konten Edukasi",
    href: "https://medium.com/@soedirmanrobotic",
    description:
      "Find important and useful information presented in an interesting way.",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/srtunsoed/",
    description:
      "Look before you enter! Instagram makes it easy for you to take a quick and convenient peek at tech content.",
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@srtunsoed",
    description:
      "Keep track of your journey! Watch your progress as you enjoy quick, entertaining content, perfect for staying engaged and on pace.",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@soedirmanroboticteam",
    description:
      "Discover content with ease! Clean visual separation helps you focus, explore, and enjoy videos without getting lost.",
  },
];

// Komponen helper untuk daftar item menu, agar tidak duplikasi kode
const MainMenuItems = () => (
  <>
    <NavigationMenuItem>
      <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                href="/about"
              >
                <Image 
                  src="/images/soedirmanrobotic.png"
                  alt="Soedirman Robotic Team"
                  width={60}
                  height={60}
                  className="object-cover"
                />
                <div className="mt-4 mb-2 text-white text-lg font-medium">
                  Soedirman Robotic Team
                </div>
                <p className="text-sm leading-tight text-gray-400">
                  Get to know more about us.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href="/managementTeam" title="Management Team">
            Get to know people behind our management team.
          </ListItem>
          <ListItem href="/kri-teams" title="KRI Teams">
            Get to know people behind our robotic teams.
          </ListItem>
          <ListItem href="/krti-teams" title="KRTI Teams">
            Get to know people behind our UAV teams.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Media</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    {/* PERBAIKAN: Menghapus 'legacyBehavior' dan wrapper yang tidak perlu */}
    <NavigationMenuItem>
      <Link href="/achievements" className={navigationMenuTriggerStyle()}>
        Achievements
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Events</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-3 p-4">
            <ListItem href="/events/pengmas" title="Pengabdian Masyarakat">
                Our community service initiatives and projects.
            </ListItem>
            <ListItem href="/events/internship" title="Internship">
                Information about our internship programs.
            </ListItem>
            <ListItem href="/events/oprec" title="Open Recruitment">
                Join our team! Find out how to apply.
            </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </>
);


export default function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Menggunakan backdrop-blur untuk efek transparan yang modern
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Bagian Kiri: Logo */}
          <div className="flex items-center gap-2">
            <Image 
              src="/images/unsoed.png"
              alt="Logo Unsoed"
              width={40}
              height={40}
            />
            <Image 
              src="/images/soedirmanrobotic.png"
              alt="Logo Robotic"
              width={36}
              height={36}
            />
            <div className="hidden sm:block">
              <div className="text-xs font-bold leading-tight">SOEDIRMAN</div>
              <div className="text-xs font-bold leading-tight">ROBOTIC</div>
              <div className="text-xs font-bold leading-tight">TEAM</div>
            </div>
          </div>

          {/* Bagian Tengah: Menu untuk Desktop */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <MainMenuItems />
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Bagian Kanan: Tombol Sign In & Hamburger */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition-colors text-sm font-medium">
              Sign In
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu untuk Mobile (Collapsible) */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <NavigationMenu orientation="vertical" className="w-full">
              <NavigationMenuList className="flex flex-col gap-2 w-full">
                <MainMenuItems />
                <button className="w-full mt-4 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors text-sm font-medium">
                  Sign In
                </button>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 text-white focus:bg-gray-800 focus:text-white"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";