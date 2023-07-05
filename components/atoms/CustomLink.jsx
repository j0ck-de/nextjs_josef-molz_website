"use client";
import clsxm from "@/utils/clsxm";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ url, className = "", children }) {
  // Get the current pathname
  const router = usePathname();

  return (
    <Link
      href={url}
      className={clsxm(
        "group", // State
        "relative", // Layout
        `${className}` // Props
      )}
    >
      {children}

      {/* when pathname matches, add span and effect */}
      <span
        className={clsxm(
          "absolute -bottom-[0.01rem] left-0 inline-block", // Layout
          "h-[1.6px] w-0", // Sizing
          `${router === url ? "w-full" : "w-0"}`, // Sizing Bool
          "bg-primary", // Background
          "group-hover:w-full", // State
          "ease transition-[width] duration-300" // Transition & Animation
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
}
