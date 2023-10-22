import Link from "next/link";
import React from "react";

const NavBar = () => {
  interface links {
    label: string;
    href: string;
  }
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="px-2 py-4 flex space-x-6 border-b mb-5">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
