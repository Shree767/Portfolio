"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Services from "./Services";
import Resume from "./Resume";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Snow from "@/components/Snow";

export default function Home() {
  return (
    <main className="snap-y snap-proximity scroll-smooth">

      {/* ================= HOME ================= */}
      <section id="home" className="min-h-screen snap-start pl-48 pt-12">
  <div className="h-full flex items-center">
    
    {/* LEFT CONTENT */}
    <div className="flex-1">
      <div className="max-w-xl">
        <span className="">Front-end Developer</span>

        <h1 className="h1">
          Hello I'm <br />
          <span className="text-accent mx-auto overflow-hidden text-ellipsis whitespace-nowrap ">Shree Charan H </span>
        </h1>
        <br></br>

        <p className="max-w-[650px] mb-12 text-white line-clamp-5">
         I build <span className="text-accent">scalable</span>, <span className="text-accent">high-performance </span>interfaces with a strong focus on accessibility and user experience.
          My work prioritizes clean architecture, performance, and long-term maintainability.
        </p>

        <div className="flex items-center gap-8">
          <a
  href="/ShreeCharan_Frontend_developer"
  download
  className="inline-flex"
>
  <Button variant="outline" size="lg">
    <span>Download CV</span>
    <FiDownload className="text-xl" />
  </Button>
</a>

          <Social
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center"
          />
        </div>
      </div>
    </div>

    {/* RIGHT STATS */}
    <div className="hidden xl:flex w-[320px] justify-end pr-42">
      <Stats />
    </div>

  </div>
</section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="h-screen snap-start flex items-center">
        <Services />
      </section>

      {/* ================= RESUME ================= */}
      <section id="resume" className="min-h-screen snap-start ">
        <Resume />
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="min-h-screen snap-start px-24 xl:px-48 py-24">
        <Projects />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="snap-start px-24 xl:px-48 py-24">
        <Contacts />
      </section>

      <Snow />
    </main>
  );
}
