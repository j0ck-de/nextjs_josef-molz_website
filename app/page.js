import clsxm from "@/utils/clsxm";
import { Hero, About, Projects, Contact } from "@/components/organisms";

export default function Home() {
  return (
    <div
      className={clsxm(
        "relative", // Layout
        "flex flex-col", // Flex
        "h-full", // Sizing
        "sm:outline sm:outline-2 sm:outline-offset-8 md:mb-header " // Borders
      )}
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
