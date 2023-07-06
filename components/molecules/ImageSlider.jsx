"use client";
import clsxm from "@/utils/clsxm";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Paragraph } from "@/components/atoms";
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";

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
          <FiChevronLeft
            onClick={handlePrev}
            size={48}
            className={clsxm(
              "absolute left-2 top-[50%] z-10", // Layout
              "-translate-y-1/2", // Transforms
              "transition delay-150 duration-200 ease-in-out", // Transistion & Animation
              "hover:text-primary", // States
              "text-secondary", // Typography
              "cursor-pointer" // Interactivity
            )}
          />

          <FiChevronRight
            onClick={handleNext}
            size={48}
            className={clsxm(
              "absolute right-2 top-[50%] z-10", // Layout
              "-translate-y-1/2", // Transforms
              "transition delay-150 duration-200 ease-in-out", // Transition & Animation
              "hover:text-primary", // States
              "text-secondary", // Typography
              "cursor-pointer" // Interactivity
            )}
          />

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
            {isPaused ? <FiPlay size={48} /> : <FiPause size={48} />}
          </div>
        </div>
      )}
    </div>
  );
}
