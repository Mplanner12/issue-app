"use client";

import Link from "next/link";
import React from "react";
import { GiInsectJaws } from "react-icons/gi";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const headedPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="px-2 py-4 flex space-x-6 border-b mb-5">
      <Link href="/">
        <GiInsectJaws />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className={`hover:text-zinc-700 ${
              headedPath === link.href ? "text-zinc-950" : "text-zinc-400"
            }`}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
