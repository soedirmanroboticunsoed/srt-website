'use client';

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Konten Edukasi",
    href: "/docs/primitives/alert-dialog",
    description:
      "Find important and useful information presented in an interesting way.",
  },
  {
    title: "Robotech",
    href: "/docs/primitives/hover-card",
    description:
      "Look before you enter! Robotech makes it easy for you to take a quick and convenient peek at tech content.",
  },
  {
    title: "Tiktok",
    href: "/docs/primitives/progress",
    description:
      "Keep track of your journey! Watch your progress as you enjoy quick, entertaining content, perfect for staying engaged and on pace.",
  },
  {
    title: "Youtube",
    href: "/docs/primitives/scroll-area",
    description: "Discover content with ease! Clean visual separation helps you focus, explore, and enjoy videos without getting lost.",
  },
]

export function NavigationMenuDemo() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-8 py-4 flex items-center justify-between border-b-1 border-white">
      <div className="flex items-center gap-2">
        <img src="/images/unsoed.png" alt="Logo Unsoed" className="h-10" />
        <img src="/images/soedirmanrobotic.png" alt="Logo Robotic" className="h-10" />
        <div>
          <div className="text-xs font-bold">SOEDIRMAN</div>
          <div className="text-xs font-bold">ROBOTIC</div>
          <div className="text-xs font-bold">TEAM</div>
        </div>
      </div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-black p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/about"
                    >
                      <img
                        src="/images/soedirmanrobotic.png"
                        alt="Soedirman Robotic Team"
                        className="h-auto w-24 object-cover"
                      />
                      <div className="mt-2 text-lg font-medium">
                        Soedirman Robotic Team
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
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
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs">Achievements</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Events</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Pengabdian Masyarakat</div>
                      <div className="text-muted-foreground">
                        Browse all components in the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Internship</div>
                      <div className="text-muted-foreground">
                        Learn how to use the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Open Recruitment</div>
                      <div className="text-muted-foreground">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition text-sm">
          Sign In
        </button>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
export default NavigationMenuDemo;