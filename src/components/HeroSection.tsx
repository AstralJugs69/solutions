import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './embla.css';

// Slide data
const slides = [
  {
    id: 1,
    title: "Mobile UI Showcase",
    description: "Elegant and intuitive interfaces for Android and iOS applications"
  },
  {
    id: 2,
    title: "Desktop App UI Showcase",
    description: "Powerful and responsive interfaces for desktop applications"
  },
  {
    id: 3,
    title: "Website UI Showcase",
    description: "Modern and engaging web interfaces with seamless user experiences"
  }
];

const HeroSection: React.FC = () => {
  // Set up autoplay plugin with options
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: true,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };
  
  // Initialize Embla Carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      dragFree: false
    },
    [Autoplay(autoplayOptions)]
  );
  
  const [isPaused, setIsPaused] = useState(false);
  
  // Pause/resume autoplay on mouse enter/leave
  const handleMouseEnter = useCallback(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay?.stop();
      setIsPaused(true);
    }
  }, [emblaApi]);
  
  const handleMouseLeave = useCallback(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay?.play();
      setIsPaused(false);
    }
  }, [emblaApi]);

  return (
    <section className="w-full max-w-5xl py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Innovative Software Solutions</h1>
        <p className="text-lg md:text-xl">Crafting exceptional user experiences across all platforms</p>
      </div>
      
      <div 
        className="embla" 
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="border border-neutral-700 p-6 rounded-lg min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center text-center m-2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 