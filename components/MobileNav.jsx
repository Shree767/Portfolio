"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "#home" },
  { name: "services", path: "#services" },
  { name: "resume", path: "#resume" },
  { name: "projects", path: "#projects" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent SSR render (fixes hydration issue)
  if (!mounted) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center justify-center p-2">
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-primary">
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>

        {/* Logo */}
        <div className="mt-32 mb-40 text-center">
          <Link href="#home">
            <h1 className="text-4xl font-semibold">
              Shree<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-xl capitalize transition-all hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;