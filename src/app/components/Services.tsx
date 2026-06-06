import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import "../../../assests/css/style2.css";

import galaxyScanning from "../../../assests/services/galaxy_inclusion_scanning.png";
import diamondManufacturing from "../../../assests/services/diamond_manufacturing.png";
import customJewelry from "../../../assests/services/custom-jwellary.jpg";
import fancyShapes from "../../../assests/fancy.png";

const AUTOPLAY_MS = 5000;

type Slide = {
  layout?: "split" | "fullscreen";
  titleTop: string;
  titleBold: string;
  subtitle?: string;
  items: string[];
  categories?: string[];
  shapes?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  textLight?: boolean;
};

const slides: Slide[] = [
  {
    titleTop: "Galaxy™ Inclusion",
    titleBold: "Scanning",
    subtitle: "Worldwide Leader & Authorized Service Center",
    items: [
      "0.01 ct – 100 ct rough scanning",
      "Accurate planning and marking",
      "Complete in-house processing",
      "Secure & fully insured premises",
      "On-time delivery",
      "Accurate & consistent results",
    ],
    image: galaxyScanning,
    imageAlt: "Galaxy inclusion scanning technology",
    imagePosition: "center center",
  },
  {
    titleTop: "Contract",
    titleBold: "Manufacturing",
    subtitle: "End-to-End Rough to Polished Solutions",
    items: [
      "Client-supplied lab-grown rough processing",
      "Complete job work as per client specifications",
      "Planning, polishing & certification",
      "GIA & IGI solutions",
      "Calibrated sizes",
      "Fancy Yellow expertise",
      "Strict quality control",
      "Timely delivery",
    ],
    image: diamondManufacturing,
    imageAlt: "Diamond contract manufacturing",
    imagePosition: "center center",
  },
  {
    titleTop: "Custom Jewelry",
    titleBold: "Manufacturing",
    items: [
      "Made-to-order designs",
      "Precision craftsmanship",
      "Strict quality control",
      "On-time delivery",
      "Zero compromise on finishing",
    ],
    categories: [
      "Rings",
      "Earrings",
      "Pendants",
      "Tennis Bracelets",
      "Watches",
    ],
    image: customJewelry,
    imageAlt: "Custom jewelry manufacturing",
    imagePosition: "center center",
  },
  {
    layout: "fullscreen",
    titleTop: "Available",
    titleBold: "Shapes",
    items: [
      "Round · Oval · Marquise · Pear · Heart",
      "Princess · Emerald · Cushion · Radiant",
      "Asscher · Criss Cut · Old Miner Cut",
      "Trapezoid · Custom Designs",
    ],
    image: fancyShapes,
    imageAlt: "Available diamond shapes",
    imagePosition: "center center",
    textLight: true,
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === "left" ? (
        <polyline points="15 6 9 12 15 18" />
      ) : (
        <polyline points="9 6 15 12 9 18" />
      )}
    </svg>
  );
}

function SlideTextContent({
  slide,
  textClass,
  isActive,
}: {
  slide: Slide;
  textClass: string;
  isActive: boolean;
}) {
  return (
    <div className="rs-slide-content-inner">
      <p
        className={`rs-layer rs-layer-title-top ${textClass}${isActive ? " animate-in" : ""}`}
      >
        {slide.titleTop}
      </p>
      <h2
        className={`rs-layer rs-layer-title-bold ${textClass}${isActive ? " animate-in" : ""}`}
      >
        {slide.titleBold}
      </h2>
      {slide.subtitle ? (
        <h3
          className={`rs-layer rs-layer-subtitle ${textClass}${isActive ? " animate-in" : ""}`}
        >
          {slide.subtitle}
        </h3>
      ) : null}
      <ul className={`rs-layer-items ${textClass}${isActive ? " animate-in" : ""}`}>
        {slide.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {slide.categories ? (
        <div
          className={`rs-layer-categories-wrap ${textClass}${isActive ? " animate-in" : ""}`}
        >
          <p className="rs-layer-section-label">Categories:</p>
          <p className="rs-layer-categories">
            {slide.categories.join(" · ")}
          </p>
        </div>
      ) : null}
      {slide.shapes ? (
        <div
          className={`rs-layer-shapes-wrap ${textClass}${isActive ? " animate-in" : ""}`}
        >
          <p className="rs-layer-section-label">Available Shapes:</p>
          <p className="rs-layer-shapes">{slide.shapes}</p>
        </div>
      ) : null}
    </div>
  );
}

export function Services() {
  useEffect(() => {
    slides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div
      id="services"
      className="goldiama-services-scope elementor elementor-services"
      style={{ ["--autoplay-ms" as string]: `${AUTOPLAY_MS}ms` }}
    >
      <div className="rs-services-header">
        <h2 className="rs-services-title">Our Services</h2>
      </div>

      <section
        className="elementor-section elementor-top-section elementor-section-full_width elementor-section-stretched elementor-section-height-default"
        data-settings='{"stretch_section":"section-stretched"}'
        aria-roledescription="carousel"
        aria-label="Services showcase"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div className="aux-parallax-section elementor-column elementor-col-100 elementor-top-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-slider_revolution">
                <div className="elementor-widget-container">
                  <div className="wp-block-themepunch-revslider">
                    <ServicesCarousel
                      id="rev_slider_services"
                      slides={slides}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type ServicesCarouselProps = {
  id: string;
  slides: Slide[];
};

function ServicesCarousel({ id, slides }: ServicesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 25,
    watchDrag: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  /* Autoplay — scrollNext every 1s, infinite loop */
  useEffect(() => {
    if (!emblaApi) return;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [emblaApi]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  const activeSlide = slides[selectedIndex];
  const bulletsLight = activeSlide?.textLight ?? false;

  return (
    <div className="rs-fullwidth-wrap" id={`${id}_forcefullwidth`}>
      <div className="rs-module-wrap" id={`${id}_wrapper`} data-source="gallery">
        <div
          className="rs-module rs-carousel"
          id={id}
          data-version="6.7.14"
          aria-live="polite"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <button
            type="button"
            className="tp-leftarrow tparrows uranus"
            aria-label="Previous slide"
            onClick={scrollPrev}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            className="tp-rightarrow tparrows uranus"
            aria-label="Next slide"
            onClick={scrollNext}
          >
            <ChevronIcon direction="right" />
          </button>

          <div
            className={`tp-bullets hesperiden horizontal nav-pos-hor-left nav-pos-ver-bottom nav-dir-horizontal${bulletsLight ? " light-bullets" : ""}`}
            role="tablist"
            aria-label="Slide pagination"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Go to slide ${index + 1}`}
                className={`tp-bullet${index === selectedIndex ? " selected" : ""}`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>

          <div className="rs-progress" aria-hidden="true">
            <span
              key={selectedIndex}
              className="rs-progress-bar is-running"
            />
          </div>

          <div className="rs-slides rs-embla-viewport" ref={emblaRef}>
            <div className="rs-embla-container">
              {slides.map((slide, index) => {
                const isActive = index === selectedIndex;
                const isFullscreen = slide.layout === "fullscreen";
                const textClass = slide.textLight ? "text-light" : "text-dark";

                if (isFullscreen) {
                  return (
                    <div
                      key={`${slide.titleTop}-${index}`}
                      className={`rs-slide rs-embla-slide rs-slide-fullscreen${isActive ? " is-active" : ""}`}
                      aria-hidden={!isActive}
                    >
                      <div className="rs-slide-fullscreen-bg">
                        <img
                          src={slide.image}
                          alt={slide.imageAlt}
                          loading="eager"
                          decoding="async"
                          className="rs-fullscreen-image"
                          style={{
                            objectPosition:
                              slide.imagePosition ?? "center center",
                          }}
                        />
                      </div>
                      <div className="rs-slide-text-pane" aria-hidden="true" />
                      <div
                        className={`rs-slide-content-overlay ${textClass}`}
                      >
                        <SlideTextContent
                          slide={slide}
                          textClass={textClass}
                          isActive={isActive}
                        />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={`${slide.titleTop}-${index}`}
                    className={`rs-slide rs-embla-slide rs-slide-split${isActive ? " is-active" : ""}`}
                    aria-hidden={!isActive}
                  >
                    <div className={`rs-slide-content-pane ${textClass}`}>
                      <SlideTextContent
                        slide={slide}
                        textClass={textClass}
                        isActive={isActive}
                      />
                    </div>

                    <div className="rs-slide-image-pane">
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        loading="eager"
                        decoding="async"
                        className="rs-split-image"
                        style={{
                          objectPosition:
                            slide.imagePosition ?? "center center",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="rs-fw-forcer" aria-hidden="true" />
    </div>
  );
}
