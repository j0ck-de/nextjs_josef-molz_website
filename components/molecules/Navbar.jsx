import { navLinks } from "@/constants";
import { CustomLink } from "@/components/atoms";

export default function Navbar() {
  return (
    <nav className="flex justify-end space-x-4 ">
      {navLinks.map((navLink) => (
        <CustomLink url={navLink.url}>{navLink.text}</CustomLink>
      ))}
    </nav>
  );
}
