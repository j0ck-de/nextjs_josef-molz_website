import clsxm from "@/utils/clsxm";
export function Heading({
  size = "big" || "medium" || "small",
  children,
  className = "",
}) {
  return (
    <>
      {size === "big" && (
        <h1
          className={clsxm(
            "font-heading",
            "text-7xl font-extrabold leading-[0.85] tracking-tighter sm:text-8xl sm:leading-[0.9] lg:text-9xl lg:leading-[0.85]", // Typography
            `${className}` // Props
          )}
        >
          {children}
        </h1>
      )}
      {size === "medium" && (
        <h3
          className={clsxm(
            "font-subheading text-2xl font-medium leading-[0.9] tracking-tight sm:text-3xl sm:leading-[1] md:text-4xl md:leading-[0.95]", // Typography
            `${className}` // Props
          )}
        >
          {children}
        </h3>
      )}
      {size === "small" && (
        <h5
          className={clsxm(
            "font-subheading text-xl font-medium leading-none tracking-tight", // Typography
            `${className}` // Props
          )}
        >
          {children}
        </h5>
      )}
    </>
  );
}
