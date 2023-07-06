import clsxm from "@/utils/clsxm";

import { Heading, Paragraph } from "@/components/atoms";

export default function HeroText({ className = "" }) {
  return (
    <div
      className={clsxm(
        "px-4 lg:px-8 ", // Spacing
        `${className}` // Props
      )}
    >
      <Heading
        size="big"
        className={clsxm(
          "mb-2" // Spacing
        )}
      >
        Hi, ich bin Jock
      </Heading>
      <Heading
        size="medium"
        className={clsxm(
          "mb-8 lg:mb-12" // Spacing
        )}
      >
        Frontend-Entwickler und UX/UI Designer <br />
        aus dem Bayrischen Wald
      </Heading>
      <Paragraph>
        ... Autodidakt in sämtlichen Lebenslagen, kreativer Problemlöser
        strukturierter Denker und ein herzlicher Mensch, gepaart mit einem
        starken Willen.
      </Paragraph>
    </div>
  );
}
