"use client";

const links = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "resume", id: "resume" },
  { name: "projects", id: "projects" },
  { name: "contact", id: "contact" },
];

export default function Nav() {
  return (
    <nav className="flex gap-6">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="
            capitalize
            text-white/70
            hover:text-accent
            transition
          "
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}