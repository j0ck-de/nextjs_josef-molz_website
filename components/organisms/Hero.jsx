import clsxm from "@/utils/clsxm";
import { HeroText, ImageSlider } from "@/components/molecules";
import { heroSlides } from "@/constants";

export default function Header() {
  return (
    <div
      className={clsxm(
        "flex flex-col items-center justify-center lg:flex-row", // flex
        "h-hero", // Sizing
        "text-center " // Typography
      )}
    >
      {/* left hero container */}
      <div
        className={clsxm(
          "flex flex-col items-center justify-center", // Flex
          "h-1/2 w-full lg:h-full lg:w-1/2" // Sizing
        )}
      >
        <HeroText />
      </div>
      {/* right hero */}
      <div
        className={clsxm(
          "flex flex-col", // Flex
          "h-1/2 w-full  lg:h-full lg:w-1/2" // Sizing
        )}
      >
        <ImageSlider slides={heroSlides} duration={5} />
      </div>
    </div>
  );
}
