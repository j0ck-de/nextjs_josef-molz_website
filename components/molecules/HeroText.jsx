import clsxm from "@/utils/clsxm";

import { Heading, Paragraph } from "@/components/atoms";
import { heroText } from "@/constants";

export default function HeroText({ className = "" }) {
  return (
    <div className={`${className}`}>
      <Heading
        size="big"
        className={clsxm(
          "mb-2" // Spacing
        )}
      >
        {heroText.heading}
      </Heading>
      <Heading
        size="medium"
        className={clsxm(
          "mb-6 lg:mb-12" // Spacing
        )}
      >
        {heroText.subHeading}
      </Heading>
      <Paragraph>{heroText.paragraph}</Paragraph>
    </div>
  );
}
