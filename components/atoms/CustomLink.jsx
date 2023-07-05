"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ url, className = "", children }) {
  // Get the current pathname
  const router = usePathname();

  return (
    <Link href={url} className={`group relative ${className}`}>
      {children}

      {/* when pathname matches, add span and effect */}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] w-0 bg-primary transition-[width] duration-300 group-hover:w-full ${
          router === url ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
