import clsxm from "@/utils/clsxm";
import { Logo } from "@/components/atoms";
import { Navbar } from "@/components/molecules";

export default function Header() {
  return (
    <header
      className={clsxm(
        "relative", // Layout
        "flex items-center justify-between", // Flex
        "px-4 md:px-0   ", // Spacing
        "h-header" // Sizing
      )}
    >
      <Logo />
      <Navbar />
    </header>
  );
}
