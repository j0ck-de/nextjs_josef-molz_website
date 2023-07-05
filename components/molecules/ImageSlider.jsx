"use client";
import clsxm from "@/utils/clsxm";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Paragraph } from "@/components/atoms";

const slideVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function ImageSlider({ slides, duration, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const timerRef = useRef(null);

  const handleHover = (slideIndex) => {
    setHoverIndex(slideIndex);
  };

  const handleHoverEnd = () => {
    setHoverIndex(null);
  };

  const durationInSeconds = duration * 1000;

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetTimer();
  };

  const handleDots = (slideIndex) => {
    setCurrentIndex(slideIndex);
    resetTimer();
  };

  const handlePausePlay = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(handleNext, durationInSeconds);
    }
  };

  useEffect(() => {
    if (!isPaused && areImagesLoaded && !timerRef.current) {
      timerRef.current = setInterval(handleNext, durationInSeconds);
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [isPaused, areImagesLoaded]);

  useEffect(() => {
    const preloadImages = async () => {
      setIsLoading(true);

      await Promise.all(
        slides.map(
          (slide) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = resolve;
              // Load low-quality or smaller version of the image
              img.src = slide.lowQualityImgUrl || slide.imgUrl;
            })
        )
      );

      setIsLoading(false);
      setAreImagesLoaded(true);
    };

    if (!areImagesLoaded) {
      preloadImages();
    }
  }, [slides, areImagesLoaded]);

  return (
    <div
      className={clsxm(
        "relative", // Layout
        "flex grow flex-col", // Flex
        "grayscale", // Filter
        `${className}` // Props
      )}
    >
      {isLoading ? (
        <div
          className={clsxm(
            "absolute", // Layout
            "flex items-center justify-center", // Flex
            "inset-0" // Borders
          )}
        >
          <div
            className={clsxm(
              "h-16 w-16", // Sizing
              "animate-spin", // Transistion & Animation
              "rounded-full border-b-2 border-t-2 border-primary" // Borders
            )}
          ></div>
        </div>
      ) : (
        <div
          className={clsxm(
            "flex flex-1 flex-col", // Flex
            "text-secondary" // Typography
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={handlePrev}
            className="absolute left-2 top-[50%] z-10 h-12 -translate-y-1/2 cursor-pointer transition delay-150 duration-200 ease-in-out hover:fill-primary"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={handleNext}
            className="absolute right-2 top-[50%] z-10 h-12 -translate-y-1/2 cursor-pointer transition delay-150 duration-200 ease-in-out hover:fill-primary"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>

          <motion.div
            key={currentIndex}
            layoutId="slide"
            style={{ backgroundImage: `url(${slides[currentIndex].imgUrl})` }}
            className={clsxm(
              "relative", // Layout
              "flex grow items-center justify-center", // Flex
              "bg-cover bg-center md:bg-[center_top_30%]", // Background
              "select-none" // States
            )}
            initial="hidden"
            animate="visible"
            variants={slideVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className={clsxm(
                "absolute bottom-4 m-8 lg:bottom-8", // Layout
                "text-md text-center text-secondary", // Typography
                "bg-primary", // Background
                "outline outline-1 outline-offset-4 lg:outline-2 lg:outline-offset-4" // Borders
              )}
            >
              <Paragraph
                className={clsxm(
                  "px-1 py-2 md:px-2 md:py-4", // Spacing
                  "font-subheading !text-xl md:!text-2xl lg:!text-3xl" // Typography
                )}
              >
                {slides[currentIndex].text}
              </Paragraph>
            </motion.div>
          </motion.div>
          <div
            className={clsxm(
              "absolute bottom-4 left-1/2", // Layout
              "flex justify-center", // Flex
              "space-x-4", // Spacing
              "-translate-x-1/2" // Transforms
            )}
          >
            {slides.map((slide, slideIndex) => (
              <div
                className={clsxm(
                  "z-10", // Layout
                  "h-3 w-3", // Sizing
                  "cursor-pointer", // Interactivity
                  "transition delay-150 duration-200 ease-in-out", // Transistion & Animation,
                  `${
                    slideIndex === currentIndex || slideIndex === hoverIndex
                      ? "bg-primary"
                      : "bg-secondary"
                  }` // Logic
                )}
                key={slideIndex}
                onClick={() => handleDots(slideIndex)}
                onMouseEnter={() => handleHover(slideIndex)}
                onMouseLeave={handleHoverEnd}
              />
            ))}
          </div>
          <div
            onClick={handlePausePlay}
            className={clsxm(
              "absolute right-2 top-4", // Layout
              "text-secondary hover:text-primary", // Typography
              "transition delay-150 duration-200 ease-in-out", // Transistion & Animation
              "cursor-pointer" // Interactivity
            )}
          >
            {isPaused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
