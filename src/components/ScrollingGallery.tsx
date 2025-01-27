/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";

type Prop = {
  images: string[];
};

const ScrollingGallery = ({ images }: Prop) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  let scrollInterval: number;

  const startAutoScroll = () => {
    scrollInterval = window.setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollLeft += 2; // Adjust scroll speed
        // Reset scroll position to create an infinite scroll effect
        if (
          galleryRef.current.scrollLeft + galleryRef.current.offsetWidth >=
          galleryRef.current.scrollWidth
        ) {
          galleryRef.current.scrollLeft = 0;
        }
      }
    }, 60); // Adjust interval for smoothness
  };

  const stopAutoScroll = () => {
    clearInterval(scrollInterval);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className="w-full overflow-hidden whitespace-nowrap flex items-center gap-4"
      onMouseEnter={stopAutoScroll} // Pause on hover
      onMouseLeave={startAutoScroll} // Resume on mouse leave
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery Image ${index + 1}`}
          className="h-44 w-auto flex-shrink-0 rounded-lg object-contain"
        />
      ))}
    </div>
  );
};

export { ScrollingGallery };
