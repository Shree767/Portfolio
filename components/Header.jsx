"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white px-24 xl:px-48">
      <div className="flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Shree<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire me
          </Button>
        </div>

        {/* MOBILE NAV */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;