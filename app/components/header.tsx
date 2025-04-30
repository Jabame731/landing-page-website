"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b shadow-sm bg-white">
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/favicon.ico" alt="Logo" width={35} height={35} />
          Tri-J Security Agency
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 relative">
          <NavItem label="Home" href="/" />
          <NavItem
            label="About Us"
            submenu={[
              { label: "Company Overview", href: "/about#overview" },
              { label: "Why Choose Us", href: "/about#why-us" },
              { label: "History", href: "/about#history" },
            ]}
          />
          <NavItem
            label="Services"
            // submenu={[
            //   { label: "Armed Guards", href: "/services#guards" },
            //   { label: "Event Security", href: "/services#events" },
            //   { label: "Mobile Patrol", href: "/services#patrol" },
            // ]}
          />
          <NavItem label="Carrers" href="/carrers" />
          <NavItem label="Contact Us" href="/contact" />
        </nav>

        {/* Quote Button */}
        <Link
          href="/quote"
          className="hidden lg:inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md px-4 pb-4">
          <MobileItem label="Home" href="/" />
          <MobileItem
            label="About Us"
            submenu={[
              { label: "Company Overview", href: "/about#overview" },
              { label: "Why Choose Us", href: "/about#why-us" },
              { label: "History", href: "/about#history" },
            ]}
          />
          <MobileItem
            label="Services"
            submenu={[
              { label: "Armed Guards", href: "/services#guards" },
              { label: "Event Security", href: "/services#events" },
              { label: "Mobile Patrol", href: "/services#patrol" },
            ]}
          />
          <MobileItem label="Our Team" href="/team" />
          <MobileItem label="Contact Us" href="/contact" />
          <Link
            href="/quote"
            className="block bg-black text-white text-center mt-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

function NavItem({
  label,
  href,
  submenu,
}: {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}) {
  return (
    <div className="relative group">
      <Link
        href={href || "#"}
        className="text-base font-medium hover:text-black px-2 py-1"
      >
        {label}
      </Link>

      {submenu && (
        <div className="absolute left-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg rounded-md z-40 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
          <ul className="flex flex-col py-2">
            {submenu.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileItem({
  label,
  href,
  submenu,
}: {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  if (submenu) {
    return (
      <div className="mt-1">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full text-left font-medium text-sm py-2 flex justify-between items-center"
        >
          {label}
          <span className="text-xs">{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <ul className="ml-4 mt-1">
            {submenu.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="block py-1 text-sm text-gray-700 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href || "#"}
      className="block py-2 text-sm font-medium text-gray-800"
    >
      {label}
    </Link>
  );
}
