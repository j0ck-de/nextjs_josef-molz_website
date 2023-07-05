import clsxm from "@/utils/clsxm";

export function Paragraph({
  size = "big" || "medium" || "small",
  children,
  className,
}) {
  return (
    <>
      <p
        className={clsxm(
          "font-extralight leading-tight tracking-tight lg:text-xl", // Typography
          `${className}` // Props
        )}
      >
        {children}
      </p>
    </>
  );
}
