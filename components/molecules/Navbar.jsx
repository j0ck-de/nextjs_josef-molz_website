"use client";
import clsxm from "@/utils/clsxm";
import { navLinks } from "@/constants";
import { NavLink } from "@/components/atoms";

export default function Navbar() {
  return (
    <nav
      className={clsxm(
        "flex justify-end", // Flex
        "space-x-4" // Spacing
      )}
    >
      {navLinks.map((navLink) => (
        <NavLink url={navLink.url} key={navLink.id}>
          {navLink.text}
        </NavLink>
      ))}
    </nav>
  );
}
