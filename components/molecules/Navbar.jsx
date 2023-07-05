"use client";

import { navLinks } from "@/constants";
import { NavLink } from "@/components/atoms";

export default function Navbar() {
  return (
    <nav className="flex justify-end space-x-4 ">
      {navLinks.map((navLink) => (
        <NavLink url={navLink.url} key={navLink.id}>
          {navLink.text}
        </NavLink>
      ))}
    </nav>
  );
}
